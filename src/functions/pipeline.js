/**
 * @description
 * In computing, a pipeline, also known as a data pipeline, 
 * is a set of data processing elements connected in series,
 * where the output of one element is the input of the next one. 
 * The elements of a pipeline are often executed in parallel or in time-sliced fashion.
 * Some amount of buffer storage is often inserted between elements.
 * @param  {...function} fns The N arguments as functions.
 * @returns {any} returns any element processed.
 * @example
 * pipeline(uppercase, reverse)('J a V a ')
 * output: A V A J 
 */
function pipeline(...fns) {
  return function (value) {
    return fns.reduce((x, fn) => fn(x), value)
  }
}

module.exports = pipeline