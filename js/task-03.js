const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// ===============================================================
// ==================== method ==============================
const listContainerImages = document.querySelector("#gallery");

const elementsList = images.map((image) => {
	const elementList = document.createElement("li");
	elementList.classList.add('gallery__item')
	elementList.insertAdjacentHTML(
		"afterbegin",
		`<img src="${image.url}" alt="${image.alt}"
		 class="gallery__img">`
	);
		return elementList;
	});
	
	console.log(...elementsList);
	listContainerImages.append(...elementsList);
// ====================================================
// ====================================================	


а src и alt  в ковычки не нужно?

