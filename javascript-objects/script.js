//const animal = {
//	id: 42,
//	name: "rawr",
//	type: "dog",
//	numLegs: 4
//};
//
//console.log(animal);
//
//animal["name"] = "moo";
//console.log(animal);
//
//animal.type = "cow";
//console.log(animal);
//
//animal.numLegs = 5;
//console.log(animal);
//
//delete animal.type;
//console.log(animal);
//
//console.log("name" in animal);
//console.log(animal.keys());
//console.log(Object.keys(animal));
//console.log(Object.values(animal));
//console.log(Object.entries(animal));

let person = {
	name: "Terry",
	age: 23,
	favColor: "green",
	height: "6'8\"",
	sat: 400,
	job: "Basketball player",
	fear: "inflated basketballs",
	number: 3
};
console.log(person);
//console.log(person["height"]);
console.log(person.fear);

person.age = 25;

let person2 = {
	name: "Susan",
	age: 34,
	favColor: "pink",
	height: "5'0\"",
	job: "vet",
	fear: "spiders",
	number: 101
};

console.log(
	person.name +
		" was " +
		person.age +
		" years old. While playing one of his basketball games, he met " +
		person2.name +
		". She was a bit older but they hit it off instantly. There was only one issue. Terry's fear of " +
		person.fear +
		". Susan decided to help him get over his fear as long as he helped her get over her fear of " +
		person2.fear +
		". As time went on they grew older but their height difference stayed the same. Susan being " +
		person2.height +
		" and Terry being " +
		person.height +
		". But that didn't matter to them."
);
