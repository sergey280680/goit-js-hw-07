// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const controlSize = document.getElementById("font-size-control");
const text = document.getElementById("text");

controlSize.addEventListener("input", (event) => {
	text.style.fontSize = controlSize.value + "px";
});
