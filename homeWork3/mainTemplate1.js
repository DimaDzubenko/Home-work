/* 5 */
console.log('-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.');
console.log('-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :')
    /* 5.1 */
console.log('- отримує текст з параграфа з id "content"');
console.log(document.getElementById('content').innerText);
/* 5.2 */
console.log('- отримує текст з блоку з id "rules"');
console.log(document.getElementById('rules').innerText);
/* 5.3 */
console.log('- замініть текст параграфа з id content на будь-який інший');
console.log(document.getElementById('content').innerText = 'БОЙЦОВСКИЙ КЛУБ');
/* 5.4 */
console.log('- замініть текст параграфа з id rules на будь-який інший');
console.log(document.getElementById('rules').innerText = 'БОЙЦОВСКИЙ КЛУБ');
/* 5.5 */
console.log('- змініть кожному елементу колір фону на червоний');
let tagP = document.getElementsByTagName('p');
let tagDiv = document.getElementsByTagName('div');
let tagUl = document.getElementsByTagName('ul');
let tagLi = document.getElementsByTagName('li');

let arrTegs = [tagP, tagDiv, tagUl, tagLi];
for (let i = 0; i < arrTegs.length; i++) {
    for (let j = 0; j < arrTegs[i].length; j++) {
        arrTegs[i][j].style.backgroundColor = 'red';
    }
}

/* let tagP = document.getElementsByTagName('p');
for (let i = 0; i < tagP.length; i++) {
    tagP[i].style.backgroundColor = 'red';
}
let tagDiv = document.getElementsByTagName('div');
for (let i = 0; i < tagDiv.length; i++) {
    tagDiv[i].style.backgroundColor = 'red';
}
let tagUl = document.getElementsByTagName('ul');
for (let i = 0; i < tagUl.length; i++) {
    tagUl[i].style.backgroundColor = 'red';
}
let tagLi = document.getElementsByTagName('li');
for (let i = 0; i < tagLi.length; i++) {
    tagLi[i].style.backgroundColor = 'red';
} */

/* 5.6 */
console.log('- змініть кожному елементу колір тексту на синій');

let colorTagP = document.getElementsByTagName('p');
let colorTagDiv = document.getElementsByTagName('div');
let colorTagUl = document.getElementsByTagName('ul');
let colorTagLi = document.getElementsByTagName('li');

arrTegs = [colorTagP, colorTagDiv, colorTagUl, colorTagLi];
for (let i = 0; i < arrTegs.length; i++) {
    for (let j = 0; j < arrTegs[i].length; j++) {
        arrTegs[i][j].style.color = 'blue';
    }
}

/* let colorTagP = document.getElementsByTagName('p');
for (let i = 0; i < colorTagP.length; i++) {
    colorTagP[i].style.color = 'blue';
}
let colorTagDiv = document.getElementsByTagName('div');
for (let i = 0; i < colorTagDiv.length; i++) {
    colorTagDiv[i].style.color = 'blue';
}
let colorTagUl = document.getElementsByTagName('ul');
for (let i = 0; i < colorTagUl.length; i++) {
    colorTagUl[i].style.color = 'blue';
}
let colorTagLi = document.getElementsByTagName('li');
for (let i = 0; i < colorTagLi.length; i++) {
    colorTagLi[i].style.color = 'blue';
}  */

/* 5.7 */
console.log('- отримати весь список класів елемента з id=rules і вивести їх в console.log');
console.log(rules.classList);

/* 5.8 */
console.log('- отримати всі елементи з класом fc_rules');
let elemensFcRules = document.getElementsByClassName('fc_rules');
console.log(elemensFcRules);

/* 5.9 */
console.log('- поміняти колір тексту у всіх елементів fc_rules на червоний */');
let elementsRed = document.getElementsByClassName('fc_rules');
for (const iterator of elementsRed) {
    iterator.style.color = 'red';
}