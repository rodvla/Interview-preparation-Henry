const FindNeedle = require('../Ejercicios/01-FindNeedle/FindNeedle')

describe('FindNeedle', function () {
  it('should return 6 if needle is redux and haystack react-redux', function () {
    expect(FindNeedle('react-redux', 'redux')).toBe(6)
  })
  it('should return -1 if needle is puntual and haystack pinky', function () {
    expect(FindNeedle('pinky', 'puntual')).toBe(-1)
  })
  it('should return 2 if needle is reredux and haystack rereredux', function () {
    expect(FindNeedle('rereredux', 'reredux')).toBe(2)
  })
})
