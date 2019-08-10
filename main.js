const clone = require('./src/objects/clone')
const dive = require('./src/objects/dive')

const pipeline = require('./src/functions/pipeline')
const compose = require('./src/functions/compose')
const loopback = require('./src/functions/loopback')
const paginate = require('./src/functions/paginate')

const offset = require('./src/arrays/offset')

const { freeze } = Object

/**
 * @description
 * Acronym for FDX for Functional Development Experience, 
 * it is a library that allows you to operate on certain data structures, 
 * and primitive types with functional programming. 
 * What provides referential transparency, and easy implementation. 
 * It also gives you a KIT for your web applications in terms of page development tools,
 * and queryStrings.
 * @see https://github.com/anderjs/FDXJS
 * @author anderjs
 */
const FDX = freeze({
  Object: freeze({
    clone,
    dive,
  }),
  Func: freeze({
    compose,
    loopback,
    paginate,
    pipeline,
  }),
  Array: freeze({
    offset
  })
})

module.exports = FDX
