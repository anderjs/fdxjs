/**
 * @param {{}} source 
 * @param {string []} divingKeys They key to diving into object.
 * @description
 * The dive function allows you to navigate between vastly deep objects. 
 * And you can directly return a property instead of manually accessing them.
 * If divingKeys are undefined or empty will return an empty object.
 * @example
 * const Car = { model: 'Mazda', engine: { air: ['ut35'] }}
 * diving(Car, ['engine', 'air'])
 * If getLastKey is present.
 * diving(Car, ['engine', 'air'], true)
 * output: { air: ['ut35'] }
 */
function dive (source, divingKeys) {
  if (divingKeys && divingKeys.length === 1) {
    const [ key ] = divingKeys
    return source[key]
  }


  let dived = source[divingKeys[0]]

  /**
   * Checking if the array is empty or undefined.
   */
  if (!divingKeys || divingKeys.length === 0) {
    return {}
  }

  /**
   * Diving into the keys in sequence.
   */
  divingKeys.forEach((dive, index) => {
    if (index > 0) {
      dived = dived[dive]
    }
  })
  
  return dived
}


module.exports = dive