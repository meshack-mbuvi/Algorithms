/**
 * Given an array of integers, sort the array.
 * example: arr = [-6, 20, 8, -2, 4] => [-6, -2, 4, 8, 20]
 *
 * Idea: Virtually split the array into a sorted and an unsorted part
 * Assume that the fist element is already sorted and remaining elements are unsorted.
 * Select an unsorted element and compare it with all the elements in the sorted part.
 * If the elements in the sorted part are smaller than the selected element,
 * proceed to the next element in the unsorted part. Else, shift larger elements
 *  in the sorted part towards the right
 * Insert eh selected element at the right index.
 * Repeat till all the unsorted elements in the unsorted part
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elementToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > elementToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = elementToInsert;
  }
  return arr;
}

const arr = [-6, 20, 8, -2, 4];

console.log("sorted array ", insertionSort(arr));

console.log("next sorted array ", insertionSort([1, 2, 3]));

// Big-O - O(n^2)
