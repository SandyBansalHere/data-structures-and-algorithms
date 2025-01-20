/**
 * Merge sorted array
 * arr1 = [0,3,4,31]
 * arr2 = [4,6,30]
 * result = [0,3,4,4,6,30,31]
 */
function mergeSortedArray(arrOne, arrTwo) {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (arrOne[i] || arrTwo[j]) {
    if (arrOne[i] < arrTwo[j] || arrTwo[j] === undefined) {
      mergedArr.push(arrOne[i]);
      i++;
    } else {
      mergedArr.push(arrTwo[j]);
      j++;
    }
  }

  return mergedArr;
}

const result = mergeSortedArray([1, 3, 4, 31], [4, 6, 30]);
console.log(result);
