const BinaryToDecimal = require('../Ejercicios/09-BinaryToDecimal/BinaryToDecimal')

describe('BinaryToDecimal', function () {
  it("should return 2 when called with '10'", function () {
    expect(BinaryToDecimal('10')).toBe(2)
  })
  it("should return 7 when called with '111'", function () {
    expect(BinaryToDecimal('111')).toBe(7)
  })
})
