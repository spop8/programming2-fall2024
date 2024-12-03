function generate() {
	let month = document.getElementById("month").value;
	let age = document.getElementById("age").value;
	let color = document.getElementById("color").value;

	let first = "";
	let middle = "";
	let last = "";

	// Assign first name based on birth month
	if (month == "January") {
		first = "Snow";
	} else if (month == "February") {
		first = "Winter";
	} else if (month == "March") {
		first = "Cold";
	} else if (month == "April") {
		first = "Snowflake";
	} else if (month == "May") {
		first = "Holiday";
	} else if (month == "June") {
		first = "Flurry";
	} else if (month == "July") {
		first = "Cocoa";
	} else if (month == "August") {
		first = "Snowman";
	} else if (month == "September") {
		first = "Igloo";
	} else if (month == "October") {
		first = "Chilly";
	} else if (month == "November") {
		first = "Sugar";
	} else {
		first = "Frosty";
	}

	if (age <= 30) {
		middle = "Mc";
	} else {
		middle = "O'";
	}

	if (color == "Red") {
		last = "Rain";
	} else if (color == "Orange") {
		last = "Air";
	} else if (color == "Yellow") {
		last = "Bubble";
	} else if (color == "Green") {
		last = "Shine";
	} else if (color == "Blue") {
		last = "Wind";
	} else if (color == "Purple") {
		last = "Cloud";
	} else {
		// Pink
		last = "Feather";
	}

	let name = first + " " + middle + "" + last;

	document.getElementById("name").innerText = name;
	document.getElementById("generatedname").style.display = "flex";
}
