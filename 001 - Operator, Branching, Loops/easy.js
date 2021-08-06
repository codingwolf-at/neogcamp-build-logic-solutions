// Q1. Write a program to add 5 numbers.

const sumOfFive = (num1, num2, num3, num4, num5) => {
  return num1+num2+num3+num4+num5
}

// Q2. Write a program to take a number input from user and determine whether the number is odd or even.

const evenOrOdd = (num) => num%2 === 0 ? "Even" : "Odd";

// Q3. Write a program to find the maximum and minimum out of two given numbers.

const minOrMax = (numOne, numTwo, condition) => {
  if (condition === "min") {
      if(numOne < numTwo) {
          return numOne;
      } else {
          return numTwo;
      }
  } else if (condition === "max") {
      if(numOne > numTwo) {
          return numOne;
      } else {
          return numTwo;
      }
  } else {
      return "Please give condition as 'min' or 'max'";
  }
}

// Q4. Write a program to find the maximum out of three given numbers.

const maxOutOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
      return num1;
  } else if (num2 > num1 && num2 > num3) {
      return num2;
  } else {
      return num3;
  }
}

// Q5. Write a program to find the minimum out of three given numbers.

const minOutOfThree = (num1, num2, num3) => {
  if (num1 < num2 && num1 < num3) {
      return num1;
  } else if (num2 < num1 && num2 < num3) {
      return num2;
  } else {
      return num3;
  }
}

// Q6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const monthDaysCounter = (month) => {
  if (month <= 7) {
      if (month === 2) {
          return "Month consist of 28 days"
      } else if (month%2 === 0) {
          return "Month consist of 30 days"
      } else {
          return "Month consist of 31 days"
      }
  } else if (month <= 12) {
      if (month%2 === 0) {
          return "Month consist of 31 days"
      } else {
          return "Month consist of 30 days"
      }
  } else {
      return "Please enter month number between 1 to 12 only..."
  }
}

// Call and test functions here: 
console.log();