const { keys } = Object
const { isArray } = Array

/**
 * @param {any} fragment
 * @description
 * Applying clone check the data type of @argument fragmnet.
 * If it's a primitive data value, then will return the same value.
 * Both of Array and Object types. will make a recursive function.
 * @returns {any}
 */
function applyCloningElement(fragment) {
  if (typeof fragment !== 'object') {
    return fragment
  }

  if (typeof fragment === 'object' && isArray(fragment)) {
    const arrayOfFragments = []
    fragment.forEach((value) => {
      arrayOfFragments.push(typeof value === 'object' ? clone(value) : value)
    })

    return arrayOfFragments
  }

  return clone(fragment)
}


/**
 * @description
 * A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. 
 * A deep copy occurs when an object is copied along with the objects to which it refers. 
 * Shallow Copy. Shallow copy is a bit-wise copy of an object.
 * @param {{}} source The object with properties to clone.
 */
function clone (source) {
  let clone = {}
  /**
   * If the @argument source is not an object, we return a simply object.
   */
  if (typeof source !== 'object') {
    return {}
  }

  /**
   * @description
   * Iterating over the sources key.
   * @requires applyCloningElement function.
   */
  keys(source).forEach((key) => {
    const currentKeyFragment = source[key]
    clone[key] = applyCloningElement(currentKeyFragment)
  })

  return clone
}

module.exports = clone