/* 1 */
console.log('-- створити обєкт (не меньше 5ти властивостей) який описує');
console.log('- собаку');
let dog = {
    name: 'Bim',
    rock: 'cur',
    gender: 'male',
    age: 2,
    heigh: 35
};
console.log(dog);
console.log('=========================================');

console.log('- людину');
let human = {
    firstName: 'Dima',
    lastName: 'Dziubenko',
    age: 50,
    gender: 'male',
    status: true
};
console.log(human);
console.log('=========================================');

console.log('- автомобіль');
let car = {
    model: 'Model S',
    brand: 'Tesla',
    volume: 1.6,
    type: 'electric car',
    tireSize: 16
};
console.log(car);
console.log('=========================================');

console.log('- квартиру');
let flat = {
    adrres: 'Kyiv, Khreschatik 1',
    floor: 3,
    quantityRoom: 2,
    area: 65,
    yearConstruction: 1890
};
console.log(flat);
console.log('=========================================');

console.log('- книгу');
let book = {
    name: 'Lord of the Rings',
    author: 'John Ronald Reuel Tolkien',
    janre: 'fantasy',
    publishingHouse: 'AST Ukraine',
    yearOfIssue: 1954
};
console.log(book);
console.log('=========================================');


/* 2 */
console.log('-- Створити масив та вивести його в консоль:');
console.log('- з 5 собак');
let dogs = [
    { name: 'Bim', rock: 'cur', gender: 'male', age: 2, heigh: 35 },
    { name: 'Bim', rock: 'cur', gender: 'male', age: 2, heigh: 35 },
    { name: 'Bim', rock: 'cur', gender: 'male', age: 2, heigh: 35 },
    { name: 'Bim', rock: 'cur', gender: 'male', age: 2, heigh: 35 },
    { name: 'Bim', rock: 'cur', gender: 'male', age: 2, heigh: 35 },
];
console.log(dogs);
console.log('=========================================');

console.log('- 3 5 людей');
let humans = [
    { firstName: 'Dima', lastName: 'Dziubenko', age: 50, gender: 'male', status: true },
    { firstName: 'Dima', lastName: 'Dziubenko', age: 50, gender: 'male', status: true },
    { firstName: 'Dima', lastName: 'Dziubenko', age: 50, gender: 'male', status: true },
    { firstName: 'Dima', lastName: 'Dziubenko', age: 50, gender: 'male', status: true },
    { firstName: 'Dima', lastName: 'Dziubenko', age: 50, gender: 'male', status: true },
];
console.log(humans);
console.log('=========================================');

console.log('- з 5 автомобілів');
let cars = [
    { model: 'Model S', brand: 'Tesla', volume: 1.6, type: 'electric car', tireSize: 16 },
    { model: 'Model S', brand: 'Tesla', volume: 1.6, type: 'electric car', tireSize: 16 },
    { model: 'Model S', brand: 'Tesla', volume: 1.6, type: 'electric car', tireSize: 16 },
    { model: 'Model S', brand: 'Tesla', volume: 1.6, type: 'electric car', tireSize: 16 },
    { model: 'Model S', brand: 'Tesla', volume: 1.6, type: 'electric car', tireSize: 16 },
];
console.log(cars);
console.log('=========================================');

/*-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка



Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни
Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
- отримує текст з параграфа з id "content"
- отримує текст з блоку з id "rules"
- замініть текст параграфа з id 'content' на будь-який інший
- замініть текст параграфа з id 'rules' на будь-який інший
- змініть кожному елементу колір фону на червоний
- змініть кожному елементу колір тексту на синій
- отримати весь список класів елемента з id=rules і вивести їх в console.log
- отримати всі елементи з класом fc_rules
- поміняти колір тексту у всіх елементів fc_rules на червоний

====================
====================
====================

=================
=====class=======
=================
Взяти файл template_2.html та працювати в ньому
- Напишіть код, який :
-- змінює колір тексту елемнту з ід main_header на будь-який інший
-- робить шириниу елементу ul 400 пікселів
-- робить шириниу всіх елементів з класом linkList шириною 50%
-- отримує текст який зберігається в елементі з класом listElement2
-- отримує всі елементи li та змінює ім колір фону на сірий
-- отримує всі елементи 'a' та додає їм клас anchor
-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
-- отримати елементи p та змінити їм paddin на довільне значення
-- отримати елементи з класом text2 та змінити їм текст на довільне значення */