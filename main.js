const clone = require('./src/objects/clone')
const dive = require('./src/objects/dive')

const { freeze } = Object

/**
 * @description
 * Acronym for FDX for Functional Development Experience, 
 * it is a library that allows you to operate on certain data structures, 
 * and primitive types with functional programming. 
 * What provides referential transparency, and easy implementation. 
 * It also gives you a KIT for your web applications in terms of page development tools,
 * and queryStrings.
 * @type {{ Object: { clone: function, dive: function }}} FDX
 * @see https://github.com/anderjs/FDXJS
 * @author anderjs
 */
const FDX = freeze({
  Object: freeze({
    clone,
    dive,
  })
})


module.exports = FDX
