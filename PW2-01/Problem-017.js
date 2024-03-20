// -PW2.01.017-
// Move Zeroes

const moveZeroes = (nums) => {
  let nonZeroIndex = 0; // Pointer to keep track of non-zero elements

  // Move all non-zero elements to the beginning of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex++] = nums[i];
    }
  }

  // Fill the rest of the array with zeroes
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums1));

const nums2 = [0];
console.log(moveZeroes(nums2));
