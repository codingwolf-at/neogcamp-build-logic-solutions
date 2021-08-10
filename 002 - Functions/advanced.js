// Q2. Given a sentence, return a sentence with first letter of all words as capital.

const toSentenceCase = str => {
  let flag = true;
  let resultStr = "";
  for (char of str ) {
    if (flag) {
      resultStr += char.toUpperCase();
      flag = false;
    } else {
      resultStr += char;
    }
    if (char === " ") {
      flag = true;
    }
  }
  return resultStr;
}

// Q3. Given an array of numbers, your function should return an array in the ascending order.

const sortArray = arr => {}

// Call and test functions here: 
console.log(sortArray[9,2,3,4,2,4,65,44,3,3]);