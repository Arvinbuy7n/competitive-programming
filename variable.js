// //1
// var count = function (x) {
//   if (x < 0) {
//     return "surug";
//   } else if (x > 0) {
//     return "eyreg";
//   } else if (x == 0) {
//     return "zero";
//   }
// };

// //2
// var too = function (x) {
//   if (x % 2 == 0) return "even";
//   return "odd";
// };

// //3
// function isDescend(str) {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

// //4
// let Nums = [2, 4, 9];
// let count = 0;

// for (i = 0; i < Nums; i++) {
//   count += Nums[i];
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// let count = [10, 27, 37];

// let sum = 0;

// for (i = 0; i < count.length; i++) {
//   sum += count[i];
// }

//test

array1 = [2, 4, 7, 9];
array2 = [1, 2, 9, 3];

emptyArray = [];

for (let i = 0; i < array1.length; i++) {
  for (j = i + 1; j < array2.length; j++) {
    if (array1[i] == array2[j]) {
      return emptyArray.push[(i, j)];
    }
  }
}

console.log(emptyArray);
