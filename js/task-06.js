// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.getElementById("validation-input");
const inputLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", (event) => {
	if (el.currentTarget.value.length !== inputLength) {
		input.classList.add("invalid");
	} else if (el.currentTarget.classList.contains("invalid")) {
		el.currentTarget.classList.remove("invalid");
		input.classList.add("valid");
	}
});
