"use strict";

// To String

// 1 способ
console.log(typeof String(null));
console.log(typeof String(4));

//2 способ Конкатенация
console.log(typeof (null + ""));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// To number

// 1 способ
console.log(typeof Number("4"));

//2 способ
console.log(typeof +"5");

//3 способ
console.log(typeof parseInt("15", 10));

// let answ = +prompt("hello", "");

// To boolean

// 0, '', null, undefined, NaN;

//1 способ
let switcher = null;

if (switcher) {
  console.log("Working...");
}

switcher = 1;

if (switcher) {
  console.log("Working...");
}

// 2 способ
console.log(typeof Boolean("4"));

// 3 способ
console.log(typeof !!"4");
