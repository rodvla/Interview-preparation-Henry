
const SumArray = require('../Ejercicios/02-SumArray/SumArray')

describe('Sumarray(arr, n)', function () {
  it('should return true when there is a combination of two numbers that sums n', function () {
    expect(SumArray([2, 4, 5, 9], 9)).toEqual(true)
  })
  it('should return false when no combination of two numbers sums n', function () {
    expect(SumArray([2, 4, 5, 9], 12)).toEqual(false)
  })
  it('should not sum the same number twice to reach n', function () {
    expect(SumArray([2, 5, 9], 4)).toEqual(false)
  })
  it('unoreder: should return true when there is a combination of two numbers that sums n', function () {
    expect(SumArray([4, 2, 9, 5], 7)).toEqual(true)
  })
  it('unorder: should return false when no combination of two numbers sums n', function () {
    expect(SumArray([5, 2, 9, 4], 12)).toEqual(false)
  })
})
