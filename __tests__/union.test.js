const union = require('../src/arrays/union')


describe('Union will create a unique collection of each value', () => {
  it('Should return an unique collection for each index in the array', () => {
    expect(union([1, 2, 3])).toEqual([
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3]
    ])
  })
})