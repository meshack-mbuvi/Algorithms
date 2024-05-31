/*
 * Problem: Given a number n, find the first 'n' elements of the fibonacci sequence
 * Definition: It is a sequence in which each number is the sum of the two preceding ones.
 **/
function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log("Fib(0)", fibonacci(0));
console.log("Fib(1)", fibonacci(1));
console.log("Fib(3)", fibonacci(3));
console.log("Fib(5)", fibonacci(5));
console.log("Fib(7)", fibonacci(7));
