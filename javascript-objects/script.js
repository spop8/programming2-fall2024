const animal = {
	id: 42,
	name: "rawr",
	type: "dog",
	numLegs: 4
};

console.log(animal);

animal["name"] = "moo";
console.log(animal);

animal.type = "cow";
console.log(animal);

animal.numLegs = 5;
console.log(animal);

delete animal.type;
console.log(animal);

console.log("name" in animal);
console.log(animal.keys());
console.log(Object.keys(animal));
console.log(Object.values(animal));
console.log(Object.entries(animal));
