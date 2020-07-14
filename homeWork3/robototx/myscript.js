/* 31 */
console.log('--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії');
console.log('- знайти всі елементі, які мають class');
let allElementsInPage = document.querySelectorAll('*');
//let elementNodeListOf = document.querySelectorAll('[class]');
console.log(allElementsInPage);
let elementsHaveClass = [];
for (const iterator of allElementsInPage) {
    if (iterator.className != "") {
        elementsHaveClass.push(iterator);
    }
}
console.log(elementsHaveClass);
console.log('- знайти всі параграфи ,та змінити текст на hello oktenweb!');
let elementsParagraf = document.getElementsByTagName("p");
for (const i of elementsParagraf) {
    i.innerText = "hello oktenweb!";
}
console.log(elementsParagraf);
console.log('- знайти всі div та змінити ім колір на червоний');
let elementsDiv = document.getElementsByTagName("div");
for (const i of elementsDiv) {
    i.style.backgroundColor = "red";
}
console.log(elementsDiv);
console.log('==========');