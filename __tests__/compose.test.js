const compose = require('../src/functions/compose')

describe('Amplying a sucession of functions on the same argument', () => {
  it('Should return uppercase value and append a value at the end of the string', () => {
    const toUppercase = (value) => value.toUpperCase()

    const appendIsAwesome = (value) => value + ' IS AWESOME!'

    const testString = 'functional programming'

    expect(compose(toUppercase, appendIsAwesome)(testString)).toBe('FUNCTIONAL PROGRAMMING IS AWESOME!')
  })
})