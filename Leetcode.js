// //1
// var longestCommonPrefix = function (str) {
//   let output = "";

//   for (let i = 0; i < str[0].length; i++) {
//     if (str.every((str) => str[i] === str[0][i])) output += str[0][i];
//     else break;
//   }
//   return output;
// };

// //2
// var palindromeNumber = function (x) {
//   if (x < 0) {
//     return false;
//   } else {
//     x.toString === x.toString().split("").reverse("").join("");
//   }
// };

// //3
// var lengthOfLastWord = function (s) {
//   let res = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] != " ") res++;
//     else {
//       if (res > 0) return res;
//     }
//   }
//   return res;
// };

// var lengthOfLastWord = function (s) {
//   return s.trimEnd().split(" ").pop().length;
// };

// //4
// var searchInsert = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return left;
// };

// //5
// var validParentheses = function (s) {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//     } else {
//       let prevIndex = stack.pop();
//       if (prevIndex === "(" && char !== ")") return false;
//       if (prevIndex === "{" && char !== "}") return false;
//       if (prevIndex === "[" && char !== "]") return false;
//       if (prevIndex === undefined) return false;
//     }
//   }
//   return stack.length === 0;
// };

// //6 two sum
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.target; i++) {
//     for (j = i + 1; j < nums.target; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

// //7
// var mergeAlternately = function (word1, word2) {};
