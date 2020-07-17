/* 1 */
console.log('- створити функцію яка виводить масив');
let arrTestfirst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function getArr(arr) {
    console.log(arr);
}
getArr(arrTestfirst);
console.log('==========');
/* 2 */
console.log('- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.');
let arrTestSecond = [];

function randomValues(arr, length) {
    for (let i = length; i > 0; i--) {
        let randomNumber = Math.round(Math.random() * 100);
        arr.push(randomNumber);
    }
    getArr(arr);
}

randomValues(arrTestSecond, 20);
console.log('==========');
/* 3 */
console.log('- створити функцію яка приймає три числа та виводить та повертає найменьше.');

function min(x, y, z) {
    if (x < y && x < z) {
        console.log(x);
        return x;
    } else if (y < x && y < z) {
        console.log(y);
        return y;
    } else if (z < x && z < y) {
        console.log(z);
        return z;
    }
}

min(1, 2, 3);
console.log('==========');
/* 4 */
console.log('- створити функцію яка приймає три числа та виводить та повертає найбільше.');

function max(x, y, z) {
    if (x > y && x > z) {
        console.log(x);
        return x;
    } else if (y > x && y > z) {
        console.log(y);
        return y;
    } else if (z > x && z > y) {
        console.log(z);
        return z;
    }
}

max(1, 2, 3);
console.log('==========');
/* 5 */
console.log('- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше');
/* awesome my code */
console.log('==========');
/* 6 */
console.log('- створити функцію яка виводить масив');

function getArrSecond(arr) {
    for (const i of arr) {
        console.log(i);
    }
}
getArrSecond(arrTestfirst);
console.log('==========');
/* 7 */
console.log('- створити функцію яка повертає найбільше число з масиву');

function getMaxOfArray(Array) {
    return Math.max.apply(null, Array);
}
console.log(getMaxOfArray(arrTestfirst));
console.log('==========');
/* 8 */
console.log('- створити функцію яка повертає найменьше число з масиву');

function getMinOfArray(Array) {
    return Math.min.apply(null, Array);
}
console.log(getMinOfArray(arrTestfirst));
console.log('==========');
/* 9 */
console.log('- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.');

function sumArr(arr) {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    console.log(sum)
    return sum;
}
sumArr(arrTestfirst);

console.log('==========');
/* 10 */
console.log('- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.');

function averege(arr) {
    return arr.reduce((a, b) => (a + b)) / arr.length;
}
console.log(averege(arrTestfirst));
console.log('==========');
/* 11 */
console.log(`- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві`);

function quantityObjArr(arr) {
    return arr.length;
}
console.log(quantityObjArr(arrTestfirst))
console.log('==========');
/* 12 */
console.log('- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них');
/* awesome my code */
console.log('==========');
/* 13 */
console.log('- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.');
console.log('Приклад');
console.log('[1,2,3,4] \n[2,3,4,5] \nрезультат \n[3,5,7,9]');
let arrTestThirt = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function sumElementArreys(arr1, arr2) {
    let sumArr = [];
    for (let i = 0; i < arr1.length; i++) {
        sumArr.push(arr1[i] + arr2[i]);
    }
    return sumArr;
}
console.log(arrTestfirst);
console.log(arrTestThirt);
console.log('Результат:');
console.log(sumElementArreys(arrTestfirst, arrTestThirt));
console.log('==========');
/* 14 */
console.log('- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"');

function replaceObjInArr(arr, i) {
    arr[i] += 1;
}
replaceObjInArr(arrTestfirst, 0);
console.log(arrTestfirst);
console.log('==========');
/* 15 */
console.log('- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.');
console.log('Двожина масиву від 2 до 100');
console.log('Приклад');
console.log('[1,0,6,0,3] => [1,6,3,0,0] \n[0,1,2,3,4] => [1,2,3,4,0] \n[0,0,1,0]   => [1,0,0,0]');
console.log('==========');
/* 16 */
console.log('Створити функцію яка :');
console.log(`- Додає в боді блок з текстом "Hello owu"`);

