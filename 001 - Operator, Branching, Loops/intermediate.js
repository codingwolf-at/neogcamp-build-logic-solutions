// Q1. FizzBuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

const FizzBuzz = () => {
  let resultArr = [];
  for (let i = 1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
      resultArr.push("FizzBuzz")
    } else if (i%3 === 0) {
      resultArr.push("Fizz");
    } else if (i%5 === 0) {
      resultArr.push("Buzz")
    } else {
      resultArr.push(i)
    }
  }
  return resultArr;
}

// Q2. Print the following star pattern
// *
// * *
// * * *
// * * * *
// * * * * *

const printPattern = () => {
  for (let i = 0; i<5; i++) {
    for (let j = 0; j<i; j++) {
      process.stdout.write("* ");
    }
    console.log("")
  }
}

// Q3. Write a program to take a number input from user and print multiplication table 12 times for that number.

const printTableTo12 = num => {
  for (let i = 1; i<=12; i++) {
    console.log(`${num} x ${i} = ${num*i}`)
  }
}

// Q4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const printFibonacci = num => {
  let resultArr = [];
  let numOne = 0;
  let numTwo = 1;
  resultArr.push(numOne, numTwo);
  let numThree;
  while (resultArr.length<num) {
    numThree = numOne+numTwo;
    resultArr.push(numThree);
    numOne = numTwo;
    numTwo = numThree;
  }
  return resultArr;
}

// Q5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const printFactorial = num => {
  if (num < 1) {
    return 1
  } else {
    return num*printFactorial(num-1);
  }
}

// Q6. Write a Program to take a number input from user and find if the number is Prime or not.

const checkPrime = num => {
  if (num > 1) {
    for (let i = 2; i<num; i++) {
      if (num%i === 0) {
        return false
      } else {
        return true
      }
    }
  } else {
    return false
  }
}

// console.log(checkPrime(9));
// -> true // why? 

// Q7. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const checkDay = day => {
  if (day[0].toLowerCase() === "s") {
    return "Weekend"
  } else {
    return "Weekday"
  }
} 

console.log()