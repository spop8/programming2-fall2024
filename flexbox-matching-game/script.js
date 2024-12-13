document.addEventListener("DOMContentLoaded", () => {
	const pairsComida = [
		{ word: "el menú", match: "menu" },
		{ word: "el almuerzo", match: "lunch" },
		{ word: "el/la camarero/a", match: "waiter" },
		{ word: "el desayuno", match: "breakfast" },
		{ word: "la sección de (no) fumar", match: "(no) smoking section" },
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
	const pairsFrutasVerduras = [
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
	const pairsCarne = [
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
	const pairsOtras = [
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
	const pairsBebidas = [
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
});
