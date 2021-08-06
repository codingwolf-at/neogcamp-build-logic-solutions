// an npm package to take inputs via console
const readlineSync = require('readline-sync');

// Q1. Write a program to input 2 numbers and display the sum of the numbers to the console.
const sumOfTwo = () => {
    const num1 = readlineSync.questionInt("Input Number 1: ");
    const num2 = readlineSync.questionInt("Input Number 2: ");
    console.log("Sum:", num1+num2);
}

// Q2. Write a JavaScript program to calculate the simple interest.
const simpleInterest = () => {
    const p =  readlineSync.questionInt("Input principle amount: ");
    const r  = readlineSync.question("Input rate(percent): ");
    const t = readlineSync.question("Input time(years): ");
    const SI = (p*r*t)/100;
    console.log(`Simple Interest is ${SI}`)
}

// Q3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
const calculateKineticEnergy = () => {
  const mass = readlineSync.question("Enter mass: ");
  const volume = readlineSync.question("Enter volume: ");
  const KE = 0.5*mass*volume*volume;
  console.log(`Kinetic Energy is ${KE} joules`)
}

// Q4. Write a program to convert Fahrenheit to Celsius.
const convertTemp = () => {
  const f = readlineSync.question("Enter value in Fahrenheit: ");
  const result = (f - 32)*9/5;
  console.log(`Its ${result} degree Celsius`)
}

// Q5. Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
const calculateSquare = () => {
  const side = readlineSync.question("Enter the side of square: ");
  console.log(`Area of square is ${side*side}`);
  console.log(`Perimeter of square is ${4*side}`);
  console.log(`Volume of cube is ${side*side*side}`);
  console.log(`Surface area of cube is ${6*side*side}`);
}

// Q6. Write a Program to Calculate the Profit or Loss.
const profitOrLoss = () => {
  const CP = readlineSync.question("Enter cost price: ");
  const SP = readlineSync.question("Enter selling price: ");
  if (CP>SP) {
    console.log(`LOSS of ${CP-SP}`);
  } else if (SP>CP) {
    console.log(`PROFIT of ${SP-CP}`);
  } else {
    console.log(`no profit/loss`);
  }
}

// Q7. Write a program to calculate sum of N natural digits, as input by the users.
const sumUpto = () => {
  const num = readlineSync.questionInt("Enter a positive number: ");
  let sum = 0;
  for (let i = 1; i<=num; i++) {
    sum += i;
  }
  console.log(sum);
}

const sumUpto2 = (num) => {
  if (num === 1) {
    return 1;   
  } else {
    return num+sumUpto2(num-1);
  }
}

// Q8. Write a Program to Print N Odd Number.
const printOddNumber = () => {
  const num = readlineSync.questionInt("Enter the value of N: ");
  let FIRST = 1;
  for (let i = 1; i<=num; i++) {
    console.log(FIRST);
    FIRST+=2;
  }
}

// Q9. Write a JavaScript program to compute the sum of all digits that occur in a given string.
const sumOfDigits = () => {
  const input = readlineSync.question("Enter a string of digits: ");
  let sum = 0;
  let remaining = input;
  while (remaining !== 0) {
    sum = sum + (remaining%10);
    remaining = parseInt(remaining/10);
  }
  console.log(`Sum of all digits: ${sum}`);
}

// Q10. Write a JavaScript program that reverses a number.
const reverseNumber = () => {
  const input = readlineSync.questionInt("Enter a positive number: ");
  
}

// Call and test functions here: 
console.log();