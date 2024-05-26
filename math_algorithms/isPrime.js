/**
 * Problem: Given a natural number n, determine if the number is prime or not.
 * Definitions: A prime number is a natural number greater than 1 tha is not a
 * product of two smaller natural numbers.
 */
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log("isprime(1)", isPrime(1)); //false
console.log("isprime(5)", isPrime(5)); //true
console.log("isprime(4)", isPrime(4)); //false

/**
 * Execution time without checking sqrt(n) is O(n)
 * with otimised version, the execution time is O(sqrt(n))
 */
