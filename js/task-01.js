// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// ======== method 1 ===============================
const navEl = document.querySelector("#categories");
const numberOfCategories = navEl.childElementCount;

console.log(`В списке ${numberOfCategories} категории.`);
// =====================

// ======== method 2 ===============================
const navEl1 = document.querySelectorAll("#categories .item");
const numberOfCategories1 = navEl1.length;

console.log(`В списке ${numberOfCategories1} категории.`);
// =====================

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


// const method = `firstElementChild.textContent`;

// =====================
const firstChildNavEl = navEl.firstElementChild;
const firstNameCategory = firstChildNavEl.firstElementChild.textContent;
const firstTotalElements = firstChildNavEl.lastElementChild.childElementCount;
console.log(`Категория: ${firstNameCategory}
Количество элементов: ${firstTotalElements}`);
// =====================


// =====================
const secondChildNavEl = navEl.children[1];
const secondNameCategory = secondChildNavEl.firstElementChild.textContent;
const secondTotalElements = secondChildNavEl.lastElementChild.childElementCount;
console.log(`Категория: ${secondNameCategory}
Количество элементов: ${secondTotalElements}`);
// =====================



// =====================
const lastChildNavEl = navEl.lastElementChild;
const lastNameCategory = lastChildNavEl.firstElementChild.textContent;
const lastTotalElements = lastChildNavEl.lastElementChild.childElementCount;
console.log(`Категория: ${lastNameCategory}
Количество элементов: ${lastTotalElements}`);
// =====================
