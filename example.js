// "use strict";

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];

// console.log(courseTopicLength); // 21
// console.log(firstElement); // "J"
// console.log(lastElement); // "s"

//     console.log(courseTopic[0]);
//  "JavaScript essentials";
// console.log(courseTopic[firstElement]);

// const product = "Repair droid";
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]); // 'd'
// const a = 5;
// const b = 8;
// console.log(a > b);
// console.log(b > a);

// const age = 20;
// const isAdult = age >= 18;

// console.log(isAdult); // true

// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid);
// const a = 10;
// const b = 7;
// console.log(a % b);

// let userInput = Number(prompt("Enter"));
// console.log(userInput);

// function sayHi() {
//   console.log(`Hello, this is my first function!`);
// }
// sayHi();

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   console.log(`Your monthly income ${a - b + c}`);
// }
// add(1158, 750, 1200);

// function multiply(a, b, c) {
//   const product = a * b * c;
//   // Повертаємо результат виразу множення
//   return product;
// }
// // Результат роботи функції можна зберегти у змінну
// const result = multiply(2, 4, 5);
// console.log(result);

// function multiply(x, y, z) {
//   const product = x * y * z;
//   return product;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // undefined

// function add(a, b, c) {
//   const product = a + b + c;
//   return product;
// }
// add(15, 27, 10);
// add(5, 10, 15);
// add(10, 20, 30);
// function makeMessage(name, price) {
//   const makeMessage = `You picked ${name}, price per item is ${price} credits`;
//   //тре через , бо консоль не повертає значення, а тебе косоль і
//   // браузері поккаже, але сама система типу не побачить//
//   return makeMessage;
// }
// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const calculateTotalPrice = orderedQuantity * pricePerItem;
  return calculateTotalPrice;
}
calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);
