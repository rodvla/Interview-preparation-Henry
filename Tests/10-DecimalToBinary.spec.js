const DecimalToBynary = require('../Ejercicios/10-DecimalToBynary/DecimalToBynary')

describe('DecimalToBynary', function () {
  it('should return "100" when called with 4', function () {
    expect(DecimalToBynary(4)).toBe('100')
  })
  it('should return "111" when called with 7', function () {
    expect(DecimalToBynary(7)).toBe('111')
  })
})
