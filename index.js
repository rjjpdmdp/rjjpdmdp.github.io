function checkForValidity(){
	var site = getParameterByName('NewsInput');
	console.log(site);
	var signature = site.substring(site.indexOf("."), site.indexOf(".") + 5);
	var finalMessage;
	if(signature === '.gov' || signature === '.org' || signature === '.edu') {
		finalMessage = "Amazing! This website, " + site + ", is trustworthy.";
	}else{
		finalMessage = "Oh no! You might want to get your information somewhere else. This website,  " + site + ", may not be the most trustworthy."
	}
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
