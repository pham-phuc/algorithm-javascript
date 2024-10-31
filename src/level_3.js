//  3.1 Write a program that takes a list of numbers as input and returns the second smallest number in the list.

function secondSmall(arrNum) {
  for (let i = 0; i < arrNum.length; i++) {
    for (let j = i; j < arrNum.length; j++) {
      if (arrNum[i] > arrNum[j]) {
        let temp = arrNum[i];
        arrNum[i] = arrNum[j];
        arrNum[j] = temp;
      }
    }
  }
  for (let i = 0; i <= arrNum.length - 2; i++) {
    if (arrNum[i] !== arrNum[i + 1]) {
      return arrNum[i + 1];
    }
  }
  return -1;
}
// let arrNum = [2, 2, 20, 9, 5, 10];
// console.log(secondSmall(arrNum));

// 3.2 Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.

function maxDiff(arrNum) {
  let max = arrNum[0];
  let min = arrNum[0];
  let maxDiff = 0;
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > max) {
      max = arrNum[i];
    }
    if (arrNum[i] < min) {
      min = arrNum[i];
    }
  }
  maxDiff = max - min;
  return maxDiff;
}

let arrNum = [1, 2, 91, 9, 100];

// console.log(maxDiff(arrNum));

// 3.3 Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers.
// ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )

function Lis(arr) {
  let n = arr.length;
  let aCount = [];

  for (let i = 0; i < n; i++) {
    aCount[i] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        if (aCount[j] + 1 > aCount[i]) {
          aCount[i] = aCount[j] + 1;
        }
      }
    }
  }

  let maxLis = aCount[0];

  for (let i = 0; i < aCount.length; i++) {
    if (aCount[i] > maxLis) {
      maxLis = aCount[i];
    }
  }

  console.log(maxLis);
}

// let arr = [3, 10, 2, 1, 20];
// Lis(arr);

//  3.4 Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.
function olCount(st1, st2) {
  let arr1 = st1.split("");
  let arr2 = st2.split("");

  let olCount = arr1.filter((char) => arr2.includes(char));
  //   console.log(olCount.length);
  return olCount.length;
}

function looc(arr) {
  let n = arr.length;
  let maxOlCount = 0;
  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let countOl = olCount(arr[i], arr[j]);
      //   console.log(countOl);
      if (countOl > maxOlCount) {
        maxOlCount = countOl;
        result = [arr[i], arr[j]];
      }
    }
  }
  return result;
}

// let arr = ["hello", "world", "foobar", "barfoo", "he", "llo"];
// console.log(looc(arr));

// 3.5 Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.

function findSmallest(arr) {
  res = 1;
  arr = arr.sort();
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > res) {
      break;
    }
    res += arr[i];
  }
  return res;
}
// let arr = [1, 5, 2, 4];
// console.log(findSmallest(arr));

// 3.6 Write a program that takes two lists of integers as input and returns the median of the combined list.

function median(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  newArr.sort();

  if (newArr.length % 2 != 0) {
    median = newArr[newArr.length / 2 - 0.5];
  } else {
    median = (newArr[newArr.length / 2] + newArr[newArr.length / 2 - 1]) / 2;
  }

  return median;
}

let arr1 = [3, 1, 2, 5, 4];
let arr2 = [7, 8, 6];
console.log(median(arr1, arr2));

//  3.10 (?) Write a program that takes a list of strings as input and returns the list sorted by the number
// of distinct characters in each string, with the shortest strings appearing first.

function sortChar(arr) {
  // Hàm phụ để đếm số ký tự khác nhau trong một chuỗi
  function countDistinctChars(str) {
    let distinctChars = new Set(str); // Sử dụng Set để chỉ giữ các ký tự duy nhất
    // console.log(distinctChars);
    return distinctChars.size; // Trả về số lượng ký tự khác nhau
  }

  // Sắp xếp mảng theo số lượng ký tự khác nhau, nếu bằng nhau thì sắp xếp theo thứ tự độ dài
  return arr.sort((a, b) => {
    const distinctA = countDistinctChars(a);
    const distinctB = countDistinctChars(b);

    // So sánh số ký tự khác nhau, nếu bằng nhau thì so sánh độ dài chuỗi
    if (distinctA === distinctB) {
      return a.length - b.length;
    }
    return distinctA - distinctB; // Sắp xếp theo số ký tự khác nhau
  });
}

let arr = ["apple", "banana", "orange", "kiwi", "strawberry"];
console.log(sortChar(arr));
