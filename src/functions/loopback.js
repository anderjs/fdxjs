/**
 * loopback is a routine process where there is a standard of iterating over an array
 * or some type of data structure. Or maybe a process. 
 * Loopback takes the standard of initializing an index at 0 and stopping when the index 
 * reaches the assigned value.  It also returns a callback with the current iteration.
 * @param {number} value 
 * @param {function} callback
 * @example
 * loopback(10, (currentIteration) => {
 *  console.log(currentIteration)
 * }) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 */
function loopback(value, callback) {
  for(let index = 0; index < value; index ++) {
    callback(index)
  }
}

module.exports = loopback