/* 1 */
console.log('- создать массив с 20 числами.');

let arrNumbers = [];
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.round(Math.random() * 100);
    arrNumbers.push(randomNumber);
}
console.log(arrNumbers);
console.log('==========');
/* 1.1 */
console.log('-- при помощи метода sort и колбека  отсортировать массив.');
let sortArrPlus = arrNumbers.sort((a, b) => a - b);
console.log(sortArrPlus);
console.log('==========');
/* 1.2 */
console.log('-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.');
let sortArrMinus = arrNumbers.sort((a, b) => b - a);
console.log(sortArrMinus);
console.log('==========');
/* 1.3 */
console.log('-- при помощи filter получить числа кратные 3');
let filterNum3 = arrNumbers.filter((a) => a % 3 === 0);
console.log(filterNum3);
console.log('==========');
/* 1.4 */
console.log('-- при помощи filter получить числа кратные 10');
let filterNum10 = arrNumbers.filter((a) => a % 10 === 0);
console.log(filterNum10);
console.log('==========');
/* 1.5 */
console.log('-- перебрать (проитерировать) массив при помощи foreach()');
arrNumbers.forEach((i) => console.log(i));
console.log('==========');
/* 1.6 */
console.log('-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше');
let mapArr = arrNumbers.map((i) => i * 3);
console.log(mapArr);
console.log('==========');
/* 2 */
console.log('- создать массив со словами на 15-20 элементов.');
let arrWords = [
    'Володар', 'Евдоким', 'Азат', 'Артемий', 'Джамал', 'Захар', 'Артем', 'Ефрем', 'Фарид', 'Даниил', 'Адриан', 'Алихан', 'Израиль', 'Харитон', 'Филимон'
];
console.log(arrWords)
    /* 2.1 */
console.log('-- отсортировать его по алфавиту в восходящем порядке.');
let sortArrWordsPlus = arrWords.sort((a, b) => a - b);
console.log(sortArrWordsPlus);
console.log('==========');
/* 2.2 */
console.log('-- отсортировать его по алфавиту  в нисходящем порядке.');
let sortArrWordsMinus = arrWords.sort((a, b) => b - a);
console.log(sortArrWordsMinus);
console.log('==========');
/* 2.3 */
console.log('-- отфильтровать слова длиной менее 4х символов');
console.log('==========');
/* 2.4 */
console.log('-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце');
console.log('==========');
/* 3 */
console.log('Все робити через функції масивів (foreach, map ...тд)');
console.log('Дан масив :');
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];

console.log(users);

/* 3.1 */
console.log('- відсортувати його за  віком (зростання , а потім окремо спадання)');
let userSortPlus = users.sort((user1, user2) => user1.age - user2.age);
console.log(userSortPlus);
let userSortMinus = users.sort((user1, user2) => user2.age - user1.age);
console.log(userSortMinus);
console.log('==========');
/* 3.2 */
console.log('- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)');

console.log('==========');
/* 3.3 */
console.log('- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)');
console.log('==========');
/* 3.4 */
console.log('- відсортувати його за індентифікатором');
console.log('==========');
/* 3.5 */
console.log('-- наисать функцию калькулятора с 2мя числами и колбеком');

function calcNumber(a, b, result) {
    result(a, b);
}

calcNumber(10, 20, (a, b) => console.log(a + b));
calcNumber(10, 20, (a, b) => console.log(a - b));
calcNumber(10, 20, (a, b) => console.log(a / b));
calcNumber(10, 20, (a, b) => console.log(a * b));

console.log('==========');
/* 3.6 */
console.log('-- наисать функцию калькулятора с 3мя числами и колбеком');

function calcNumberThree(a, b, c, result) {
    result(a, b, c);
}

calcNumberThree(10, 20, 1, (a, b, c) => console.log(a + b + c));
calcNumberThree(10, 20, 1, (a, b, c) => console.log(a - b - c));
calcNumberThree(10, 20, 1, (a, b, c) => console.log(a * b * c));
calcNumberThree(10, 20, 1, (a, b, c) => console.log(a / b / c));

console.log('==========');
/* 
=============================================
=============================================
=============КЛАССНАЯ РАБОТА=================
=============================================
=============================================
*/
/* 4 */
let cars = [
    { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
    { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
    { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
    { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
    { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
    { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
    { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
    { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
    { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
    { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
    { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
    { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
    { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
];
console.log(cars);
console.log('Відфільтрувати масив за наступними крітеріями :');
/* 4.1 */
console.log('- двигун більше 3х літрів');
console.log('==========');
/* 4.2 */
console.log('- двигун = 2л');
console.log('==========');
/* 4.3 */
console.log('- виробник мерс');
console.log('==========');
/* 4.4 */
console.log('- двигун більше 3х літрів + виробник мерседес');
console.log('==========');
/* 4.5 */
console.log('- двигун більше 3х літрів + виробник субару');
console.log('==========');
/* 4.6 */
console.log('- сили більше ніж 300');
console.log('==========');
/* 4.7 */
console.log('- сили більше ніж 300 + виробник субару');
console.log('==========');
/* 4.8 */
console.log('- мотор серіі ej');
console.log('==========');
/* 4.9 */
console.log('- сили більше ніж 300 + виробник субару + мотор серіі ej');
console.log('==========');
/* 4.10 */
console.log('- двигун меньше 3х літрів + виробник мерседес');
console.log('==========');
/* 4.11 */
console.log('- двигун більше 2л + сили більше 250');
console.log('==========');
/* 4.12 */
console.log('- сили більше 250  + виробник бмв');
console.log('==========');
/* 5 */
console.log('- взять слдующий массив');
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }
];
console.log(usersWithAddress);
/* 5 */
console.log('-- отсортировать его по id пользователей');
console.log('==========');
/* 5 */
console.log('-- отсортировать его по id пользователей в обратном опрядке');
console.log('==========');
/* 5 */
console.log('-- отсортировать его по возрасту пользователей');
console.log('==========');
/* 5 */
console.log('-- отсортировать его по возрасту пользователей в обратном порядке');
console.log('==========');
/* 5 */
console.log('-- отсортировать его по имени пользователей');
console.log('==========');
/* 5 */
console.log('-- отсортировать его по имени пользователей в обратном порядке');
console.log('==========');
/* 5 */
console.log('-- отсортировать его по названию улицы  в алфавитном порядке');
console.log('==========');
/* 5 */
console.log('-- отсортировать его по номеру дома по возрастанию');
console.log('==========');
/* 5 */
console.log('-- отфильтровать (оставить) тех кто младше 30');
console.log('==========');
/* 5 */
console.log('-- отфильтровать (оставить) тех у кого отрицательный статус');
console.log('==========');
/* 5 */
console.log('-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет');
console.log('==========');
/* 5 */
console.log('-- отфильтровать (оставить) тех у кого номер дома четный');
console.log('==========');
/*

===========================
======ДОПОЛНИТЕЛЬНО========
===========================

Створити обєкт автомобіля з полями:
Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
Власник автомобіля теж має бути обєкт, у якого є поля
Імя, вік, стаж водіння.
Створити не менше 7 та не більше 20 машинок.
Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
Для початку вкладіть всі наші створені автомобілі в масив cars.
Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

Пример:
Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
1. Key = 1
Answer: MinIndex = 0, MaxIndex = 0.
2. Key = 4
Answer: MinIndex = 3, MaxIndex = 6.
 */