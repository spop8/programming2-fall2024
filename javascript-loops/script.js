/*let fastFood = ["hamburger", "fries", "milkshake", "chicken nuggets"];

for (let i = 0; i < fastFood.length; i++) {
	console.log(fastFood[i]);
}

let numbers = [45, 23, 78];
let doubled = [];

for (let i = 0; i < numbers.length; i++) {
	doubled.push(numbers[i] * 2);
}
console.log(doubled);

for (let i = 0; i < 100; i++) {
	console.log("Solena");
}
*/

let animals = ["dog", "cat", "panda", "camel", "koala"];

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i]);
	let animals_upper = animals[i].toUpperCase();
	console.log(animals_upper);
}
animals.pop();
animals.pop();

let score = [80, 75, 23, 64, 90, 100, 45, 89, 67, 93];
for (let i = 0; i < score.length; i++) {
	let new_score = score[i] + 5;
	if (score[i] < 50) {
		score.splice(i, 1, "retake");
	}
}
console.log(score);
