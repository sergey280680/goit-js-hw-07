// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
	decrementBtn: document.querySelector('[data-action="decrement"]'),
	incrementBtn: document.querySelector('[data-action="increment"]'),
	currentValue: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onClickDecrementBtn);
refs.incrementBtn.addEventListener("click", onClickIncrementBtn);

function onClickDecrementBtn() {
	refs.currentValue.textContent = counterValue -= 1;
}

function onClickIncrementBtn() {
	refs.currentValue.textContent = counterValue += 1;
}
