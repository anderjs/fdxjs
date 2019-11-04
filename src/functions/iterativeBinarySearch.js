/***
 *
 * @description
 * Given a sorted list it will find the designated target using iteration
 *
 * @param {Array} arr Where the search it's going to be perfomed
 * @param {number} target the designated target to be found
 * @returns {boolean} Returns the a boolean indicating if the target was found
 */
function iterativeBinarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (target === arr[mid]) {
      return true
    } else if (target < arr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return false
}

module.exports = iterativeBinarySearch
