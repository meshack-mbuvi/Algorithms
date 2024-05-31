/**
 * Problem: Given a positive number 'n', determine if the number is a power of 2 or not.
 * An integer is a power of two if there exists an integer 'x' such that
 * 'n' === 2^x.
 * Eg: isPowerOfTwo(1) = true (2^0)
 * isPowerOfTwo(2) = true (2^1)
 * isPowerOfTwo(5) = false
 */

function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 != 0) return false;
    n = n / 2;
  }

  return true;
}

console.log("isPowerOfTwo(1)", isPowerOfTwo(1));
console.log("isPowerOfTwo(2)", isPowerOfTwo(2));
console.log("isPowerOfTwo(5)", isPowerOfTwo(5));

/**
 * Big-0 = O(log n)
 */


/**
 * Big-0 = (n)
 */
function isPowerOfTwoBitWise(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}
