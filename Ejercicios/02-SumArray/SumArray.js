// array ordenado
function SumArray(sortedArray, targetSum) {
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
console.log(SumArray([2, 4, 5, 9], 9)) // to.equal(true)
console.log(SumArray([2, 4, 5, 9], 12)) // to.equal(false)
console.log(SumArray([2, 5, 9], 4)) // to.equal(false)
console.log(SumArray([2, 4, 5, 9], 7)) // to.equal(true)

module.exports = SumArray
