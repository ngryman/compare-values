'use strict'

var compareFactory = require('./index')
  , expect = require('expect.js')

var compareStatements = {
  '=': 'a === b',
  '<': 'a < b',
  '>': 'a > b',
  '<=': 'a <= b',
  '>=': 'a >= b',
  '!=': 'a !== b',
  '%=': '0 === a % b'
}

describe('compare functions', function() {
  compareFactory.operators.forEach(function(operator) {
    context("given '" + operator + "' operator", function() {
      var compare = compareFactory(operator)

      it('returns a comparator function', function() {
        expect(compare).to.be.a('function')
      })

      it('compares two values correctly', function() {
        expect(compare.toString()).to.contain(compareStatements[operator])
      })
    })
  })
})
