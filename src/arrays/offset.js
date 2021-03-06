const typeofAll = require('../functions/typeofall')
const { max, min } = Math;

/**
 * @description
 *  It obtains an array of numbers as an argument, 
 *  for the second argument it would be the current position of the element
 *  in relation to the closest right / left elements.
 * @param {number []} arr
 * @param {number} currentPosition
 * @param {number} fromLeft
 * @param {number} fromRight
 * @throws {Error} if some value is not a number.
 * @example
 * offset([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 2, 2)
 * output: [3, 4, 5, 6, 7]
 */
function offset(arr, currentPosition, fromLeft, fromRight) {
  if (typeof arr !== 'object') {
    return []
  }
  
  const inverseMode = true
  if(typeofAll('number', inverseMode, currentPosition, fromLeft, fromRight)) {
    return []
  }

  if (arr.some(value => typeof value !== 'number')) {
    throw new Error(`${value} must be a number`)
  }

  const size = arr.length
  return arr.filter(value => {
    return (
      value >= max(arr[0], arr[currentPosition] - fromLeft) &&
      value <= min(size, arr[currentPosition] + fromRight)
    )
  })
}

module.exports = offset
