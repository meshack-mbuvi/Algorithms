/**
 * Given an array of integers, sort the array.
 * example: arr = [-6, 20, 8, -2, 4] => [-6, -2, 4, 8, 20]
 *
 * Idea: Compare the adjacent elements in the array and swap the positions if
 * they are not in the intended order.
 * Repeat the instruction as you step through each element in the array.
 * Once you step through all elements and no swaps, the array is sorted
 */
function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arr = [-6, 20, 8, -2, 4];

console.log("sorted array ", bubbleSort(arr));

console.log("next sorted array ", bubbleSort([1, 2, 3]));

// Big-O - O(n^2)
