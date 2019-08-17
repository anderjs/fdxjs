/**
 * @description
 * Union connects each value the array in an unique collection of two values.
 * This is called on discret maths 'possibles solutions'
 * @param {any []} arr 
 * @example
 * FDX.array.union([1, 2]) => [[1, 1], [1, 2], [2, 1], [2, 2]]
 */
function union(arr) {

  const size = arr ? arr.length : 0
  const values = []

  const unique = Array.from(new Set(size > 0 ? arr : []))

  unique.forEach((value, _, arr) => {
    arr.forEach((_, nestedIndex) => {
      values.push([value, arr[nestedIndex]])
    })
  })

  return values
}

module.exports = union