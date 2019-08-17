const evalString = require('./evalString')

/**
 *
 * @description
 * Converts a given value to a boolean equivalent. Useful for validating
 * answers of a CLI or parsing values from a .env file. Each type is treated
 * differently.
 *
 * @param {(string|number|boolean)} The value to convert.
 * @returns {boolean} Returns the boolean equivalent
 * @example
 *
 * toBoolean("true")
 * // => true
 *
 * toBoolean("false")
 * // => false
 *
 * toBoolean({a: 1, b: 2})
 * // => true
 *
 * toBoolean("yes")
 * // => true
 *
 * toBoolean("no")
 * // => false
 *
 * toBoolean("y")
 * // => true
 *
 * toBoolean("n")
 * // => false
 *
 */
function toBoolean(value) {
  switch (typeof value) {
    case 'undefined':
      return false

    case 'object':
      return !!value

    case 'boolean':
      return value

    case 'function':
      return true

    case 'number':
      return value <= 0 ? false : true

    case 'symbol':
      return true

    case 'string':
      return evalString(value)

    default:
      throw new TypeError(
        'The value provided to the toBoolean function is not recognized: unable to convert to boolean.'
      )
  }
}

module.exports = toBoolean
