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
let temp = 28;
let condition = "sunny";

if (temp >= 70 && condition == "sunny") {
	alert("You should wear a tshirt");
} else if (temp > 40 && (condition == "rainy" || condition == "stormy")) {
	alert("You should wear a raincoat");
} else if (temp <= 30 && condition == "snowy") {
	alert("You should wear a winter coat");
} else if (temp > 30 && temp < 50) {
	alert("You should wear a coat");
} else {
	alert("You should wear a hoodie");
}
