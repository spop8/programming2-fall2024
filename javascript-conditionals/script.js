////let age = 17;
////
////if (age >= 18) {
////	alert("You are an adult!!");
////}
////else if (age >= 13) {
////	alert("You are a teenager");
////}
////else{
////	alert("You are a child");
////}
//
//let score = 87;
//
//if (score == 90) {
//	alert("You got an A!! 🥳");
//} else if (score >= 80) {
//	alert("You got an B 🙂");
//} else if (score >= 70) {
//	alert("You got an C 😢 ");
//} else {
//	alert("You need to study more 📚");
//}
// and = && or = ||
//let temp = 70;
//let condition = "cloudy";
//
//if (temp >= 70 && condition == "sunny") {
//	alert("You should wear a tshirt");
//} else if (temp > 40 && (condition == "rainy" || condition == "stormy")) {
//	alert("You should wear a raincoat");
//} else if (temp <= 30 && condition == "snowy") {
//	alert("You should wear a winter coat");
//} else if (temp > 30 && temp < 50) {
//	alert("You should wear a coat");
//} else if (temp >= 50 && temp < 70) {
//	alert("You should wear a hoodie");
//} else {
//	alert("You should pick what you want :)");
//}

//let username = "";
//let password = "";
//
//if (username == "" && password == "") {
//	alert("You should wear a tshirt");
//} else if (username == "" && password != "") {
//	alert("Your password is incorrect");
//} else if (username != "" && password == "") {
//	alert("You username is incorrect");
//} else if (temp > 30 && temp < 50) {
//	alert("You should wear a coat");
//} else if (temp >= 50 && temp < 70) {
//	alert("You should wear a hoodie");
//} else {
//	alert("You should pick what you want :)");
//}

function login() {
	const username1 = document.getElementById("u1").value;
	document.getElementById("u1").innerText = username1;
	const password1 = document.getElementById("p1").value;
	document.getElementById("p1").innerText = password1;

	if (username1 == "fedora_the_explorer" && password1 == "password") {
		document.getElementById("o1").innerText = "You have been logged in";
		document.getElementById("o1").style.color = "green";
	} else if (username1 == "fedora_the_explorer" && password1 != "password") {
		document.getElementById("o1").innerText = "Your password is incorrect";
		document.getElementById("o1").style.color = "red";
	} else if (username1 != "fedora_the_explorer" && password1 == "password") {
		document.getElementById("o1").innerText = "Your username is incorrect";
		document.getElementById("o1").style.color = "red";
	} else if (username1 != "fedora_the_explorer" && password1 != "password") {
		document.getElementById("o1").innerText = "Incorrect username and password. Please try again.";
		document.getElementById("o1").style.color = "red";
	} else {
		document.getElementById("o1").innerText = "Your username and password are incorrect";
		document.getElementById("o1").style.color = "red";
	}
}
