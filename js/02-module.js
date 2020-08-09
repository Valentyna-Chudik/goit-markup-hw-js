// ЗАДАЧА 2

// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   (pricePerWord = message.split(' ').length * pricePerWord);

// // Write code in this line

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// //console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// //console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// //console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// //console.log(calculateEngravingPrice('Uno', 100)); // 100

// ЗАДАЧА 3

// function findLongestWord(string = "") {

//   // Write code under this line
//   let longestWord = "";
//   const words = string.split(" ");

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumped'

// //console.log(findLongestWord('Google do a roll'));
// // 'Google'

// //console.log(findLongestWord('May the force be with you'));
// // 'force'

// ЗАДАЧА 4
// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   return string.length > maxLength
//     ? string.slice(0, maxLength) + '...'
//     : string;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// // 'Vestibulum facilisis, purus ne...'

// ЗАДАЧА 5
// function checkForSpam(str) {
//   // Write code under this line
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes(`spam`) || lowerStr.includes(`sale`);

// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ЗАДАЧА 6

// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// //console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// //console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// ЗАДАЧА 7

// function filterArray(array) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i]) === true) {
//       numbers.push(array[i]);
//     }
//     // numbers.push(array[i]);
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]

// ЗАДАЧА 8
// function reduceArray(array) {
//     let total = 0;
//     // Write code under this line
//     for (const item of array) {
//         total += item;
//     }
//     if (array.length = '') {
//         return 0;
//     }
//     return total;
// };

// //console.log(reduceArray([1, 2, 3]));
// // 6

// //console.log(reduceArray([-2, 0, 2]));
// // 0

// //console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// // ЗАДАЧА 9
// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   const loginLength = login.length;
//   return loginLength >= min && loginLength <= max ? true : false;
// }

// function isLoginUnique(allLogins, login) {
//   // Write code under this line
//   return allLogins.includes(login) ? false : true;
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) === true) {
//     if (isLoginUnique(allLogins, login) === true) {
//       allLogins.push(login);
//       return SUCCESS;
//     } else return REFUSAL;
//   } else return ERROR;
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// // console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'

// // console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'

// // console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// // console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
