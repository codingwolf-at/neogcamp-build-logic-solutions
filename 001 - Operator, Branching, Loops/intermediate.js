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
  let numOne = 0;
  let numTwo = 1;
  let numThree;
  for (let i = 0; i<num; i++) {
    
  }
}

console.log(printTableTo12(2));