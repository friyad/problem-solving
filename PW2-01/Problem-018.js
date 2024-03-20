// -PW2.01.018-
// Majority Element

function findMajorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// Example usage:
const nums1 = [3, 2, 3];
console.log(findMajorityElement(nums1)); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(nums2)); // Output: 2

console.log(findMajorityElement([3, 2, 3, 4, 5, 9, 7, 4, 4, 4, 4, 4]));
