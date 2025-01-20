/**
 * Merge sorted array
 * arr1 = [0,3,4,31]
 * arr2 = [4,6,30]
 * result = [0,3,4,4,6,30,31]
 */
function mergeSortedArray(arr1, arr2) {
  const arr = [];
  let i = 0;
  let j = 0;

  while (typeof arr1[i] === "number" || typeof arr2[j] === "number") {
    if (arr1[i] < arr2[j] || typeof arr2[j] === "undefined") {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  return arr;
}

const result = mergeSortedArray([0, 3, 4, 31], [0, 6, 30]);
console.log(result);
