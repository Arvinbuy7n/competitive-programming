var containsDuplicate = function (nums) {
  let containsDuplicate = false;
  let array = [];

  for (let i = 0; i < nums.length; i++) {
    if (array.includes(nums[i])) {
      containsDuplicate = true;
    }
    array.push(nums[i]);
  }
  return containsDuplicate;
};

function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
};

var commonPrefix = function (word) {
  let output = "";

  for (let i = 0; i < word[0].length; i++) {
    if (word[0] == "") return "";
    if (word.every((str) => str[i] === word[0][i])) {
      output += word[0][i];
    } else break;
  }
  return output;
};

var validParent = function (s) {
  let stack = [];

  for (i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let prevIndex = stack.pop();
      if (prevIndex === "(" && char !== ")") return false;
      if (prevIndex === "{" && char !== "}") return false;
      if (prevIndex === "[" && char !== "]") return false;
      if (prevIndex === undefined) return false;
    }
  }

  return stack.length == 0;
};

var lastWord = function (x) {
  let result = 0;
  const length = x.length;

  for (let i = length - 1; i >= 0; i--) {
    if (x[i] != " ") result++;
    else {
      if (result > 0) return result;
    }
  }
  return result;
};

var isPalindrome = function (s) {
  return (
    filterAlphaNumeric(s) == filterAlphaNumeric(s).split("").reverse().join("")
  );
};

//empty array
//maxLength
//loop
//array push word1, word2
//log empty array

var mergeStrings = function (word1, word2) {
  const maxLength = Math.max(word1, word2);
  const array = [];

  for (let i = 0; i < maxLength; i++) {
    array.push(word1[i]);
    array.push(word2[i]);
  }

  return array.join("");
};

var maxProfit = function (prices) {};

var maxArea = function (height) {};

var insertPosition = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const med = Math.floor((left + right) / 2);

    if (nums[med] == target) {
      return med;
    } else if (nums[med] < target) {
      left = med + 1;
    }
    right = med - 1;
  }

  return left;
};

console.log(insertPosition([1, 3, 5, 6], 5));

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
