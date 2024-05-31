/**
 *
 *
 * Pseudocode:
 * - if array is empty then return -1 as element cannot be found.
 * - if array contains elements, find the middle element in the array. If target
 *  is equal to the middle element then return middle element index.
 *
 * - If target is less than the middle element, binary search is left half of the array.
 *
 * - If target is greater than the middle element, binary search is right half of the array.
 */
function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  let middle = Math.floor((leftIndex + rightIndex) / 2);

  if (target === array[middle]) return middle;
  else if (target < array[middle]) {
    return search(array, target, leftIndex, middle);
  } else if (target > array[middle]) {
    return search(array, target, middle + 1, rightIndex);
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log("target = 1", recursiveBinarySearch(arr, 1)); // 0
console.log("target = 2", recursiveBinarySearch(arr, 2)); // 1
console.log("target = 3", recursiveBinarySearch(arr, 3)); // 2
console.log("target = 5", recursiveBinarySearch(arr, 5)); // 4
console.log("target = 7", recursiveBinarySearch(arr, 7)); // -1

// Big-O = O(log n)
