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

listIngridientsEl.append(...liElements);
