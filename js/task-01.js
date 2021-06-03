// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// ======== method 1 ===============================
const navEl = document.querySelectorAll("#categories .item");
const numberOfCategories = navEl.length;

console.log(`В списке ${numberOfCategories} категории.`);
// =====================

// ======== method 2 ===============================
const navEl1 = document.querySelector("#categories");
const numberOfCategories1 = navEl1.childElementCount;

console.log(`В списке ${numberOfCategories1} категории.`);
// =====================


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4






navEl.forEach(elem => {
	const nameCategory = elem.querySelector('h2').textContent;
	const totalElements = elem.querySelector("ul").children.length; 
	console.log(`Категория: ${nameCategory}
Количество элементов: ${totalElements}`);
})




