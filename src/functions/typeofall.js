
/**
 * @description
 * You can have a number of arguments of the same type where 
 * you make a typeof for each argument of your function, when you use typeof all,
 * you can directly tell if all these arguments are of the same type.
 * @param {'string' | 'number' | 'object' | 'undefined' | 'null' | 'Symbol' | 'function'} type 
 * @param  {...any} args N based arguments.
 * @param {boolean} inverseMode Negates the statement, typeof instantly goes !==
 * @returns {boolean} 
 * @example
 * typeofAll('number', 1, 2, 3, 4, 5) => true
 */
function typeofAll(type, inverseMode = false, ...args) {
  return inverseMode ? args.every(arg => typeof arg !== type) : args.every(arg => typeof arg === type)
}

module.exports = typeofAll