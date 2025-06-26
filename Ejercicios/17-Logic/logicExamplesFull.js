function isPalindrome(str) {
  if (typeof str !== 'string') throw new TypeError('Se esperaba un string');
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (cleanStr === cleanStr.split('').reverse().join('')) return true
  return false
}

function fizzBuzz(n = 100) {
  if (typeof n !== 'number') throw new TypeError('n debe ser un número');
  const result = [];
  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    result.push(output || i);
  }
  return result;
}

function reverseString(str) {
  if (typeof str !== 'string') throw new TypeError('str debe ser string');
  let result = '';
  for (let char of str) {
    result = char + result;
  }
  return result;
}

function findMissing(arr, n) {
  if (!Array.isArray(arr) || typeof n !== 'number') throw new TypeError();
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, val) => sum + val, 0);
  return expectedSum - actualSum;
}

function countChars(str) {
  if (typeof str !== 'string') throw new TypeError();
  const counts = {};
  for (let char of str) {
    if (char !== ' ') {
      counts[char] = (counts[char] || 0) + 1; // si existe suma uno, sino lo crea
    }
  }
  return counts;
}

function isBalanced(str) {
  if (typeof str !== 'string') throw new TypeError();
  let count = 0;
  for (let char of str) {
    if (char === '(') count++;
    else if (char === ')') count--;
    if (count < 0) return false;
  }
  return count === 0;
}

module.exports = {
  isPalindrome,
  fizzBuzz,
  reverseString,
  findMissing,
  countChars,
  isBalanced
}