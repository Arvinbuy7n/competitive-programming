// //1 Өгөгдсөн секундыг минут секунд болго.

// function convertMinute(s) {
//   const minute = Math.floor(s / 60);
//   const secund = s % 60;
//   return `${minute} min ${secund} sec`;
// }

// //2 Өгөгдсөн секундыг цаг минут секунд болго.

// function convertTime(s) {
//   const hour = Math.floor(s / 3600);
//   const min = Math.floor((s % 3600) / 60);
//   const sec = s % 60;
//   return `${hour}h ${min}m ${sec}sec`;
// }

// //3 Өгөгдсөн минут, секундыг секунд рүү шилжүүл.

// function convertSecund(m, s) {
//   const min = Math.floor(m * 60 + s);
//   return `${min}sec`;
// }

// //4 Өгөгдсөн цаг, минут, секундыг секунд рүү шилжүүл.

// function convertClock(h, m, s) {
//   const time = Math.floor(h * 3600 + m * 60 + s);
//   return `${time}`;
// }

// //5 Өгөгдсөн цагийг хоног цагт шилжүүл.

// function convertDay(d) {
//   const day = Math.floor(d / 24);
//   const time = d % 24;

//   return `${day}d ${time}h`;
// }

// //6 Өгөгдсөн хоног, цагийг цагт шилжүүл.

// function convertTsag(d, t) {
//   const day = Math.floor(d * 24 + t);
//   return `${day}`;
// }

// //7 Өгөгдсөн сарыг жил сар руу шилжүүл.

// function convertYear(m) {
//   const year = Math.floor(m / 12);
//   const month = m % 12;
//   return `${year}y ${month}m`;
// }

// //8 Өгөгдсөн жил, сарыг сард шилжүүл.

// function convertYM(y, m) {
//   const month = Math.floor(y * 12 + m);
//   return `${month}`;
// }

// //9 Өгөгдсөн 2 тооны ихийг ол.

// function isMaximum(x, y) {
//   if (x > y) return x;
//   return y;
// }

// //10 Өгөгдсөн 4 тооны багийг ол.
// const numbers = [32, 10, 20, 4];
// let minNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < minNumber) {
//     minNumber = numbers[i];
//   }
// }

// //11 Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.

// const numerous = [90, 30, 60, 4];
// let sum = 0;

// for (let i = 0; i < numerous.length; i++) {
//   if (numerous[i] >= 80) {
//     sum += numerous[i];
//   }
// }

// //e2
// const array = [85, 90, 75, 10];

// const filteredNum = array.filter((num) => num > 80);

// const reduce = filteredNum.reduce(
//   (currentValue, count) => currentValue + count,
//   0
// );

// //12 Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа.

// const count = [3, 4, 5, 6, 7];
// let nums = 1;

// for (let i = 0; i < count.length; i++) {
//   if (count[i] < 5) {
//     nums *= count[i];
//   }
// }

// //13 Өгөгдсөн 3 тоон дахь тэгш тоонуудын нийлбэрийг ол. Ядаж 1 тэгш тоо бий.

// const isEven = [4, 7, 8];
// let too = 0;

// for (let i = 0; i < isEven.length; i++) {
//   if (isEven[i] % 2 == 0) {
//     too += isEven[i];
//   }
// }

// //e2

// const filterNumber = isEven.filter((num) => num % 2 == 0);

// const reduceArray = filterNumber.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// //14 Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол. Ядаж 1 сондгой тоо байгаа.

// const isOdd = [3, 7, 8];
// let odd = 1;

// for (let i = 0; i < isOdd.length; i++) {
//   if (isOdd[i] % 2 != 0) {
//     odd *= isOdd[i];
//   }
// }

// //15 Өгөгдсөн 3 тоон дотроос 5-тай тэнцүү тоонуудын тоог ол.

// const equalFive = [2, 5, 5];
// let five = 0;

// for (let i = 0; i < equalFive.length; i++) {
//   if (equalFive[i] == 5) {
//     five++;
//   }
// }

// //16 Өгөгдсөн 4 тоон дотроос 3-д хуваагддаг тоонуудын тоог ол.

// const fourNum = [3, 12, 8, 4];
// let r = 0;

// for (let i = 0; i < fourNum.length; i++) {
//   if (fourNum[i] % 3 == 0) {
//     r++;
//   }
// }

// //17 Өгөгдсөн 4 тооны 11-д хууваагддаггүй тоонуудынх нь нийлбэрийг ол.

// const eleven = [22, 33, 14, 41];

// let divide = 0;

// for (let i = 0; i < eleven.length; i++) {
//   if (eleven[i] % 11) {
//     divide += eleven[i];
//   }
// }

// //18 Өгөгдсөн тоо 10-аас их бол YES үгүй бол NO гэж хэвлэ.

// function plusTen(s) {
//   if (s >= 10) {
//     return "Yes";
//   }
//   return "No";
// }

//19 Гурван тоо өгөгдөнө. Тоо тэгш бол YES үгүй бол NO гэж хэвлэ.

// function threeSum(even) {
//   even.forEach((element) => {
//     // console.log(element % 2 == 0 ? "Unen" : "Hudal");
//   });
// }
// const even = [19, 22, 23];
// threeSum(even);

//20

const numbers = [10, 20, 30];
numbers.map((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});
