const paginate = require('../src/functions/paginate')

describe('Creating an array of pagination example', () => {
  it('Should return a array of N numbers', () => {
    expect(paginate({ pageElements: 10, totalElements: 100 })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})