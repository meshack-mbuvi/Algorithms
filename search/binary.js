/**
 * Given a sorted array of n elements and a target element t, find the index of
 * the target in the array. Return -1 if the element is not found.
 */
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) return middleIndex;
    else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log("target = 1", binarySearch(arr, 1)); // 0
console.log("target = 2", binarySearch(arr, 2)); // 1
console.log("target = 3", binarySearch(arr, 3)); // 2
console.log("target = 5", binarySearch(arr, 5)); // 4
console.log("target = 7", binarySearch(arr, 7)); // -1
