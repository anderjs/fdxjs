const typeofAll = require('./typeofall')

/**
 * @description
 *  Checks if the given "object" is an Object
 * @param {any} obj
 * @returns {boolean}
 */
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

module.exports = isObject
