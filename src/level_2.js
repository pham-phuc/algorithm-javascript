// 2.1 Write a program that takes a list of numbers as input and returns the second largest number in the list.
function largestNumber(arrNum) {
  if (arrNum.length <= 0) {
    console.log("Is empty array");
  }

  for (let i = 0; i < arrNum.length; i++) {
    for (let j = 0; j < arrNum.length - i - 1; j++) {
      if (arrNum[j] > arrNum[j + 1]) {
        let temp = arrNum[j];
        arrNum[j] = arrNum[j + 1];
        arrNum[j + 1] = temp;
      }
    }
  }

  for (let i = arrNum.length - 2; i >= 0; i--) {
    if (arrNum[i] !== arrNum[i + 1]) {
      return arrNum[i];
    }
  }

  return -1;
}
// console.log(largestNumber([12, 35, 1, 10, 34, 1]));
// console.log(largestNumber([70, 11, 20, 4, 100]));

// 2.2 Write a program that takes a list of strings as input and returns the longest word in the list.

function longestWord(arrStr) {
  let result = "";
  console.log(arrStr.length);

  for (let i = 0; i < arrStr.length - 1; i++) {
    if (arrStr[i].length > arrStr[i + 1].length) {
      result = arrStr[i];
    }
    console.log(arrStr[i].length);
  }
  return result;
}
// console.log(
//   longestWord(["Hello", "guys", "this", "is", "geeksforgeeks", "where"])
// );

// ( ? ) 2.3 Write a program that takes two strings as input and returns the longest common subsequence of the two strings.
// 		VD: đầu vào [“abcdef", “abczyzcdef”], Đầu ra: “cdef"

function getStr(str) {
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      newStr.push(str.slice(i, j));
    }
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length + 1; j++) {
      if (newStr[i] === newStr[j]) {
        newStr.pop(i);
      }
    }
  }
  return newStr;
}

function lcs(str1, str2) {
  let arrStr1 = getStr(str1);
  let arrStr2 = getStr(str2);

  let common = arrStr1.filter((subString) => arrStr2.includes(subString));

  let maxSub = common[0];

  for (let i = 0; i < common.length; i++) {
    if (common[i].length > maxSub.length) {
      maxSub = common[i];
    }
  }

  console.log(maxSub);
}
let str1 = "abcdefabuy";
let str2 = "abczyzcdefab";
console.log(lcs(str1, str2));

// console.log(longestComSub(str1, str2));

//  2.4 Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.

function sumDiv3v5(arrNum) {
  let sum = 0;
  for (let value of arrNum) {
    if (value % 3 == 0 && value % 5 == 0) {
      sum += value;
    }
  }
  return sum;
}
// let arrNum = [1, 2, 5, 10, 9, 15, 20];
// console.log(sumDiv3v5(arrNum));

// 2.5 Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
function maxSum(arrNum) {
  let target = 0;
  let result = 0;

  for (let value of arrNum) {
    target = target + value;
    // console.log(target);
    if (result < target) {
      result = target;
    }
    if (target < 0) {
      target = 0;
    }
  }
  return result;
}

// console.log(maxSum([-2, -3, 4, -1, -2, 1, 5, -3]));
