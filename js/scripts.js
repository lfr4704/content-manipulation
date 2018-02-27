var names = ["Irene Flores", "Rojin Jinro", "Jade Manrique", "Ed Dong", "Luis Robles", "David Escalante", "Patrick Porcuna"];

var emails = ["irene.flores@gmail.com", "ro_jin25@icloud.com", "jade.marique@gmail.com","edtihcode@gmail.com", "lfr4704@gmail.com", "david.rubio@gmail.com", "porcuna.patrickj@gmail.com"];

for (i = 0; i < names.length; i++) {
	var html = "<div class =\"contact\">" + 
				"<p>Name: " + names[i] + "</p>" + 
	 			 "<p>Email: " + emails[i] + "</p>" 
	 			 + "</div>";
	document.getElementById("text").insertAdjacentHTML('beforeend', html);
	
	console.log(names[i]);
	console.log(emails[i]);
}

var person = {
	firstName: "Eduardo",
	lastName: "Garcia",
	email: "eagarcia@gmail.com"
};

console.log(person["firstName"]);
console.log(person.lastName);