# compare-versions

[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Compare [semver](http://semver.org/) version strings to find greater, equal or lesser. Runs in the browser as well as node.js/iojs.

## Install

Install with `bower` or `npm`:

```bash
$ bower install compare-versions --save
```

```bash
$ npm install compare-versions --save
```

## Usage

```javascript
var compareVersions = require('compare-versions');

compareVersions('10.1.8', '10.0.4'); //  1
compareVersions('10.0.1', '10.0.1'); //  0
compareVersions('10.1.1', '10.2.2'); // -1
```

Can also be used for sorting:

```javascript
var versions = [
    '1.5.19'
    '1.2.3',
    '1.5.5',
];
console.log(versions.sort(compareVersions));
```

Outputs:

```javascript
[
    '1.2.3',
    '1.5.5',
    '1.5.19'
]
```

[travis-image]: https://img.shields.io/travis/omichelsen/compare-versions/master.svg
[travis-url]: https://travis-ci.org/omichelsen/compare-versions
[coveralls-image]: https://img.shields.io/coveralls/omichelsen/compare-versions/master.svg
[coveralls-url]: https://coveralls.io/r/omichelsen/compare-versions?branch=master
