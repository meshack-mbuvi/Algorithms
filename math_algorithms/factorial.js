/**
 * Problem: GIven an integer n, find the factorial of that integer.
 * Definition: A factorial is a non-negative number n denoted n! which is the
 * product of all positive numbers less than or equal to n.
 * 0! = 0
 * 1! = 1
 * 2! = 2
 * 3! = 1*2*3
 */

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log("4!", factorial(4));
console.log("5!", factorial(5));

// Big - O = O(n)
