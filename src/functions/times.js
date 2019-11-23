/**
 * @description
 *  Create an array of given length and populate them with unique values
 *  using a given string.
 * @param {number} len the length of the array
 * @param {string} str the string to use as base
 * @returns {string []} the final array of unique values
 */
function times(len, str) {
  return [
    ...Array(len)
      .keys()
      .map((_, index) => `${str}_${index}`),
  ]
}

module.exports = times
