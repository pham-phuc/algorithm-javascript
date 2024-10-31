// 1.1 Write a program that takes two numbers as inputs and displays their sum.

function SumTwoNum(a, b) {
  let sum = a + b;
  console.log(sum);
}
// 1.2 Write a program that takes a string as input and displays the length of the string.
function strLength(str) {
  let strLength = str.length;
  console.log(strLength);
}

// 1.3 Write a program that takes a number as input and displays its square.

function squareNum(num) {
  let squareNum = num ** 2;
  console.log(squareNum);
}

// 1.4 Write a program that takes a list of numbers as input and displays the largest number in the list.

function findLargestNum(arrNum) {
  if (arrNum.length <= 0) {
    console.log("Is empty array");
  }
  let largest = arrNum[0];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > largest) {
      largest = arrNum[i];
    }
  }
  console.log(largest);
}

// 1.5 Write a program that takes a list of strings as input and displays the shortest string in the list.
function strShortest(arrStr) {
  if (arrStr.length <= 0) {
    console.log("Is empty array");
  }
  let shortest = arrStr[0];

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length < shortest.length) {
      shortest = arrStr[i];
    }
  }
  console.log(shortest);
}

// 1.6 Write a program that takes a list of numbers as input and sorts the list in ascending order.

function arrSort(arrNum) {
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
  console.log(arrNum);
}

// 1.7 Write a program that takes a list of strings as input and sorts the list in alphabetical order.
function sortAlphabest(arrStr) {
  if (arrStr.length <= 0) {
    console.log("Is empty array");
  }
  for (let i = 0; i < arrStr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrStr.length; j++) {
      if (arrStr[j] < arrStr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arrStr[i];
      arrStr[i] = arrStr[minIndex];
      arrStr[minIndex] = temp;
    }
  }
  console.log(arrStr);
}

// 1.8 Write a program that takes a list of numbers as input and returns the median of the numbers.

function medianNum(arrNum) {
  if (arrNum.length <= 0) {
    console.log("Is empty array");
  }
  let arrCopy = arrNum;
  let median;
  arrCopy = arrCopy.sort((a, b) => {
    return a - b;
  });
  console.log(arrCopy);
  let length = arrCopy.length;
  if (length % 2 == 1) {
    median = arrCopy[length / 2 - 0.5];
    console.log(median);
  } else {
    median = (arrCopy[length / 2] + arrCopy[length / 2 - 1]) / 2;
    console.log(median);
  }
}

//  1.9 Write a program that tádakes a string as input and returns the number of words in the string.

function wordNum(str) {
  if (str.trim() === "") {
    return 0;
  }
  let countWord = 0;
  let arrStr = str.trim().split(/\s+/);
  for (let value of arrStr) {
    if (value !== "") {
      countWord++;
    }
  }

  console.log(countWord);
}

// 1.10 Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
function countStra(arrStr) {
  let count = 0;
  for (let str of arrStr) {
    if (str.toLowerCase().includes("a")) {
      count++;
    }
  }
  console.log(count);
}
let arrStr = ["apple", "banana", "cherry", "date", "fig"];
