let food = document.getElementById("category");
if (food.value == "index.html") {
	document.addEventListener("DOMContentLoaded", () => {
		const pairs = [
			{ word: "el menú", match: "menu" },
			{ word: "el almuerzo", match: "lunch" },
			{ word: "el/la camarero/a", match: "waiter" },
			{ word: "el desayuno", match: "breakfast" },
			{ word: "la sección de (no) fumar", match: "(non) smoking section" },
			{ word: "la cena", match: "dinner" },
			{ word: "los entremeses", match: "appetizers" },
			{ word: "la cuenta", match: "check" },
			{ word: "el/la dueño/a", match: "owner" },
			{ word: "la propina", match: "tip" },
			{ word: "la comida", match: "food" },
			{ word: "el plato principal", match: "main dish" },
			{ word: "delicioso/a ", match: "delicious" },
			{ word: "rico/a ", match: "tasty" },
			{ word: "sabroso/a ", match: "tasty" }
		];

		let cards = document.getElementsByClassName("cards");
		console.log(cards);

		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				// Generate a random index from 0 to i
				const j = Math.floor(Math.random() * (i + 1));
				// Swap elements at indices i and j
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		function shuffleAssign() {
			// shuffle list of pairs
			let shuffledPairs = shuffleArray(pairs);
			console.log(shuffledPairs);

			//create a new array for selected pairs this round
			let cardPairs = [];

			//add the first cards.length/2 pairs with word and match to new array
			for (let i = 0; i < cards.length / 2; i++) {
				cardPairs.push(shuffledPairs[i].word);
				cardPairs.push(shuffledPairs[i].match);
			}
			console.log(cardPairs);

			//shuffle that array
			cardPairs = shuffleArray(cardPairs);

			// iterate over that array to assign cards
			for (let i = 0; i < cardPairs.length; i++) {
				cards[i].innerText = cardPairs[i];
				cards[i].onclick = isClicked;
			}

			function isClicked(e) {
				let cardClicked = e.srcElement;
				cardClicked.classList.add("clicked");
				let clicked = document.getElementsByClassName("clicked");
				if (clicked.length == 2) {
					if (isMatch(clicked[0].innerText, clicked[1].innerText)) {
						clicked[0].style.backgroundColor = "green";
						clicked[1].style.backgroundColor = "green";

						clicked[0].disabled = true;
						clicked[1].disabled = true;

						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					} else {
						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					}
				}
			}

			function isMatch(item1, item2) {
				for (let i = 0; i < pairs.length; i++) {
					if (
						(item1 == pairs[i].word && item2 == pairs[i].match) ||
						(item2 == pairs[i].word && item1 == pairs[i].match)
					) {
						return true;
					}
				}
				return false;
			}
		}

		shuffleAssign();
	});
} else if (food.value == "index.html") {
	document.addEventListener("DOMContentLoaded", () => {
		const pairs = [
			{ word: "la banana", match: "banana" },
			{ word: "las frutas", match: "fruits" },
			{ word: "el limón", match: "lemon" },
			{ word: "la manzana", match: "apple" },
			{ word: "el melocotón", match: "peach" },
			{ word: "la naranja", match: "orange" },
			{ word: "los pera", match: "pear" },
			{ word: "la uva", match: "grapes" },
			{ word: "las arvejas", match: "peas" },
			{ word: "la cebolla", match: "onion" },
			{ word: "el champiñión", match: "mushroom" },
			{ word: "la ensalada", match: "salad" },
			{ word: "los espárragos", match: "asparagus" },
			{ word: "los frijoles", match: "beans" },
			{ word: "la lechuga", match: "lettuce" },
			{ word: "el maíz", match: "corn" },
			{ word: "las papas/patatas fritas", match: "french fries" },
			{ word: "el tomate", match: "tomato" },
			{ word: "las verduras", match: "vegetables" },
			{ word: "la zanahoria", match: "carrot" }
		];

		let cards = document.getElementsByClassName("cards");
		console.log(cards);

		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				// Generate a random index from 0 to i
				const j = Math.floor(Math.random() * (i + 1));
				// Swap elements at indices i and j
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		function shuffleAssign() {
			// shuffle list of pairs
			let shuffledPairs = shuffleArray(pairs);
			console.log(shuffledPairs);

			//create a new array for selected pairs this round
			let cardPairs = [];

			//add the first cards.length/2 pairs with word and match to new array
			for (let i = 0; i < cards.length / 2; i++) {
				cardPairs.push(shuffledPairs[i].word);
				cardPairs.push(shuffledPairs[i].match);
			}
			console.log(cardPairs);

			//shuffle that array
			cardPairs = shuffleArray(cardPairs);

			// iterate over that array to assign cards
			for (let i = 0; i < cardPairs.length; i++) {
				cards[i].innerText = cardPairs[i];
				cards[i].onclick = isClicked;
			}

			function isClicked(e) {
				let cardClicked = e.srcElement;
				cardClicked.classList.add("clicked");
				let clicked = document.getElementsByClassName("clicked");
				if (clicked.length == 2) {
					if (isMatch(clicked[0].innerText, clicked[1].innerText)) {
						clicked[0].style.backgroundColor = "green";
						clicked[1].style.backgroundColor = "green";

						clicked[0].disabled = true;
						clicked[1].disabled = true;

						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					} else {
						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					}
				}
			}

			function isMatch(item1, item2) {
				for (let i = 0; i < pairs.length; i++) {
					if (
						(item1 == pairs[i].word && item2 == pairs[i].match) ||
						(item2 == pairs[i].word && item1 == pairs[i].match)
					) {
						return true;
					}
				}
				return false;
			}
		}

		shuffleAssign();
	});
} else if (food.value == "index.html") {
	document.addEventListener("DOMContentLoaded", () => {
		const pairs = [
			{ word: "el atón", match: "tuna" },
			{ word: "el bistec", match: "steak" },
			{ word: "los camarones", match: "shrimp" },
			{ word: "la carne", match: "meat" },
			{ word: "la carne de res", match: "beef" },
			{ word: "la chuleta (de cerdo)", match: "(pork) chop" },
			{ word: "la hamburguesa", match: "hamburger" },
			{ word: "el jamón", match: "ham" },
			{ word: "la langosta", match: "lobster" },
			{ word: "los mariscos", match: "shellfish" },
			{ word: "el pavo", match: "turkey" },
			{ word: "el pescado", match: "fish" },
			{ word: "el pollo (asado)", match: "(roast) chicken" },
			{ word: "la salchicha", match: "sausage" },
			{ word: "el salmón", match: "salmon" }
		];

		let cards = document.getElementsByClassName("cards");
		console.log(cards);

		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				// Generate a random index from 0 to i
				const j = Math.floor(Math.random() * (i + 1));
				// Swap elements at indices i and j
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		function shuffleAssign() {
			// shuffle list of pairs
			let shuffledPairs = shuffleArray(pairs);
			console.log(shuffledPairs);

			//create a new array for selected pairs this round
			let cardPairs = [];

			//add the first cards.length/2 pairs with word and match to new array
			for (let i = 0; i < cards.length / 2; i++) {
				cardPairs.push(shuffledPairs[i].word);
				cardPairs.push(shuffledPairs[i].match);
			}
			console.log(cardPairs);

			//shuffle that array
			cardPairs = shuffleArray(cardPairs);

			// iterate over that array to assign cards
			for (let i = 0; i < cardPairs.length; i++) {
				cards[i].innerText = cardPairs[i];
				cards[i].onclick = isClicked;
			}

			function isClicked(e) {
				let cardClicked = e.srcElement;
				cardClicked.classList.add("clicked");
				let clicked = document.getElementsByClassName("clicked");
				if (clicked.length == 2) {
					if (isMatch(clicked[0].innerText, clicked[1].innerText)) {
						clicked[0].style.backgroundColor = "green";
						clicked[1].style.backgroundColor = "green";

						clicked[0].disabled = true;
						clicked[1].disabled = true;

						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					} else {
						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					}
				}
			}

			function isMatch(item1, item2) {
				for (let i = 0; i < pairs.length; i++) {
					if (
						(item1 == pairs[i].word && item2 == pairs[i].match) ||
						(item2 == pairs[i].word && item1 == pairs[i].match)
					) {
						return true;
					}
				}
				return false;
			}
		}

		shuffleAssign();
	});
} else if (food.value == "index.html") {
	document.addEventListener("DOMContentLoaded", () => {
		const pairs = [
			{ word: "el aceite", match: "oil" },
			{ word: "el ajo", match: "garlic" },
			{ word: "el arroz", match: "rice" },
			{ word: "el azúcar", match: "sugar" },
			{ word: "los cereales", match: "cereal" },
			{ word: "el huevo", match: "egg" },
			{ word: "la mantequilla", match: "butter" },
			{ word: "la margarina", match: "margarine" },
			{ word: "la mayonesa", match: "mayonaise" },
			{ word: "el pan (tostado)", match: "(toasted) bread" },
			{ word: "la pimienta", match: "black pepper" },
			{ word: "el queso", match: "cheese" },
			{ word: "la sal", match: "salt" },
			{ word: "el sándwich", match: "sandwich" },
			{ word: "la sopa", match: "soup" },
			{ word: "el vinagre", match: "vinegar" },
			{ word: "el yogur", match: "yougurt" }
		];

		let cards = document.getElementsByClassName("cards");
		console.log(cards);

		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				// Generate a random index from 0 to i
				const j = Math.floor(Math.random() * (i + 1));
				// Swap elements at indices i and j
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		function shuffleAssign() {
			// shuffle list of pairs
			let shuffledPairs = shuffleArray(pairs);
			console.log(shuffledPairs);

			//create a new array for selected pairs this round
			let cardPairs = [];

			//add the first cards.length/2 pairs with word and match to new array
			for (let i = 0; i < cards.length / 2; i++) {
				cardPairs.push(shuffledPairs[i].word);
				cardPairs.push(shuffledPairs[i].match);
			}
			console.log(cardPairs);

			//shuffle that array
			cardPairs = shuffleArray(cardPairs);

			// iterate over that array to assign cards
			for (let i = 0; i < cardPairs.length; i++) {
				cards[i].innerText = cardPairs[i];
				cards[i].onclick = isClicked;
			}

			function isClicked(e) {
				let cardClicked = e.srcElement;
				cardClicked.classList.add("clicked");
				let clicked = document.getElementsByClassName("clicked");
				if (clicked.length == 2) {
					if (isMatch(clicked[0].innerText, clicked[1].innerText)) {
						clicked[0].style.backgroundColor = "green";
						clicked[1].style.backgroundColor = "green";

						clicked[0].disabled = true;
						clicked[1].disabled = true;

						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					} else {
						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					}
				}
			}

			function isMatch(item1, item2) {
				for (let i = 0; i < pairs.length; i++) {
					if (
						(item1 == pairs[i].word && item2 == pairs[i].match) ||
						(item2 == pairs[i].word && item1 == pairs[i].match)
					) {
						return true;
					}
				}
				return false;
			}
		}

		shuffleAssign();
	});
} else {
	document.addEventListener("DOMContentLoaded", () => {
		const pairs = [
			{ word: "el agua (mineral)", match: "(mineral) water" },
			{ word: "la bebida", match: "drink" },
			{ word: "el café", match: "coffee" },
			{ word: "la cerveza", match: "beer" },
			{ word: "el jugo (de fruta)", match: "(fruit) juice" },
			{ word: "la leche", match: "milk" },
			{ word: "el refresco", match: "soft drink" },
			{ word: "el té (helado)", match: "(iced) tea" },
			{ word: "el vino (blanco/tinto)", match: "(white/red) wine" }
		];

		let cards = document.getElementsByClassName("cards");
		console.log(cards);

		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				// Generate a random index from 0 to i
				const j = Math.floor(Math.random() * (i + 1));
				// Swap elements at indices i and j
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		function shuffleAssign() {
			// shuffle list of pairs
			let shuffledPairs = shuffleArray(pairs);
			console.log(shuffledPairs);

			//create a new array for selected pairs this round
			let cardPairs = [];

			//add the first cards.length/2 pairs with word and match to new array
			for (let i = 0; i < cards.length / 2; i++) {
				cardPairs.push(shuffledPairs[i].word);
				cardPairs.push(shuffledPairs[i].match);
			}
			console.log(cardPairs);

			//shuffle that array
			cardPairs = shuffleArray(cardPairs);

			// iterate over that array to assign cards
			for (let i = 0; i < cardPairs.length; i++) {
				cards[i].innerText = cardPairs[i];
				cards[i].onclick = isClicked;
			}

			function isClicked(e) {
				let cardClicked = e.srcElement;
				cardClicked.classList.add("clicked");
				let clicked = document.getElementsByClassName("clicked");
				if (clicked.length == 2) {
					if (isMatch(clicked[0].innerText, clicked[1].innerText)) {
						clicked[0].style.backgroundColor = "green";
						clicked[1].style.backgroundColor = "green";

						clicked[0].disabled = true;
						clicked[1].disabled = true;

						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					} else {
						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					}
				}
			}

			function isMatch(item1, item2) {
				for (let i = 0; i < pairs.length; i++) {
					if (
						(item1 == pairs[i].word && item2 == pairs[i].match) ||
						(item2 == pairs[i].word && item1 == pairs[i].match)
					) {
						return true;
					}
				}
				return false;
			}
		}

		shuffleAssign();
	});
}
