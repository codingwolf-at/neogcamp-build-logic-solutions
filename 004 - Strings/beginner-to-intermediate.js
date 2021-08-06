// Q1. Write a program that converts the string into uppercase

const convertToUppercase = str => {
  return str.toUpperCase();
}

// Q2. Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

const strAppend = (strOne, strTwo) => strTwo+strOne;

// BONUS: Reverse a string

const reverseString = str => str.split("").reverse().join("");

const reverseString2 = str => {
  const strArray = str.split(""); 
  let resultArray = [];
  for (char of strArray) {
    resultArray.unshift(char);
  }
  return resultArray.join("");
}

const reverseString3 = str => {
  let result = "";
  for (let i = str.length-1; i>=0; i--) {
    result += str[i]
  }
  return result;
}
// Q3. Program that reads string and count number of characters present in the string

const strLength = str => str.length;

// Q4. Write a program that converts string to num;

const strToNum = str => +str;

// Q5. Write a program to delete all vowels from a string.

const removeVowels = str => {
  const vowels = ["a","e","i","o","u"];
  const strArray = str.split("");
  let result = strArray.filter(char => vowels.indexOf(char.toLowerCase()) === -1)
  return result.join("");
}

const removeVowels2 = str => {
  const strArray = str.split("");
  let result = strArray.map(char => char.toLowerCase().replace(/[aeiou]/g, ""))
  return result.join("");
}

// Q6. Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

const isAlphaNumeric = str => {
  let flag = false;
  for (char of str) {
    if (!isNaN(char)) {
      flag = true;
    }
  }
  return flag;
}

// Q7. A program that reads strings and prints the longest and smallest one.

const stringLengthComparison = (...arr) => {
  let smallest = arr[0];
  let longest = arr[0];
  arr.map(str => {
    if (str.length > longest.length) {
      longest = str;
    } 
    if (str.length < smallest.length) {
      smallest = str;
    }
  })
  return `Smallest string is: ${smallest},\nLongest string is: ${longest}`
}

// Q8. A program that counts number of vowels and consonants in a String.

const stringCounter = str => {
  const vowels = ["a","e","i","o","u","A","E","I","O","U"];
  let vowelCounter = 0;
  let consonantCounter = 0;
  for (char of str) {
    if (vowels.indexOf(char) === -1) {
      consonantCounter = consonantCounter + 1
    } else {
      vowelCounter = vowelCounter + 1
    }
  }
  return `No of vowels: ${vowelCounter},\nNo of consonants: ${consonantCounter}`
}

// Q9. Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using str.length()

const greaterThan7 = str => {
  let length = 0;
  for (char of str) {
    length++;
  }
  if (length > 7) {
    return true
  } else {
    return false
  }
}

// Call and test functions here: 
console.log();