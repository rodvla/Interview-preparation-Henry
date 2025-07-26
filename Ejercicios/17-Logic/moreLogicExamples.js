function fibonacciRecursivo(n) {
  if (typeof n !== 'number') throw new TypeError('n debe ser un número');
  if (n < 0) return 0
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

function nFactorial(n) {
if (typeof n !== 'number') throw new TypeError('n debe ser un número');
if (n<0) return 0;
if (n==0)return 1;
return n*nFactorial(n-1);
}

function bubbleSort(arr) {
  // Devolver el array ordenado resultante
  if (!Array.isArray(arr)) throw new TypeError('El argumento debe ser un array');
  const array = [...arr]
  let swap = true;
  while (swap){ 
    swap = false;
    for (let i=0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        [array[i],array[i+1]] = [array[i+1],array[i]];
        swap=true
      }
    }
  }
  return array;
}

function contarVocales(cadena) {
  if (typeof cadena !== 'string') throw new TypeError('Debe ser un string');
  const cadenaMin = cadena.toLowerCase();
  let contador = 0;
  const vocales = 'aeiou';
  for (let i = 0; i < cadenaMin.length; i++) {
    if (vocales.includes(cadenaMin[i])) {
      contador++;
    }
  }
  return contador;
}

function sumArray(sortedArray, targetSum) {
  // Validate input types - array and number required
  if (!Array.isArray(sortedArray) || typeof targetSum !== 'number') throw new TypeError('args array y un número');
  // Validate array elements are numbers
  if (!sortedArray.every(elemento => typeof elemento === 'number')) throw new TypeError('elementos del array deben ser números')
  // Handle empty array case
  if (sortedArray.length === 0) return false;
  // Handle single element array case
  if (sortedArray.length === 1) return sortedArray[0] === targetSum;

  // Sort array in ascending order
  sortedArray.sort((a, b) => a - b);
  
  // Use two pointers approach - start from both ends of array
  let left = 0;
  let right = sortedArray.length - 1;
  while (left < right) {
    // Calculate sum of elements at left and right pointers
    const currentSum = sortedArray[left] + sortedArray[right];
    if (currentSum === targetSum) {
      // Found pair that sums to target
      return true;
    } else if (currentSum < targetSum) {
      // Sum is too small, increment left pointer to get larger sum
      left++;
    } else {
      // Sum is too large, decrement right pointer to get smaller sum
      right--;
    }
  }
  // No pair found that sums to target
  return false;
}

function removeNullAndUndefined(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
  if (arr.length === 0) return [];
  return arr.filter(item => item !== null && item !== undefined);
}

function isPrime(num) {
  // Validate input is a number
  if (typeof num !== 'number') throw new TypeError('Input must be a number');
  if (num < 0) throw new Error('Number must be positive');
  // Handle border cases
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  // Check odd divisors up to square root
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function romanToArabic (roman) {
  if (typeof roman !== 'string') throw new TypeError('El argumento debe ser un string');
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let arabic = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = romanNumbers[roman[i]];
    const next = romanNumbers[roman[i + 1]];
    if (current < next) {
      arabic += next - current;
      i++;
    } else {
      arabic += current;
    }
  }
  return arabic;
}

function convertToRoman (arabic) {
  if (typeof arabic !== 'number') throw new TypeError('El argumento debe ser un número');
  if (arabic < 1 || arabic > 3999) throw new Error('El número debe estar entre 1 y 3999');
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let roman = '';
  for (let key in romanNumbers) {
    while (arabic >= romanNumbers[key]) {
      roman += key;
      arabic -= romanNumbers[key];
    }
  }
  return roman;
}

module.exports = {
  fibonacciRecursivo,
  bubbleSort,
  nFactorial,
  contarVocales,
  sumArray,
  removeNullAndUndefined,
  isPrime,
  romanToArabic,
  convertToRoman
}
  