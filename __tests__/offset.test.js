const offset = require('../src/arrays/offset')

describe('Offsets an array from right, and left', () => {
  it('Should split values in an array from left, and right', () => {
    expect(offset([1, 2, 3, 4, 5, 6], 2, 1, 1)).toEqual([2, 3, 4])
    expect(offset([1, 2, 3, 4, 5, 6], 0, 4, 4)).toEqual([1, 2, 3, 4, 5])
    expect(offset([], 0, 1, 1)).toEqual([])
  })
})
