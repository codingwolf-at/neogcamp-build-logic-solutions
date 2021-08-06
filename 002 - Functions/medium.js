// Q1. Given an array, your function should return the length of the array.

const arrayLength = arr => arr.length

// Q2. Given an array and an item, your function should return the index at which the item is present.

const findIndex = (arr, el) => arr.indexOf(el)

// Q3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

const replaceElement = (arr, a, b) => arr.map(el => el === a ? b : el);

// Q4. Given two arrays, your function should return single merged array.

const mergeArr = (arrOne, arrTwo) => [...arrOne, ...arrTwo];

// Q5. Given a string and an index, your function should return the character present at that index in the string

const findChar = (str, char) => str[char] || "Given index does not exist in string"

// Q6. Given two dates, your function should return which one comes before the other. (Input type: "DD/MM/YYYY")

const minDate = (dateOne, dateTwo) => {
  dateOneArr = dateOne.split("/")
  dateTwoArr = dateTwo.split("/")
  for (let i = 2; i>=0; i--) {
    if (dateOneArr[i] < dateTwoArr[i]) {
      return dateOne
    }
    if (dateTwoArr[i] < dateOneArr[i]) {
      return dateTwo
    }
  }
  return "Dates are same"
}

// Call and test functions here: 
console.log();