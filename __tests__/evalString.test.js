const evalString = require('../src/functions/evalString')

describe('evalStrings tests', () => {
  it('return true for the yes string', () => {
    expect(evalString('yes')).toBe(true)
  })

  it('return true for the ye string', () => {
    expect(evalString('ye')).toBe(true)
  })

  it('return true for the yep string', () => {
    expect(evalString('yep')).toBe(true)
  })

  it('return true for the yup string', () => {
    expect(evalString('yup')).toBe(true)
  })

  it('return true for the y string', () => {
    expect(evalString('y')).toBe(true)
  })

  it('return true for the true string', () => {
    expect(evalString('true')).toBe(true)
  })

  it('return true for the aye string', () => {
    expect(evalString('aye')).toBe(true)
  })

  it('return true for the sure string', () => {
    expect(evalString('sure')).toBe(true)
  })

  it('return true for the 1 string', () => {
    expect(evalString('1')).toBe(true)
  })

  it('return false for the no string', () => {
    expect(evalString('no')).toBe(false)
  })

  it('return true for the nop string', () => {
    expect(evalString('nop')).toBe(false)
  })

  it('return true for the nope string', () => {
    expect(evalString('nope')).toBe(false)
  })

  it('return true for the n string', () => {
    expect(evalString('n')).toBe(false)
  })

  it('return true for the false string', () => {
    expect(evalString('false')).toBe(false)
  })

  it('return true for the nay string', () => {
    expect(evalString('nay')).toBe(false)
  })

  it('return true for the nah string', () => {
    expect(evalString('nah')).toBe(false)
  })

  it('return true for the 0 string', () => {
    expect(evalString('0')).toBe(false)
  })

  it('return false for any unknown string that is not in the truthy or falsy arrays', () => {
    expect(evalString('Pingüino')).toBe(false)
  })

  it('throw a TypeError if the value provided is not a string', () => {
    try {
      evalString({})
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError)
      expect(err.message).toBe(
        'The value provided to the evalString function is not a string.'
      )
    }
  })
})
