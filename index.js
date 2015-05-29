'use strict'

/** List of built-in operators. */
var operators = '= < > <= >= != %='.split(' ')

/** Lookup table of compare functions. */
var comparators = operators.reduce(function(res, operator) {
  var trueOperator = operator

  if ('=' == operator) {
    trueOperator = '==='
  }
  else if ('!=' == operator) {
    trueOperator = '!=='
  }

  if ('%=' == operator) {
    res[operator] = function(a, b) { return (0 === a % b) }
  }
  else {
    res[operator] = new Function('a', 'b', 'return (a ' + trueOperator + ' b)')
  }

  return res
}, {})

/**
 * Get a compare function given an operator.
 *
 * @param {string} operator Operator used to compare.
 * @return {function} Compare function taking two arguments.
 */
function compareFactory(operator) {
  return comparators[operator]
}

/** Expose operators and comparators as factory properties. */
compareFactory.operators = operators
compareFactory.comparators = comparators

/** Exports */
module.exports = compareFactory
