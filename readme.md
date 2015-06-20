# compare-values [![npm][npm-image]][npm-url] [![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/compare-values.svg?style=flat
[npm-url]: https://npmjs.org/package/compare-values
[travis-image]: https://img.shields.io/travis/ngryman/compare-values.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/compare-values

> Get functions to compare two values given an operator.


## Install

```
$ npm install —-save compare-values
```


## Usage

```js
var compareFactory = require(‘compare-values’);

var equal = compareFactory(‘=‘);
equal(1, 1); //=> true
equal(1, 2); //=> false

var greaterThan = compareFactory(‘>’);
greaterThan(2, 1); //=> true
greaterThan(1, 2); //=> false
```


## Operators

| =         | <       | >       | <=       | >=       | !=       | %=            |
| --------- | ------- | ------- | -------- | -------- | -------- | ------------- |
| `a === b` | `a < b` | `a > b` | `a <= b` | `a >= b` | `a != b` | `a % b === 0` |


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
