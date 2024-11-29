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
