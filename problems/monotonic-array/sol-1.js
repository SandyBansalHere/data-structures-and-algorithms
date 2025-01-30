function monotonicArray(nums) {
  return nums[0] < nums[nums.length - 1] ? increasing(nums) : decreasing(nums);
}

function increasing(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }

  return true;
}

function decreasing(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      return false;
    }
  }

  return true;
}

const result = monotonicArray([1, 3, 2]);
console.log(result);
