var mergeStrings = function (word1, word2) {
  const maxLength = Math.max(word1.length, word2.length);
  const array = [];

  for (let i = 0; i < maxLength; i++) {
    array.push(word1[i]);
    array.push(word2[i]);
  }

  return array.join("");
};

var gcdOfStrings = function (s1, s2) {
  const words = [];
  const maxLength = Math.max(s1.length, s2.length);

  for (let i = 0; i < maxLength; i++) {
    if (words.includes(maxLength[i])) {
      words.push(maxLength[i]);
    }
  }
  return words;
};

console.log(gcdOfStrings("ABC", "ABS"));
