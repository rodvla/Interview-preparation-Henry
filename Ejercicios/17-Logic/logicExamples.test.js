const { isPalindrome, fizzBuzz, reverseString, findMissing, countChars, isBalanced } = require('./logicExamplesFull');
const { fibonacciRecursivo, bubbleSort, nFactorial, contarVocales, sumArray, removeNullAndUndefined, isPrime, romanToArabic, convertToRoman } = require('./moreLogicExamples');

describe('Test Suit 1', () => {
  // beforeEach(() => { console.log('before each')})
  // Palindrome
  test('isPalindrome: caso positivo', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
  test('isPalindrome: caso negativo', () => {
    expect(isPalindrome('Papafrita')).toBe(false);
  });    
  test('isPalindrome: caso error', () => {
    expect(() => isPalindrome(null)).toThrow(TypeError);
  });
  // FizzBuzz
  test('fizzBuzz: hasta 15', () => {
    expect(fizzBuzz(15)[14]).toBe('FizzBuzz');
  });
  test('fizzBuzz: debería generar la secuencia FizzBuzz correctamente hasta un número dado', () => {
    const expected = [
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
      11, 'Fizz', 13, 14, 'FizzBuzz'
    ];
    expect(fizzBuzz(15)).toEqual(expected);
  });
  test('fizzBuzz: debería retornar un array vacío si n es 0', () => {
    expect(fizzBuzz(0)).toEqual([]);
  });
  test('fizzBuzz: error por tipo', () => {
    expect(() => fizzBuzz('quince')).toThrow(TypeError);
  });
  test('fizzBuzz:debería retornar un array vacío si n es negativo', () => {
    expect(fizzBuzz(-5)).toEqual([]);
  });

  // Reverse String
  test('reverseString: invierte cadena', () => {
    expect(reverseString('hola')).toBe('aloh');
  });
  test('reverseString: error si no es string', () => {
    expect(() => reverseString(123)).toThrow(TypeError);
  });

  // Find Missing Number
  test('findMissing: falta el 3', () => {
    expect(findMissing([1, 2, 4, 5], 5)).toBe(3);
  });
  test('findMissing: error si argumentos inválidos', () => {
    expect(() => findMissing('mal', 5)).toThrow();
  });

  // Count Chars
  test('countChars: cuenta letras', () => {
    expect(countChars("aabc")).toEqual({ a: 2, b: 1, c: 1 });
  });
  test('countChars: error con entrada no válida', () => {
    expect(() => countChars(null)).toThrow(TypeError);
  });

  // isBalanced

  test('isBalanced: correctamente balanceado', () => {
    expect(isBalanced('(())')).toBe(true);
  });
  test('isBalanced: desequilibrado', () => {
    expect(isBalanced('(()')).toBe(false);
  });

})

describe('Test suit 2', () => {
  // Fibonnacii
  test('fibonnacci de 6 es 8', () => {
    expect(fibonacciRecursivo(6)).toBe(8);
  });
  test('fibonnacci de 0 es 0', () => {
    expect(fibonacciRecursivo(0)).toBe(0);
  });
  test('fibonnacci negativo', () => {
    expect(fibonacciRecursivo(-5)).toBe(0);
  });
  test('fibonnacci negativo', () => {
    expect(() => fibonacciRecursivo('aa')).toThrow(TypeError);
    expect(() => fibonacciRecursivo('aa')).toThrow('n debe ser un número');
  });
  // Factorial
  test('factorial: debería retornar el factorial correcto para un número positivo', () => {
    expect(nFactorial(5)).toBe(120);
  });
  test('factorial: debería retornar 1 para el factorial de 0', () => {
    expect(nFactorial(0)).toBe(1);
  });
  test('factorial: debería lanzar un error para un número negativo', () => {
    expect(() => nFactorial('a')).toThrow(TypeError);
    expect(() => nFactorial('a')).toThrow('n debe ser un número');
  });  
  // Bubble Sort
  test('bubblesort de [5, 4, 3, 2, 1] y [1, 2, 3]', () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  test('bubblesort mal arg', () => {
    expect(() => bubbleSort(5)).toThrow(TypeError);
    expect(() => bubbleSort(5)).toThrow('El argumento debe ser un array');
  })
  // Contar vocales
  test('contar vocales: debería contar correctamente las vocales en una cadena', () => {
    expect(contarVocales('Hola Mundo')).toBe(4);
  });
  test('contar vocales: debería retornar 0 para una cadena sin vocales', () => {
    expect(contarVocales('rhythm')).toBe(0);
  });
  test('contar vocales: debería retornar 0 para una cadena vacía', () => {
    expect(contarVocales('')).toBe(0);
  });
  // SumArray
  it('sumarray: should return true when there is a combination of two numbers that sums n', () => {
    expect(sumArray([2, 4, 5, 9], 9)).toBe(true)
  })
  it('sumarray: should return false when no combination of two numbers sums n', () => {
    expect(sumArray([2, 4, 5, 9], 12)).toBe(false)
  })
  it('sumarray: should not sum the same number twice to reach n', () => {
    expect(sumArray([2, 5, 9], 4)).toBe(false)
  })
  it('sumarray unorder: should return true when there is a combination of two numbers that sums n', () => {
    expect(sumArray([4, 2, 9, 5], 7)).toBe(true)
  })
  it('sumarray unorder: should return false when no combination of two numbers sums n', () => {
    expect(sumArray([5, 2, 9, 4], 12)).toBe(false)
  })
  // RemoveNullAndUndefined
  test('removeNullAndUndefined: should remove null and undefined values', () => {
    expect(removeNullAndUndefined([1, null, 2, undefined, 3])).toEqual([1, 2, 3]);
  });
  test('removeNullAndUndefined: should handle empty array', () => {
    expect(removeNullAndUndefined([])).toEqual([]);
  });
  test('removeNullAndUndefined: should keep other falsy values', () => {
    expect(removeNullAndUndefined([0, '', false, null, undefined])).toEqual([0, '', false]);
  });
  test('removeNullAndUndefined: should throw error for non-array input', () => {
    expect(() => removeNullAndUndefined('not an array')).toThrow(TypeError);
    expect(() => removeNullAndUndefined('not an array')).toThrow('Input must be an array');
  });
  // IsPrime tests
  test('isPrime: should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });
  test('isPrime: should return false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });
  test('isPrime: should throw error for non-number input', () => {
    expect(() => isPrime('23')).toThrow(TypeError);
    expect(() => isPrime('23')).toThrow('Input must be a number');
  });
  test('isPrime: should throw error for negative numbers', () => {
    expect(() => isPrime(-5)).toThrow(Error);
    expect(() => isPrime(-5)).toThrow('Number must be positive');
  });
  test('romanToArabic: should throw error for numbers', () => {
    expect(() => romanToArabic(5)).toThrow(Error);
    expect(() => romanToArabic(5)).toThrow('El argumento debe ser un string');
  });
  test('romanToArabic de 2, 4, 1982', () => {
    expect(romanToArabic('II')).toBe(2);
    expect(romanToArabic('IV')).toBe(4);
    expect(romanToArabic('MCMLXXXII')).toBe(1982);
  });
  test('convertToRoman: should throw error for strings', () => {
    expect(() => convertToRoman('5')).toThrow(Error);
    expect(() => convertToRoman('5')).toThrow('El argumento debe ser un número');
  });
  test('convertToRoman de 2, 4, 1982', () => {
    expect(convertToRoman(2)).toBe('II');
    expect(convertToRoman(4)).toBe('IV');
    expect(convertToRoman(1982)).toBe('MCMLXXXII');
  });
});