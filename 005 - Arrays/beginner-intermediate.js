// Q1. Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

const sumOfArray = arr => {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
}

const sumOfArray2 = arr => arr.reduce((a,b) => a+b);

// Q2. Find average of an array and display the output.

const averageOfArray = arr => {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum/arr.length
}

// Q3. Find maximum and minimum of an array.

const minAndMax = arr => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return `Maximum element is: ${max},\nMinimum element is ${min}`
}

const minAndMax2 = arr => {
  let min = arr[0];
  let max = arr[0];
  for (num of arr) {
    if (num < min) {
      min = num;
    } 
    if (num > max) {
      max = num;
    }
  }
  return `Maximum element is: ${max},\nMinimum element is ${min}`
}

// Q4. Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

const median = arr => {                                 
  const medianIndex = parseInt((arr.length+1)/2);
  const median = arr[medianIndex];
  console.log(median)
}

const mode = arr => {
  let globalCounter = 0;
  let globalChar;
  for (x of arr) {
    let counter = 0;
    for (y of arr) {
      if (x === y) {
        counter++;
      }
    }
    if (counter > globalCounter) {
      globalCounter = counter;
      globalChar = x;
    }

  }
  return globalChar;
}

console.log(mode([9,10,12,13,13,15,16,18]))