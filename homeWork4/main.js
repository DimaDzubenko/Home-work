/* 1 */
console.log('- створити функцію яка виводить масив');

console.log('==========');
/* 2 */
console.log('- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.');

console.log('==========');
/* 3 */
console.log('- створити функцію яка приймає три числа та виводить та повертає найменьше.');
console.log('==========');
/* 4 */
console.log('- створити функцію яка приймає три числа та виводить та повертає найбільше.');
console.log('==========');
/* 5 */
console.log('- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше');
console.log('==========');
/* 6 */
console.log('- створити функцію яка виводить масив');
console.log('==========');
/* 7 */
console.log('- створити функцію яка повертає найбільше число з масиву');
console.log('==========');
/* 8 */
console.log('- створити функцію яка повертає найменьше число з масиву');
console.log('==========');
/* 9 */
console.log('- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.');
console.log('==========');
/* 10 */
console.log('- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.');
console.log('==========');
/* 11 */
console.log(`- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві`);
console.log('==========');
/* 12 */
console.log('- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них');
console.log('==========');
/* 13 */
console.log('- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.');
console.log('Приклад');
console.log('[1,2,3,4] \n [2,3,4,5] \n результат \n [3,5,7,9]');
console.log('==========');
/* 14 */
console.log('- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"');
console.log('==========');
/* 15 */
console.log('- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.');
console.log('Двожина масиву від 2 до 100');
console.log('Приклад');
console.log('[1,0,6,0,3] => [1,6,3,0,0] \n [0,1,2,3,4] => [1,2,3,4,0] \n [0,0,1,0]   => [1,0,0,0]');
console.log('==========');
/* 16 */
console.log('Створити функцію яка :');
console.log(`- Додає в боді блок з текстом "Hello owu"`);
console.log('- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи');
console.log('- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. \n Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці');
console.log('- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. \n Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. \n Для кожної властивості створити всередені блока автомоблія свій блок');
console.log('==========');
/* 17 */
console.log('(на основі минулого ДЗ)');
console.log(`**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id", \n та повертає масив цих з'єднаних об'єктів.`);
console.log('Приклад масивів:');
let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false }];
console.log(usersWithId);
let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' }, ];
console.log(citiesWithId);
console.log('(на основі минулого ДЗ)');
console.log('(на основі минулого ДЗ)');
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