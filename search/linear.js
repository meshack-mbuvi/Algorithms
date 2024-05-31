/**
 * Given an array of n elements and a target element t, find the index of t in
 *  the array. Return -1 if the element is not in the array.
 *  Eg: A = [1, 2, 3, 4, 5, 6]
 *  search(3) = 2
 *  search(5) = 4
 *  search(0) = -1
 */
function linearSearch(arr, target) {
  if (!arr.length - 1) return -1;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) return index;
  }

  return -1;
}

// Big - O = O(n)
