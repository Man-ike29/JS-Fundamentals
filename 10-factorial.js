#!/usr/bin/node
function factorial (n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  if (n < 0) {
    // Factorial is not defined for negative numbers, but let's follow the convention of returning 1 for NaN.
    // Some might prefer to throw an error or return -1. Let's stick to the prompt's spirit.
    // For this exercise, we can consider negative numbers as cases where a number cannot be computed, similar to NaN.
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = parseInt(process.argv[2]);
console.log(factorial(arg));