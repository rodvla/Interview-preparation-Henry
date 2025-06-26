const MaxValue = require('../Ejercicios/03-MaxValue/MaxValue')

describe('MaxValue', function () {
  it('should return 9 if the array of shares is [4,3,2,5,11]', function () {
    expect(MaxValue([4, 3, 2, 5, 11])).toBe(9)
  })
  it('should return 9 if the array of shares is [23,7,3,4,8,6]', function () {
    expect(MaxValue([23, 7, 3, 4, 8, 6])).toBe(5)
  })
})
