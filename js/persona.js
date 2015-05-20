var personaList = [];

var personaClass = function(personalityObj) {
	personaList.push(this);
};

$(document).ready(function() {
	alert(personaList.length);
});