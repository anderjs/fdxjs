const loopback = require('./loopback')

/**
 * @description
 * The page is one of the most requested requirements on websites. 
 * Normally there is no standard way of how to do them but in this 
 * function you have the ability to develop one.
 * @param {{ pageElements: number, totalElements: number }} params
 * @returns {number []}
 * @example
 * paginate({ pageElements: 10, totalElements: 20 })
 * output: [1, 2]
 */

function paginate({ pageElements, totalElements }) {
  const pagesOf = Math.ceil(totalElements / pageElements)

  const pages = []

  loopback(pagesOf, (currentIteration) => pages.push(currentIteration + 1))

  return pages
}


module.exports = paginate
