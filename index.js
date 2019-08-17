const clone = require('./src/objects/clone')
const dive = require('./src/objects/dive')

const pipeline = require('./src/functions/pipeline')
const compose = require('./src/functions/compose')
const loopback = require('./src/functions/loopback')
const paginate = require('./src/functions/paginate')
const typeofAll = require('./src/functions/typeofall')
const range = require('./src/functions/range')
const toBoolean = require('./src/functions/toBoolean')
const evalString = require('./src/functions/evalString')

const offset = require('./src/arrays/offset')
const union = require('./src/arrays/union')

const decimal = require('./src/number/decimal')

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
  array: freeze({
    offset,
    union
  }),

  fn: freeze({
    compose,
    loopback,
    paginate,
    pipeline,
    typeofAll,
    range,
    evalString,
    toBoolean,
  }),

  object: freeze({
    clone,
    dive,
  }),

  num: freeze({
    decimal,
  }),
})

module.exports = FDX