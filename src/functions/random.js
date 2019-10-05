/**
 *
 * Get a random number between two given numbers
 *
 * @param {number} min the minimum number
 * @param {number} max the max number
 * @returns {number} a number between min and max
 */
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = random
