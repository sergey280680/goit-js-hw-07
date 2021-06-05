// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
	"Картошка",
	"Грибы",
	"Чеснок",
	"Помидоры",
	"Зелень",
	"Приправы",
];

const listIngridientsEl = document.querySelector("#ingredients");

const liElements = ingredients.map((elem) => {
	const liEl = document.createElement("li");
	liEl.classList.add("ingridient");
	liEl.textContent = elem;

	return liEl;
});

console.log(...liElements);
listIngridientsEl.append(...liElements);
