function sortedSquare(nums) {
  let i = 0;
  let j = nums.length - 1;
  const result = [];
  let fillIndex = nums.length - 1;
  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[fillIndex] = nums[i] * nums[i];
      i++;
    } else {
      result[fillIndex] = nums[j] * nums[j];
      j--;
    }

    fillIndex--;
  }

  return result;
}

const result = sortedSquare([-4, -1, 0, 3, 10]);
console.log(result);
