/* 6 */
console.log('class');
console.log('Взяти файл template_2.html та працювати в ньому');
console.log('- Напишіть код, який :');
console.log('-- змінює колір тексту елемнту з ід main_header на будь-який інший');
let idElement = document.getElementById('main_header');
idElement.style.color = 'green';

console.log('-- робить шириниу елементу ul 400 пікселів');
let tagElements = document.getElementsByTagName('ul');
for (let element of tagElements) {
    element.style.width = '400px';
}

console.log('-- робить шириниу всіх елементів з класом linkList шириною 50%');
let classElements = document.getElementsByClassName('linkList');
for (const element of classElements) {
    element.style.width = '50%';
}

console.log('-- отримує текст який зберігається в елементі з класом listElement2');
classElements = document.getElementsByClassName('listElement2');
for (const element of classElements) {
    console.log(element.innerText);
}

console.log('-- отримує всі елементи li та змінює ім колір фону на сірий');
let liElements = document.getElementsByTagName('li');
for (const element of liElements) {
    element.style.backgroundColor = 'grey';
}

console.log('-- отримує всі елементи a та додає їм клас anchor');
let aElements = document.getElementsByTagName('a');
for (const element of aElements) {
    element.classList.add('anchor');
}

console.log('-- отримує всі елементи a та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів');
aElements = document.getElementsByTagName('a');
for (let element of aElements) {
    if (element.innerText === 'link3') {
        element.style.fontSize = '40px';
    }
}

console.log('-- отримує всі елементи a та додає їм клас element_XXX. Де XXX - текстовий контент елементу a');
aElements = document.getElementsByTagName('a');
for (let element of aElements) {
    element.classList.add(`element_${element.innerText}`);
}

console.log('-- отримує всі елементи sub-header та змінює колір фону. Фон отримати з prompt()');
classElements = document.getElementsByClassName('sub-header');
let promptColor = prompt('Введите один из следующих цветов: \n yellow, pink, green');
for (const element of classElements) {
    element.style.backgroundColor = `${promptColor}`;
}

console.log('-- отримує всі елементи sub-header та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()');
classElements = document.getElementsByClassName('sub-header');
for (const element of classElements) {
    if (element.innerText === 'content 2 segment') {
        promptColor = prompt('Введите один из следующих цветов: \n blue, red, broun');
        element.style.color = `${promptColor}`;
    }
}

console.log('-- отримує елемент з класом content_1 та заміняє в ньому текст на довільний. Текст отримати з prompt()');
classElements = document.getElementsByClassName('content_1');
let promptText = prompt('Введите любой текст:')
for (const element of classElements) {
    element.innerText = `${promptText}`;
}

console.log('-- отримати елементи p та змінити їм padding на довільне значення');
let pElements = document.getElementsByTagName('p');
for (const element of pElements) {
    element.style.padding = '5px';
}

console.log('-- отримати елементи з класом text2 та змінити їм текст на довільне значення');
classElements = document.getElementsByClassName('text2');
for (const element of classElements) {
    element.innerText = 'Qqazqazqaz';
}