function addBlock(typeElement = 'div', content = 'Hello owu') {
    let block = document.createElement(typeElement);
    block.innerText = content;
    document.body.appendChild(block);
}
addBlock();
console.log('+');
console.log('- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи');
addBlock('h1', 'owu.com.ua');
console.log('+');
console.log('- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. \n Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці');
let cars = [{
    model: 'Model S',
    yearOfIssue: 2010,
    volume: 200,
    color: 'white',
    driver: {
        name: 'driver model S',
        age: 21,
        gender: 'man',
        experience: 1
    }
}, {
    model: 'Model 3',
    yearOfIssue: 2011,
    volume: 200,
    color: 'black',
    driver: {
        name: 'driver Model 3',
        age: 23,
        gender: 'man',
        experience: 2
    }
}, {
    model: 'Model X',
    yearOfIssue: 2015,
    volume: 200,
    color: 'metal',
    driver: {
        name: 'driver Model X',
        age: 24,
        gender: 'man',
        experience: 3
    }
}, {
    model: 'Cybertrtack',
    yearOfIssue: 2021,
    volume: 400,
    color: 'gray',
    driver: {
        name: 'driver Cybertrtack',
        age: 25,
        gender: 'man',
        experience: 4
    }
}, {
    model: 'Model Y',
    yearOfIssue: 2019,
    volume: 200,
    color: 'blue',
    driver: {
        name: 'driver Model Y',
        age: 38,
        gender: 'man',
        experience: 5
    }
}, {
    model: 'Roadster S',
    yearOfIssue: 2020,
    volume: 400,
    color: 'blue',
    driver: {
        name: 'driver Roadster S',
        age: 42,
        gender: 'man',
        experience: 6
    }
}, {
    model: 'Semi',
    yearOfIssue: 2021,
    volume: 600,
    color: 'metal',
    driver: {
        name: 'driver Semi',
        age: 40,
        gender: 'man',
        experience: 7
    }
}, {
    model: 'BMW X3',
    yearOfIssue: 2014,
    volume: 250,
    color: 'metal',
    driver: {
        name: 'driver BMW X3',
        age: 35,
        gender: 'woman',
        experience: 8
    }
}, {
    model: 'BMW X5',
    yearOfIssue: 2018,
    volume: 300,
    color: 'gray',
    driver: {
        name: 'driver BMW X5',
        age: 30,
        gender: 'woman',
        experience: 9
    }
}, {
    model: 'BMW X6',
    yearOfIssue: 2020,
    volume: 350,
    color: 'braun',
    driver: {
        name: 'driver BMW X6',
        age: 25,
        gender: 'woman',
        experience: 5
    }
}];
console.log(cars);

function addcar(arr = cars, identifier = 0) {
    let block = document.createElement('div');
    block.innerText = `${arr[identifier].model} ${arr[identifier].yearOfIssue} ${arr[identifier].volume} ${arr[identifier].color} ${arr[identifier].driver.name} ${arr[identifier].driver.age} ${arr[identifier].driver.gender} ${arr[identifier].driver.experience}`;
    document.body.appendChild(block);
}
addcar(cars, 0);
console.log('+');
console.log('- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. \n Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. \n Для кожної властивості створити всередені блока автомоблія свій блок');
let container = document.createElement('div');
document.body.appendChild(container);

function addcar2(arr = cars, identifier = 0) {
    let blockModel = document.createElement('div');
    let blockYearOfIssue = document.createElement('div');
    let blockVolume = document.createElement('div');
    let blockColor = document.createElement('div');
    let blockDriver = document.createElement('div');

    blockModel.innerText = `${arr[identifier].model}`;
    blockYearOfIssue.innerText = `${arr[identifier].yearOfIssue}`;
    blockVolume.innerText = `${arr[identifier].volume}`;
    blockColor.innerText = `${arr[identifier].color}`;
    blockDriver.innerText = `${arr[identifier].driver.name} ${arr[identifier].driver.age} ${arr[identifier].driver.gender} ${arr[identifier].driver.experience}`;

    container.appendChild(blockModel);
    container.appendChild(blockYearOfIssue);
    container.appendChild(blockVolume);
    container.appendChild(blockColor);
    container.appendChild(blockDriver);
}

addcar2(cars, 0);
console.log('+');
console.log('==========');
/* 17 */
console.log('(на основі минулого ДЗ)');
console.log(`**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id", \n та повертає масив цих з'єднаних об'єктів.`);
console.log('Приклад масивів:');
let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false }];
console.log(usersWithId);
let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' }, ];
console.log(citiesWithId);

function connectArr(arr1, arr2) {
    let arrayResult = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i].id === arr2[j].user_id) {
                arrayResult.push(arr1[i]);
                arrayResult[i].address = arr2[j];
            }
        }
    }
    return arrayResult;
}
console.log(connectArr(usersWithId, citiesWithId));
console.log('==========');
/* 18 */
console.log('***- беремо завдання з правилами з укроку №3 :');
console.log('Та робимо це функцією.При цьому правила отримувати через аргумент. \n "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці. \n При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок. \n Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html');
let rules = [{
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];
console.log(rules);
let containerFightClub = document.getElementById('wrap');

function rulesFightClub(arr) {
    for (const i of arr) {
        let block = document.createElement('div');
        let title = document.createElement('h3');
        let body = document.createElement('p');

        title.innerText = `${i.title}`;
        body.innerText = `${i.body}`;

        containerFightClub.appendChild(block);
        block.appendChild(title);
        block.appendChild(body);
    }
}
rulesFightClub(rules);
console.log('+');
console.log('==========');
/* 19 */
console.log('===========додаткове від віктора========');
console.log('1) Точная степень двойки. \n Дано натуральное число N. \n Выведите слово YES, если число N является точной степенью двойки, \n или слово NO в противном случае. \n Операцией возведения в степень пользоваться нельзя!');
console.log('==========');
/* 20 */
console.log('2) Deep Copy \n реалізувати глибоке копіювання обєкту за допомогою рекурсій');
console.log('==========');
/* 21 */
console.log(`3) Flat \n Вирівняти багаторівневий масив в однорівневий \n [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]`);
console.log('==========');