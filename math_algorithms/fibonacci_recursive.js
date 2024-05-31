/*
 * Problem: Given a number n, find the first 'n' elements of the fibonacci sequence
 * Definition: It is a sequence in which each number is the sum of the two preceding ones.
 *
 * Tests:
 * recursiveFib(0) = 0
 * recursiveFib(1) = 1
 * recursiveFib(6) = 8
 **/
function recursiveFib(n) {
  if (n < 2) return n;

  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

console.log("recursiveFib(0)", recursiveFib(0)); // 0
console.log("recursiveFib(1)", recursiveFib(1)); // 1
console.log("recursiveFib(6)", recursiveFib(6)); // 8


// O(n) - Iterative
// O(2^n) - Recursive