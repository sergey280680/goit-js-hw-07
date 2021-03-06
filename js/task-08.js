// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// =====================================================

const amount = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-action="render"]');
const renderBtn = document.querySelector('[data-action="destroy"]');
const containerBoxes = document.getElementById("boxes");

createBtn.addEventListener("click", (event) => {
	let arrBox = [];
	let size = 30;

	if (containerBoxes.hasChildNodes()) {
		containerBoxes.innerHTML = "";
	}

	for (let i = 0; i < amount.value; i++) {
		console.log(amount.value);

		// создаем рандомный цвет
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		const randomColor = `rgb(${r} ${g} ${b}) `;

		// создание бокса
		let box = document.createElement("div");
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = randomColor;
		box.style.marginTop = "5px";
		size += 10;
		arrBox.push(box);
	}

	containerBoxes.append(...arrBox);
});

renderBtn.addEventListener("click", (event) => {
	if (containerBoxes.hasChildNodes() || amount.value !== "") {
		containerBoxes.innerHTML = "";
		amount.value = "";
	}
});

