/* 1 */
console.log('Створити масив та вивести його в консоль:');
console.log('- з 5 числових значень');
let arrFiveElements = [1, 2, 3, 4, 5];
console.log(arrFiveElements);
console.log('=================================================');
/* 2 */
console.log('- з 5 стічкових значень');
arrFiveElements = ['qqqqq', 'wwwww', 'eeeee', 'rrrrr', 'ttttt'];
console.log(arrFiveElements);
console.log('=================================================');
/* 3 */
console.log('- з 5 значень стрічкового, числового та булевого типу');
arrFiveElements = ['qqqqq', 'wwwww', 1, 2, false];
console.log(arrFiveElements);
console.log('=================================================');
/* 4 */
console.log('-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль ');
let arrEmpty = [];
console.log(arrEmpty);
arrEmpty[0] = 'eeeee';
arrEmpty[1] = 'rrrrr';
arrEmpty[2] = 3;
arrEmpty[3] = 4;
arrEmpty[4] = true;
console.log(arrEmpty);
console.log('=================================================');
/* 5 */
document.write('- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині');
for (let index = 0; index < 10; index++) {
    document.write('<div>Hello octen.com.ua!</div>');
}
document.write('=================================================');
/* 6 */
document.write('- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині');
for (let index = 0; index < 10; index++) {
    document.write(`<div>octen.com.ua ${index}</div>`);
}
document.write('=================================================');
/* 7 */
document.write('- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.');
let ind = 0;
while (ind < 20) {
    document.write('<h1>Довільний текст</h1>');
    ind++;
}
document.write('=================================================');
/* 8 */
document.write('- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.');
ind = 0;
while (ind < 20) {
    document.write(`<h1>Довільний текст ${ind}</h1>`);
    ind++;
}
document.write('=================================================');
/* 9 */
console.log('- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');
let arrTenElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < arrTenElements.length; index++) {
    console.log(arrTenElements[index]);
}
console.log('=================================================');
/* 10 */
console.log('- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.');
arrTenElements = ['qqq', 'www', 'eee', 'rrr', 'ttt', 'yyy', 'QQQ', 'AAA', 'ZZZ', '111'];
for (let index = 0; index < arrTenElements.length; index++) {
    console.log(arrTenElements[index]);
}
console.log('=================================================');
/* 11 */
console.log('- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.');
arrTenElements = ['qqq', 'www', 'eee', 'rrr', 1, 2, 3, 4, true, false];
for (let index = 0; index < arrTenElements.length; index++) {
    console.log(arrTenElements[index]);
}
console.log('=================================================');
/* 12 */
console.log('- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи');
for (let index = 0; index < arrTenElements.length; index++) {
    if (typeof arrTenElements[index] === 'boolean') {
        console.log(arrTenElements[index]);
    }
}
console.log('=================================================');
/* 13 */
console.log('- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи');
for (let index = 0; index < arrTenElements.length; index++) {
    if (typeof arrTenElements[index] === 'number') {
        console.log(arrTenElements[index]);
    }
}
console.log('=================================================');
/* 14 */
console.log('- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи');
for (let index = 0; index < arrTenElements.length; index++) {
    if (typeof arrTenElements[index] === 'string') {
        console.log(arrTenElements[index]);
    }
}
console.log('=================================================');
/* 15 */
console.log('- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.');
let arrEmptyTenElements = [];
arrEmptyTenElements[0] = 'Dima';
arrEmptyTenElements[1] = 'Alena';
arrEmptyTenElements[2] = 'Zlata';
arrEmptyTenElements[3] = 'Andrey';
arrEmptyTenElements[4] = 100;
arrEmptyTenElements[5] = 200;
arrEmptyTenElements[6] = 300;
arrEmptyTenElements[7] = 400;
arrEmptyTenElements[8] = false;
arrEmptyTenElements[9] = true;

