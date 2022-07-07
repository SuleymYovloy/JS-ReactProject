"use strict";

// filter

// const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

// const shortNames = names.filter(function (name) {
//   return name.length < 5;
// });

// console.log(shortNames);

//map

// let answers = ["IvAn", "AnN", "Hello"];

// answers = answers.map((item) => item.toLowerCase());

// console.log(answers);

// every/some

// const some = [4, "qwq", "ssdfsdf"];

// console.log(some.some((item) => typeof item === "number"));
// console.log(some.every((item) => typeof item === "number"));

//reduce

// const arr = [4, 5, 1, 2, 5];

// const result = arr.reduce((sum, current) => sum + current, 5);

// console.log(result);

// const arr = ["apple", "orange", "blue"];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(result);

// const obj = {
//   ivan: "persone",
//   ann: "persone",
//   dog: "animal",
//   cat: "animal",
// };

// const newArr = Object.entries(obj)
//   .filter((item) => item[1] == "persone")
//   .map((item) => item[0]);

// console.log(newArr);

/// Home work

//1
const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((film) => film.rating >= 8);
}

console.log(showGoodFilms);
