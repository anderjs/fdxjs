const loopback = require('../src/functions/loopback')

describe('Should iterate over N value and callbacks the index', () => {
  it('Should return indexed values each by one', () => {
    const example = []

    loopback(10, (index) => example.push(index))

    expect(example).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})