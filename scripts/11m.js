function minMax(nums) {
  const result = {
    min: null,
    max: null
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (result.min === null || value < result.min) {
        result.min = value;
    }

    if (result.max === null || value > result.max) {
        result.max = value;
    }
  }
  return result;
}
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));