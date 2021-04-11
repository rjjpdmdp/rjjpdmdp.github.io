function checkForValidity(){
	var site = getParameterByName('NewsInput');
	var index = getPosition(site, ".", 2);
	var signature = site.substring(index, index + 4);
	var finalMessage;
	if(signature === '.gov' || signature === '.org' || signature === '.edu') {
		finalMessage = "Amazing! This website, " + site + ", is trustworthy.";
	}else{
		finalMessage = "Oh no! You might want to get your information somewhere else. This website,  " + site + ", may not be the most trustworthy."
	}
	console.log(signature);
	document.getElementById("result").innerHTML = finalMessage;
}
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}//source: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}//source: https://stackoverflow.com/questions/14480345/how-to-get-the-nth-occurrence-in-a-string
