const TRUTHY_VALUES = require('../utils/truthy-values')
const FALSY_VALUES = require('../utils/falsy-values')

/**
 *
 * Evaluates the given string and returns and appropiate boolean value.
 *
 * @param {string} value the value to evaluate
 * @returns {boolean} Returns the boolean equivalent
 * @example
 *
 * evalString("true")
 * // => true
 *
 * evalString("false")
 * // => false
 *
 * evalString("yes")
 * // => true
 *
 * evalString("no")
 * // => false
 */
const evalString = value => {
  if (typeof value !== 'string')
    throw new TypeError(
      'The value provided to the evalString function is not a string.'
    )

  if (value.length === 0) return false

  const parsedString = value.trim().toLowerCase()

  if (TRUTHY_VALUES.includes(parsedString)) return true

  if (FALSY_VALUES.includes(parsedString)) return false

  return false
}

module.exports = evalString
