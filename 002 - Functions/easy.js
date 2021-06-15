// Q1. Given a and b, your function should return the value of a^b.

const power = (num, pow) => {
  let result = 1;
  if (pow === 0) {
      return 1;
  } else if (pow < 0) {
      result = "Please give positive power"
  } else {
      for (let i = 1; i <= pow; i++) {
          result = result * num;
      }
  }
  return result;
}

// Q2. Given length of a regular hexagon, your function should return area of the hexagon.

const areaOfRegularHexagon = (side) => {
  return (2.598 * (side * side))
}

// Q3. Given a sentence, your functions should return the number of words in the sentence.

const noOfWords = (sentence) => {
  return sentence.split(" ").length;
}

// Q4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

const findMin = (...numbers) => {
  let min = numbers[0];
  for (let i = 1; i <= numbers.length; i++) {
      if (numbers[i] < min) {
          min = numbers[i]
      }
  }
  return min;
}

// Q5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

const findMax = (...numbers) => {
  let max = numbers[0];
  for (let i = 1; i <= numbers.length; i++) {
      if (numbers[i] > max) {
          max = numbers[i]
      }
  }
  return max;
}

// Q6. Given three angles of a triangle, your function should return if it is a scales, isosceles, equilateral triangle or not a triangle at all.

const typeOfTriangle = (a, b, c) => {
  sumOfAngles = a+b+c;
  if (sumOfAngles === 180) {
      if ( a === b && b === c) {
          return "This is an equilateral triangle :D"
      } else if (a === 90 || b === 90 || c === 90) {
          return "This is an right-angled triangle :O"
      } else if (a === b || b === c || c === a) {
          return "This is an isosceles triangle XD"
      }
  } else {
      return "Not a Triangle :p"
  }
}

console.log();