const toBoolean = require('../src/functions/toBoolean')

describe('toBoolean tests', () => {
  it('return true for the boolean true', () => {
    expect(toBoolean(true)).toBe(true)
  })

  it('return true for a non-empty object', () => {
    expect(toBoolean({ a: 1, b: 2 })).toBe(true)
  })

  it('return true for an empty object', () => {
    expect(toBoolean({})).toBe(true)
  })

  it('return true for a function', () => {
    expect(toBoolean(() => {})).toBe(true)
  })

  it('return true for a symbol', () => {
    expect(toBoolean(Symbol())).toBe(true)
  })

  it('return true for the yes string', () => {
    expect(toBoolean('yes')).toBe(true)
  })

  it('return true for the 1 string', () => {
    expect(toBoolean('1')).toBe(true)
  })

  it('return true for the true string', () => {
    expect(toBoolean('true')).toBe(true)
  })

  it('return true for a number greater than 0', () => {
    expect(toBoolean(1)).toBe(true)
  })

  it('return false for undefined', () => {
    expect(toBoolean(undefined)).toBe(false)
  })

  it('return false for null', () => {
    expect(toBoolean(null)).toBe(false)
  })

  it('return false for the number 0', () => {
    expect(toBoolean(0)).toBe(false)
  })

  it('return false for the number that is less than 0', () => {
    expect(toBoolean(-2)).toBe(false)
  })

  it('return false for the boolean false', () => {
    expect(toBoolean(false)).toBe(false)
  })

  it('return false for the no string', () => {
    expect(toBoolean('no')).toBe(false)
  })

  it('return false for the 0 string', () => {
    expect(toBoolean('0')).toBe(false)
  })

  it('return false for the false string', () => {
    expect(toBoolean('false')).toBe(false)
  })

  it('throw a TypeError if the value provided is not any of these types', () => {
    try {
      toBoolean(Infinity + NaN)
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError)
      expect(err.message).toBe(
        'The value provided to the toBoolean function is not recognized: unable to convert to boolean.'
      )
    }
  })
})
