"use strict";

const box = document.querySelector(".box");
const block = document.querySelector(".block");

console.log(block);

// if (block) {
//   console.log(block.textContent);
// }

// console.log(block?.textContent);

// console.log(1 + 2);

const userData = {
  name: "Ivan",
  age: null,
  say: function () {
    console.log("Hello");
  },
};

userData.say();
userData.hay?.();

console.log(userData?.skills?.js);

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Test</title>
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <div class="box"></div>

//     <script src="script.js"></script>
//   </body>
// </html>
