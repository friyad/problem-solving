// PW2.01.016
// Remove Duplicates from Sorted Array

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let uniqueCount = 1; // Initialize count with 1 as the first element is always unique
  let lastUniqueIndex = 0; // Pointer to the last unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[lastUniqueIndex]) {
      // If a new unique element is found, move it to the position after the last unique element
      nums[++lastUniqueIndex] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
};

// Example usage:
const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1));

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2));
