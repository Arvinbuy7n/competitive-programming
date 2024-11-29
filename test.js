var mergeStrings = function (word1, word2) {
  const maxLength = Math.max(word1.length, word2.length);
  const array = [];

  for (i = 0; i < maxLength; i++) {
    array.push(word1[i]);
    array.push(word2[i]);
  }
  return array.join("");
};

var longestPrefix = function (strs) {
  let string = "";
  for (let i = 0; i < strs[0].length - 1; i++) {
    if (strs[0] === "") return "";
    if (strs.every((str) => str[i] === strs[0][i])) {
      string += strs[0][i];
    } else break;
  }
  return string;
};

var anagram = function (x, y) {
  if (x.split("").sort().join("") === y.split("").sort().join("")) {
    return true;
  }
  return false;
};

var contains = function (nums) {
  let arr = [];
  let isBoolean = false;

  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) {
      return (isBoolean = true);
    }
    arr.push(nums[i]);
  }
  return isBoolean;
};

console.log(contains(1, 2, 3, 1));

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
