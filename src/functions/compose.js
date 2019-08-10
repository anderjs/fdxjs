
/**
 * @description
 * In computer science, function composition is an act or mechanism 
 * to combine simple functions to build more complicated ones. 
 * Like the usual composition of functions in mathematics, t
 * he result of each function is passed as the argument of the next, 
 * and the result of the last one is the result of the whole.
 * Compose operates in the sense opposite as pipeline.
 * @param  {...function} fns
 * @returns {any}
 * @example
 * compose(connect(mapStateToProps, mapDispatchToProps), React.memo)(App)
 * An easy example about React.js memo is passed first, then the component gets connected to redux. 
 */
function compose(...fns) {
  return function(value) {
    return fns.reduceRight((x, fn) => fn(x), value)
  }
}

module.exports = compose