for (let index = 0; index < arrEmptyTenElements.length; index++) {
    console.log(arrEmptyTenElements[index]);
}
console.log('=================================================');
/* 16 */
console.log('- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
let counter = 0;

for (let index = 0; index < 10; index++) {
    counter++;
    console.log(counter);
    document.write(counter);
}
console.log('=================================================');
document.write('<br></br>');
/* 17 */
console.log('- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
counter = 0;
for (let index = 0; index < 100; index++) {
    counter++;
    console.log(counter);
    document.write(counter);
}
console.log('=================================================');
document.write('<br></br>');
/* 18 */
console.log('- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write');
counter = 0;
for (let index = 0; index < 100; index += 2) {
    counter++;
    console.log(counter);
    document.write(counter);
}
console.log('=================================================');
document.write('<br></br>');
/* 19 */
console.log('- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');
counter = 0;
for (let index = 0; index < 100; index += 2) {
    counter++;
    if (counter % 2 == 0) {
        console.log(counter);
        document.write(counter);
    }
}
console.log('=================================================');
document.write('<br></br>');
/* 20 */
console.log('- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write');
counter = 0;
for (let index = 0; index < 100; index += 2) {
    counter++;
    if (counter % 2) {
        console.log(counter);
        document.write(counter);
    }
}
console.log('=================================================');
document.write('<br></br>');
/* 21 */
console.log('- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)');
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        console.log('Minuts: ' + i + ' Secund: ' + j);
    }
}
console.log('Minuts: 2 Secund: 0');
console.log('=================================================');
/* 22 */
console.log('- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)');
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 60; j++) {
        if (i === 2 && j === 20) {
            console.log('Hour: 2 Minuts: 20 Secund: 0');
            break;
        } else {
            for (let z = 0; z < 60; z++) {

                console.log('Hour: ' + i + ' Minuts: ' + j + ' Secund: ' + z);
            }
        }
    }
}
console.log('=================================================');
/* Додатково*/
/* 23 */
console.log('Додатково');
console.log('- Дано масив: [ a, b, c] . За допомогою циклу for зібрати всі букви в слово.');
let arrAdditionally = ['a', 'b', 'c'];
console.log(arrAdditionally);
let stringArrAdditionally = '';
for (let i = 0; i < arrAdditionally.length; i++) {
    stringArrAdditionally += arrAdditionally[i];
}
console.log(stringArrAdditionally);
console.log('=================================================');
/* 24 */
console.log('- Дано масив: [ a, b, c] . За допомогою циклу while зібрати всі букви в слово.');
let i = 0;
stringArrAdditionally = '';
while (i < arrAdditionally.length) {
    stringArrAdditionally += arrAdditionally[i];
    i++;
}
console.log(stringArrAdditionally);
console.log('=================================================');
/* 25 */
console.log('- Дано масив: [ a, b, c] . За допомогою циклу for of зібрати всі букви в слово.');
stringArrAdditionally = '';
for (const item of arrAdditionally) {
    stringArrAdditionally += item;
}
console.log(stringArrAdditionally);
console.log('=================================================');
/* 26 */
console.log('- Дан масив [a, b, c]. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.');
arrAdditionally = ['a', 'b', 'c'];
counter = 0;
for (let i = 3; i < 6; i++) {
    counter++;
    arrAdditionally.push(counter);
}
console.log(arrAdditionally);
console.log('=================================================');
/* 27 */
console.log('- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].');
let arrNumber = [1, 2, 3];
let arrReverse = arrNumber.reverse();
console.log(arrReverse);
console.log('=================================================');
/* 28 */
console.log('- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.');
arrNumber = [1, 2, 3];
let arrNumber2 = [4, 5, 6];
arrNumber = arrNumber.concat(arrNumber2);
console.log(arrNumber);
console.log('=================================================');
/* 29 */
console.log('- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.');
arrNumber = [1, 2, 3];
let unshiftItem = arrNumber.unshift(4, 5, 6);
console.log(arrNumber);
console.log('=================================================');
/* 30 */
console.log('- Дан масив [js, css, jq]. Виведіть на екран перший елемент за допомогою shift()');
let arrProgLeng = ['js', 'css', 'jq'];
let fElement = arrProgLeng.shift();
console.log(fElement);
console.log('=================================================');
/* 31 */
console.log('- Дан масив [js, css, jq]. Виведіть на екран останній елемент за допомогою pop()');
let lElement = arrProgLeng.pop();
console.log(lElement);
console.log('=================================================');
/* 32 */
console.log('- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].');
let arrNum = [1, 2, 3, 4, 5];
arrNum = arrNum.slice(3);
console.log(arrNum);
console.log('=================================================');
/* 33 */
console.log('- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].');
arrNum = [1, 2, 3, 4, 5];
arrNum = arrNum.slice(0, 2);
console.log(arrNum);
console.log('=================================================');
/* 34 */
console.log('- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].');
arrNum = [1, 2, 3, 4, 5];
let spliceItems = arrNum.splice(arrNum.length - 4, 2);
console.log(arrNum);
console.log('=================================================');
/* 35 */
console.log('- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, a, b, c, 4, 5].');
arrNum = [1, 2, 3, 4, 5];
spliceItems = arrNum.splice(3, 0, 'a', 'b', 'c');
console.log(arrNum);
console.log('=================================================');
/* 36 */
console.log('- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, a, b, 2, 3, 4, c, 5, e].');
arrNum = [1, 2, 3, 4, 5];
spliceItems = arrNum.splice(1, 0, 'a', 'b');
spliceItems = arrNum.splice(6, 0, 'c');
spliceItems = arrNum.splice(8, 0, 'e');
console.log(arrNum);
console.log('=================================================');
/* 37 */
console.log('- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.');
arrTenElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrTenElements.length; i++) {
    if (arrTenElements[i] % 2 == 0) {
        console.log(arrTenElements[i]);
    }
}
console.log('=================================================');
/* 38 */
console.log('- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший');
arrTenElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrTenElements);
let arrEmptyForCopy = [];
console.log(arrEmptyForCopy);
for (let i = 0; i < arrTenElements.length; i++) {
    arrEmptyForCopy.push(arrTenElements[i]);
}
console.log(arrEmptyForCopy);
console.log('=================================================');
/* 39 */
console.log('- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.');
arrTenElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrTenElements);
arrEmptyForCopy = [];
console.log(arrEmptyForCopy);
for (let i = 0; i < arrTenElements.length; i++) {
    arrEmptyForCopy[i] = arrTenElements[i];
}
console.log(arrEmptyForCopy);
console.log('=================================================');
/* 40 */
console.log('+ зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] та:');
let arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
console.log('=================================================');
/* 40.1 */
console.log('1. перебрати його циклом while');
i = 0;
while (i < arrNew.length) {
    console.log(arrNew[i]);
    i++;
}
console.log('=================================================');
/* 40.2 */
console.log('2. перебрати його циклом for');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
for (let i = 0; i < arrNew.length; i++) {
    console.log(arrNew[i]);
}
console.log('=================================================');
/* 40.3 */
console.log('3. перебрати циклом while та вивести  числа тільки з непарним індексом');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
i = 0;
while (i < arrNew.length) {
    if (i % 2 == 0) {
        console.log(arrNew[i]);
    }
    i++;
}
console.log('=================================================');
/* 40.4 */
console.log('4. перебрати циклом for та вивести  числа тільки з непарним індексом');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
for (let i = 0; i < arrNew.length; i++) {
    if (i % 2 == 0) {
        console.log(arrNew[i]);
    }
}
console.log('=================================================');
/* 40.5 */
console.log('5. перебрати циклом while та вивести  числа тільки парні  значення');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
i = 0;
while (i < arrNew.length) {
    if (arrNew[i] % 2 == 0) {
        console.log(arrNew[i]);
    }
    i++;
}
console.log('=================================================');
/* 40.6 */
console.log('6. перебрати циклом for та вивести  числа тільки парні  значення');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
for (let i = 0; i < arrNew.length; i++) {
    if (arrNew[i] % 2 == 0) {
        console.log(arrNew[i]);
    }
}
console.log('=================================================');
/* 40.7 */
console.log('7. замінити кожне число кратне 3 на слово "okten"');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
for (let i = 0; i < arrNew.length; i++) {
    if (arrNew[i] % 3 == 0) {
        arrNew[i] = 'okten';
    }
}
console.log(arrNew);
console.log('=================================================');
/* 40.8 */
console.log('8. вивести масив в зворотньому порядку.');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
arrNew = arrNew.reverse();
console.log(arrNew);
console.log('=================================================');
/* 40.9 */
console.log('9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)');
/* 40.9.1 */
console.log('9.1. перебрати його циклом while (с заду на перед)');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
i = arrNew.length;
while (i >= 0) {
    console.log(arrNew[i]);
    i--;
}
console.log('=================================================');
/* 40.9.2 */
console.log('9.2. перебрати його циклом for (с заду на перед)');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
for (let i = arrNew.length; i >= 0; i--) {
    console.log(arrNew[i]);
}
console.log('=================================================');
/* 40.9.3 */
console.log('9.3. перебрати циклом while та вивести  числа тільки з непарним індексом (с заду на перед)');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
i = arrNew.length;
while (i >= 0) {
    if (i % 2 == 0) {
        console.log(arrNew[i]);
    }
    i--;
}
console.log('=================================================');
/* 40.9.4 */
console.log('9.4. перебрати циклом for та вивести  числа тільки з непарним індексом (с заду на перед)');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
for (let i = arrNew.length; i >= 0; i--) {
    if (i % 2 == 0) {
        console.log(arrNew[i]);
    }
}
console.log('=================================================');
/* 40.9.5 */
console.log('9.5. перебрати циклом while та вивести  числа тільки парні  значення (с заду на перед)');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
i = arrNew.length;
while (i >= 0) {
    if (arrNew[i] % 2 == 0) {
        console.log(arrNew[i]);
    }
    i--;
}
console.log('=================================================');
/* 40.9.6 */
console.log('9.6. перебрати циклом for та вивести  числа тільки парні  значення (с заду на перед)');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
for (let i = arrNew.length; i >= 0; i--) {
    if (arrNew[i] % 2 == 0) {
        console.log(arrNew[i]);
    }
}
console.log('=================================================');
/* 40.9.7 */
console.log('9.7. замінити кожне число кратне 3 на слово "okten" (с заду на перед)');
arrNew = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arrNew);
for (let i = arrNew.length; i >= 0; i--) {
    if (arrNew[i] % 3 == 0) {
        arrNew[i] = 'okten';
    }
}
console.log(arrNew);
console.log('=================================================');
/* 40.10 */
console.log('10 створити пустий масив та :');
let arr50 = [];
console.log(arr50);
console.log('- заповнити його 50 парними числами за допомоги циклу.');
for (let i = 2, j = 0; i <= 100; i += 2, j++) {
    arr50[j] = i;
}
console.log(arr50);
console.log('=================================================');
console.log('- заповнити його 50 непарними числами за допомоги циклу. ');
arr50 = [];
console.log(arr50);
for (let i = 1, j = 0; i <= 100; i += 2, j++) {
    arr50[j] = i;
}
console.log(arr50);
console.log('=================================================');
/* 41 */
console.log('3. используя Math.random заполнить массив из ???(сколько хотите) элементов.диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)');
let errRandom = [];
console.log(errRandom);
for (let i = 0; i < 30; i++) {
    errRandom.push(Math.round(Math.random() * 100));
}
console.log('Без диапазона!');
console.log(errRandom);
errRandom = [];
for (let i = 0; i < 30; i++) {
    errRandom.push(Math.floor((Math.random() * (732 - 8 + 1)) + 8));
}
console.log('В диапазоне от 8 до 732');
console.log(errRandom);
console.log('=================================================');
/* 42 ============================================================================================================================ */
console.log('2. вывести на консоль  каждый третий елемент');
errRandom = [];
for (let i = 0; i < 30; i++) {
    errRandom.push(Math.round(Math.random() * 100));
}
console.log(errRandom);
for (let i = 3; i < errRandom.length; i += 3) {
    console.log(errRandom[i]);
}
console.log('=================================================');
/* 43 */
console.log('3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.');
errRandom = [];
for (let i = 0; i < 30; i++) {
    errRandom.push(Math.round(Math.random() * 100));
}
console.log(errRandom);
for (let i = 3; i < errRandom.length; i += 3) {
    if (errRandom[i] % 2 == 0) {
        console.log(errRandom[i]);
    }
}
console.log('=================================================');
/* =============================================================================================================================== */
/* 44 */
console.log('4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и записать их в другой массив.');
errRandom = [];
for (let i = 0; i < 30; i++) {
    errRandom.push(Math.round(Math.random() * 100));
}
console.log(errRandom);
arrEmpty = [];
console.log(arrEmpty);
for (let i = 3; i < errRandom.length; i += 3) {
    if (errRandom[i] % 2 == 0) {
        console.log(errRandom[i]);
        arrEmpty.push(errRandom[i]);
    }
}
console.log('=================================================');
/* 45 */
console.log('5. Вывести каждый елемент массива у которого соседний с права элемент - парный 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.');
let productPrice = [100, 250, 50, 168, 120, 345, 188];
arrEmpty = [];
for (let i = 0; i < productPrice.length; i++) {
    if (productPrice[i + 1] % 5 == 0) {
        arrEmpty.push(productPrice[i]);
    }
}
console.log(arrEmpty);
let average = arrEmpty.reduce((a, b) => (a + b)) / arrEmpty.length;
console.log(average);
console.log('=================================================');
/* 46 */
console.log('3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.');
errRandom = [];
for (let i = 0; i < 30; i++) {
    errRandom.push(Math.round(Math.random() * 100));
}
console.log(errRandom);
arrEmpty = [];
console.log(arrEmpty);
for (let i = 0; i < errRandom.length; i++) {
    arrEmpty.push(errRandom[i] * 5);
}
console.log(arrEmpty);
console.log('=================================================');
/* 47 */
console.log('4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо обєкт є числом, додати його в інший масив.');
arrTenElements = ['qqq', 'www', 'eee', 'rrr', 1, 2, 3, 4, true, false];
console.log(arrTenElements);
arrEmpty = [];
console.log(arrEmpty);
for (let i = 0; i < arrTenElements.length; i++) {
    if (typeof arrTenElements[i] == 'number') {
        arrEmpty.push(arrTenElements[i]);
    }
}
console.log(arrEmpty);
console.log('=================================================');