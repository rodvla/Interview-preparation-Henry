// array ordenado
function SumArray(sortedArray, targetSum) {
  sortedArray.sort((a, b) => a - b);
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const currentSum = sortedArray[left] + sortedArray[right];

    if (currentSum === targetSum) {
      return true;
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

module.exports = SumArray