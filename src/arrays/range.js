/**
 *
 * @description
 * It creates an array from a sequence of numbers both positives
 * and/or negatives. Starting from `start` and up to `end`.
 *
 * @param {number} [start=0] The starting point of the sequence.
 * @param {number} end The ending point of the sequence.
 * @param {number} [step=1] The value to increment or decrement.
 * @returns {Array} Returns the array with the sequence.
 * @example
 *
 * range(1, 4, 0)
 * // => []
 *
 * range(0)
 * // => []
 *
 * range(0, 0)
 * // => []
 *
 * range(0, 5, 6)
 * // => []
 *
 * range(5)
 * // => [5, 4, 3, 2, 1, 0]
 *
 * range(5, 2)
 * // => [5, 4, 3, 2]
 *
 * range(0, 5)
 * // => [0, 1, 2, 3, 4, 5]
 *
 * range(10, 50, 10)
 * // => [10, 20, 30, 40, 50]
 *
 * range(0, -10, 2)
 * // => [0, -2, -4, -6, -8, -10]
 *
 *
 *
 */
function range(start = 0, end = 0, step = 1) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    typeof step !== "number"
  ) {
    return [];
  }

  if ((start === 0 && end === 0) || step <= 0) {
    return [];
  }

  if (start === end) {
    return [start];
  }

  const diff = Math.abs(end - start);

  const length = Math.ceil(diff / step + 1);

  return start > end
    ? Array.from({ length }, (_, key) => start - key * step)
    : Array.from({ length }, (_, key) => start + key * step);
}

module.exports = range;
