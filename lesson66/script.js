"use strict";

// function func() {
//   window.smth = "string";
// }

const someRes = getData();
const node = document.querySelector(".class");

setInterval(function () {
  if (node) {
    node.innerHTML = someRes;
  }
}, 1000);
