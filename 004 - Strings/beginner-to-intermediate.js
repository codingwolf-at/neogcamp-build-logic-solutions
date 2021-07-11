// Q1. Write a program that converts the string into uppercase

const convertToUppercase = str => {
  return str.toUpperCase();
}

// Q2. Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

const strAppend = (strOne, strTwo) => strTwo+strOne;

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



console.log()