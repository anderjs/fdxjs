const dive = require('../src/objects/dive')

describe('Diving into nested properties of an object', () => {
  it('Should return the last prop of an object', () => {
    const Car = {
      model: 'Mazda',
      engine: {
        pressure: 130,
        steam: {
          maxLevel: 100,
          minLevel: 30
        }
      }
    }

    expect(dive(Car, ['engine', 'steam', 'maxLevel'])).toEqual(100)
  })
})