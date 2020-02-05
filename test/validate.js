const assert = require('assert');
const compare = require('..');

describe('validate versions', () => {
  [
    [undefined, false],
    [null, false],
    [42, false],
    [{}, false],
    [[], false],
    [() => undefined, false],
    ['6.3.', false],
    ['1.2.3a', false],
    ['1.2.-3a', false],
    ['v1.0.0', true],
    ['01.0.0', true],
    ['1.0.x', true],
    ['1.0.0-rc.1', true],
    ['1.0.0-alpha', true],
    ['1.0.0-build.3928', true],
    ['1.0.0+20130313144700', true],
    ['1.2.3.100', true],
    ['2020', true]
  ].forEach(([v, expected]) => {
    it(`${v}`, () => {
      assert.equal(compare.validate(v), expected)
    });
  });
});
