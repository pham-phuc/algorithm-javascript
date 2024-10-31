// 4.1 Write a program that takes a list of integers as input and returns the minimum number of moves required
// to sort the list in ascending order using bubble sort.

function arrSort(arrNum) {
  if (arrNum.length <= 0) {
    console.log("Is empty array");
  }
  let count = 0;

  for (let i = 0; i < arrNum.length; i++) {
    for (let j = 0; j < arrNum.length - i - 1; j++) {
      if (arrNum[j] > arrNum[j + 1]) {
        let temp = arrNum[j];
        arrNum[j] = arrNum[j + 1];
        arrNum[j + 1] = temp;
        count++;
      }
    }
  }
  console.log(count);
}

//   let arrNum = [3, 1, 4, 2, 6, 5];
//   arrSort(arrNum);

// 4.6 Write a program that takes a list of integers as
// input and returns the maximum product of any three distinct elements in the list.

function product(arr) {
  let n = arr.length;
  let arrPro = [];
  if (n < 3) {
    return -1;
  }
  for (let i = 0; i < n - 2; i++) {
    for (let j = 1; j < n - 1; j++) {
      for (let k = 2; k < n; k++) {
        arrPro.push(arr[i] * arr[j] * arr[k]);
      }
    }
  }
  arrPro = Array.from(new Set(arrPro));

  let maxPros = arrPro[0];
  for (let i = 0; i <= arrPro.length; i++) {
    if (arrPro[i] > maxPros) {
      maxPros = arrPro[i];
    }
  }
  return maxPros;
}

// let arr = [10, 3, 5, 6, 20];
// console.log(product(arr));

// 4.7 Write a program that takes a list of strings as input and returns the list sorted by the number of
// distinct words in each string, with the longest strings appearing first.
// (Khuyến khích dùng forEach với javascript )

function longestStringSort(arr) {
  function countDistWord() {
    let arrEl = [];
    arr.forEach((el, index, arr) => {
      arrEl = Array.from(el.split(" "));
      arrEl = new Set(arrEl).size;
    });
    return arrEl;
  }

  return arr.sort((a, b) => {
    let distA = countDistWord(a);
    let distB = countDistWord(b);
    if (distA === distB) {
      return b.length - a.length;
    }
    return distB - distA;
  });
}

// let arr = [
//   "the quick brown fox",
//   "the lazy dog jumps over the fence",
//   "the cat in the hat",
// ];

// console.log(longestStringSort(arr));

// 4.9 Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the
// numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1. ( Khuyến khích dùng reduce )

function longestConsSubs(arr) {
  if (arr.length === 0) return 0;

  let maxLength = 1;
  let currentLength = 1;

  let currentSubsequence = [arr[0]];
  console.log(currentSubsequence);

  arr.reduce((prev, curr) => {
    if (Math.abs(curr - prev) <= 1) {
      currentLength++;
      currentSubsequence.push(curr);
      console.log(currentSubsequence);
    } else {
      console.log(currentSubsequence);
      currentLength = 1;
      currentSubsequence = [curr];
    }

    if (currentLength > maxLength) {
      maxLength = currentLength;
    }

    return curr;
  });

  return maxLength;
}

// Ví dụ sử dụng
const arr = [1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9];
console.log(longestConsSubs(arr));
