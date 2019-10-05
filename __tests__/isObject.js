const isObject = require('../src/functions/isObject')

describe('isObject Tests', () => {
  it('should return true for an empty object', () => {
    expect(isObject({})).toBe(true)
  })

  it('should return true for an object with properties', () => {
    expect(isObject({ foo: 1, bar: 2 })).toBe(true)
  })

  it('should return true for an object with nested properties', () => {
    expect(isObject({ foo: 1, bar: 2, fizz: { buzz: 3 } })).toBe(true)
  })

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isObject('string')).toBe(false)
  })
})
