/* 1 */
console.log('-- створити обєкт (не меньше 5ти властивостей) який описує');
/* 1.1 */
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
/* 1.2 */
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
/* 1.3 */
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
/* 1.4 */
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
/* 1.5 */
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
/* 2.1 */
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
/* 2.2 */
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
/* 2.3 */
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

/* 3 */
console.log('-- створити обєкт (не меньше 5ти властивостей) який описує, одна з властивостей обовязково повинна бути обєктом,ще одна - масивом');
/* 3.1 */
console.log('- будинок');
let house = {
    adress: 'Українка, вул. Центральна, 1',
    houseArea: 75,
    landPlot: 10,
    communications: ['electric', 'water well', 'sewerage'],
    owners: {
        firstName: 'Dima',
        lastName: 'Dziubenko',
        age: 50,
        gender: 'male',
        status: true
    }
};
console.log(house);
console.log('=========================================');
/* 3.2 */
console.log('- водій');
let driver = {
    firstName: 'Dima',
    lastName: 'Dziubenko',
    age: 50,
    category: ['A', 'B', 'C'],
    car: {
        model: 'Model S',
        brand: 'Tesla',
        volume: 1.6,
        type: 'electric car',
        tireSize: 16
    }
};
console.log(driver);
console.log('=========================================');
/* 3.3 */
console.log('- іграшку');
let toy = {
    name: 'Кукла Zapf',
    brand: 'Baby Born',
    manufacturerCountry: 'China',
    equipment: ['Тарелочка с ложкой', 'Подгузник', 'Пустышка', 'Горшочек'],
    owners: {
        name: 'Zlata',
        age: 4
    }
};
console.log(toy);
console.log('=========================================');
/* 3.4 */
console.log('- стіл');
let table = {
    brand: 'AMF',
    form: 'square',
    type: 'folding',
    materials: ['MDF', 'Glases'],
    size: {
        heigh: 178,
        width: 80,
        length: 250
    }
};
console.log(toy);
console.log('=========================================');
/* 3.5 */
console.log('- сумка');
let bag = {
    brand: 'No Name',
    color: 'black',
    category: 'woman',
    materials: ['полиэстер', 'полиуретан'],
    size: {
        heigh: 35,
        width: 15,
        length: 40
    }
};
console.log(bag);
console.log('=========================================');
/* 4 */
console.log('Дан массив:');
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
console.log('- звернутися в відповідну ячейку масиву і відповідний параметр обєкта і вивести в консольх наступне');
console.log('Приклад: вивести імя 1го обєкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й обєкт має індес 3!')
console.log('- статус Андрія');
console.log('Статус Андрія: ' + users[7].status);
console.log('- статус Максима');
console.log('Cтатус Максима: ' + users[4].status);
console.log('- імя передостаннього обєкту');
console.log('Iмя передостаннього обєкту: ' + users[users.length - 2].name);
console.log('- імя третього обєкта');
console.log('Iмя третього обєкта: ' + users[2].name);
console.log('- вік Олега');
console.log('Bік Олега' + users[6].age);
console.log('- вік Олі');
console.log('Bік Олі ' + users[3].age + ' Bік Олі ' + users[9].age);
console.log('- вік + імя 5го обєкта');
console.log(`Bік ${users[4].age} + імя 5го обєкта ${users[4].name}`);
console.log('- вік + сатус Анни');
console.log(`вік ${users[5].age} + сатус Анни ${users[5].status}`);