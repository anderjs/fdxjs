/**
 * @description
 * Transform a number into a decimal of the string data type.
 * @param {number} value The number value.
 * @param {boolean} rounded Will rounded the number if it's necessary.
 * @example
 * FDX.number.decimal(3000)
 * output: "3,000"
 */
function decimal(value, rounded) {
  const decimalExpression = new RegExp(/\B(?=(\d{3})+(?!\d))/g);

  return rounded
    ? Math.round(value)
        .toString()
        .replace(decimalExpression, ',')
    : value.toString().replace(decimalExpression, ',')
}

module.exports = decimal;
