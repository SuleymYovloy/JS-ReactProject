"use strict";

// if (4 == 1) {
//   console.log("ok!");
// } else {
//   console.log("error");
// }

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("Слишком много");
// } else {
//   console.log("OK");
// }

const num = 50;

switch (num) {
  case 49:
    console.log("error");
    break;
  case 100:
    console.log("error");
    break;
  case 50:
    console.log("Yes");
    break;
  default:
    console.log("No");
    break;
}
