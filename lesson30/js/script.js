/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

// 1 Задача

const adv = document.querySelectorAll(".promo__adv img");
adv.forEach((item) => {
  item.remove();
});

// 2 Задача
const adv2 = document.querySelectorAll(".promo__adv img"),
  poster = document.querySelector(".promo__bg"),
  genre = document.querySelector(".promo__genre");

adv2.forEach((item) => {
  item.remove();
});

genre.textContent = "Драма";

// 3 Задача

const adv3 = document.querySelectorAll(".promo__adv img"),
  poster1 = document.querySelector(".promo__bg"),
  genre2 = document.querySelector(".promo__genre"),
  movieList = document.querySelector(".promo__interactive-list");

adv3.forEach((item) => {
  item.remove();
});

genre2.textContent = "Драма";

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();
