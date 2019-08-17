const typeofAll = require('./typeofall')

/**
 * @description
 *  It creates an array from a sequence of numbers both positives
 *  and/or negatives. Starting from `start` and up to `end`.
 * @param {number} start 
 * @param {number} end 
 * @param {number} step
 * @returns {number []} 
 */
function range(start, end, step) {
  const inverseMode = true
  if(typeofAll('number', inverseMode, start, end, step, inverseMode)) {
    return []
  }

  if ((start === 0 && end === 0) || step <=0 ) {
    return []
  }

  if (start === end) {
    return [start]
  }

  const diff = Math.abs(end - start)

  const length = Math.ceil(diff / step + 1)

  return start > end
  ? Array.from({ length }, (_, key) => start - key * step)
  : Array.from({ length }, (_, key) => start + key * step)
}

module.exports = range