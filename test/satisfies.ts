import assert from 'assert';
import { satisfies } from '../src/index';

describe('satisfies versions', () => {
  const runTests = (dataSet: Array<[string, string, boolean]>) => {
    dataSet.forEach(([v, m, expected]) => {
      it(`${v} ${expected ? 'satisfies' : 'violates'} ${m}`, () => {
        assert.strictEqual(satisfies(v, m), expected);
      });
    });
  };

  describe('tilde - https://docs.npmjs.com/cli/v6/using-npm/semver#tilde-ranges-123-12-1', () => {
    runTests([
      ['1.0.0', '~1.0.1', false],
      ['1.0.1', '~1.0.1', true],
      ['1.2.5', '~1.2.3', true],
      ['1.3.0', '~1.2.3', false],
      ['1.2.5', '~1.2', true], // (Same as 1.2.x)
      ['1.3.0', '~1.2', false], // (Same as 1.2.x)
      ['1.0.0', '~1', true], // (Same as 1.x)
      ['2.0.0', '~1', false], // (Same as 1.x)
      ['0.2.5', '~0.2.3', true],
      ['0.3.0', '~0.2.3', false],
      ['0.2.5', '~0.2', true], // (Same as 0.2.x)
      ['0.3.0', '~0.2', false], // (Same as 0.2.x)
      ['0.0.0', '~0', true], // (Same as 0.x)
      ['0.1.2', '~0', true], // (Same as 0.x)
      ['1.0.0', '~0', false], // (Same as 0.x)
    ]);
  });

  describe('caret - https://docs.npmjs.com/cli/v6/using-npm/semver#caret-ranges-123-025-004', () => {
    runTests([
      ['1.0.0', '^1', true],
      ['1.0.0', '^1.0', true],
      ['1.0.0', '^1.0.0', true],
      ['1.2.0', '^1.0.0', true],
      ['v1.2.0', '^1.0.0', true],
      ['2.0.0', '^1.0.0', false],
      ['1.0.0', '^1.2.0', false],
      ['1.0.1', '^1.2.0', false],
      ['1.3.4', '^1.2.3', true],
      ['2.0.0', '^1.2.3', false],
      ['0.3.0', '^0.2.3', false],
      ['0.0.4', '^0.0.3', false],
    ]);
  });

  runTests([
    ['1.2.0', '>1.0.0', true],
    ['1.2.0', '<1.0.0', false],
    ['1.0.0', '<=1.0.0', true],
    ['1.0.0', '<=2.0.0', true],
    ['1.0.1', '1.0.0', false],
    ['1.0.0', '1.0.0', true],
    ['10.1.8', '>10.0.4', true],
    ['10.1.8', '>=10.0.4', true],
    ['10.0.1', '=10.0.1', true],
    ['10.0.1', '=10.1.*', false],
    ['10.1.1', '<10.2.2', true],
    ['10.1.1', '<10.0.2', false],
    ['10.1.1', '<=10.2.2', true],
    ['10.1.1', '<=10.1.1', true],
    ['10.1.1', '<=10.0.2', false],
    ['10.1.1', '>=10.0.2', true],
    ['10.1.1', '>=10.1.1', true],
    ['10.1.1', '>=10.2.2', false],
    ['11.0.0', '>=10.1.1', true],
    ['3', '3.x.x', true],
    ['3.3', '3.x.x', true],
    ['3.3.3', '3.x.x', true],
    ['3.x.x', '3.3.3', true],
    ['3.3.3', '3.X.X', true],
    ['3.3.3', '3.3.x', true],
    ['3.3.3', '3.*.*', true],
    ['3.3.3', '3.3.*', true],
    ['3.0.3', '3.0.*', true],
    ['1.1.0', '1.2.x', false],
    ['1.1.0', '2.x.x', false],
    ['2.0.0', '<2.x.x', false],
    ['2.0.0', '<=2.x.x', true],
    ['2.0.0', '>2.x.x', false],
  ]);

  describe('pre-release versions - https://semver.org/#spec-item-9', () => {
    runTests([
      ['1.2.3-beta.4', '~1.2.3-beta.2', true],
      ['1.2.3-beta.1', '~1.2.3-beta.2', false],
      ['1.2.4-beta.2', '~1.2.3-beta.2', false],
      ['1.2.3-beta.4', '^1.2.3-beta.2', true],
      ['1.2.4-beta.2', '^1.2.3-beta.2', false],
      ['2.0.0', '^1.2.3-beta.2', false],
      ['0.0.3-beta.2', '^0.0.3-beta', true],
      ['0.0.3-pr.2', '^0.0.3-beta', true],
      ['0.0.4', '^0.0.3-beta', false],
    ]);
  });

  describe('comparator sets - https://docs.npmjs.com/cli/v6/using-npm/semver#ranges', () => {
    runTests([
      ['1.1.0', '>=1.2.7 <1.3.0', false],
      ['1.2.9', '>=1.2.7 <1.3.0', true],
      ['1.3.0', '>=1.2.7 <1.3.0', false],
      ['1.2.9', '   >=1.2.7     <1.3.0 ', true],
      ['1.3.0', '   >=1.2.7     <1.3.0 ', false],
      ['1.2.7', '1.2.7 || >=1.2.9 <2.0.0', true],
      ['1.2.9', '1.2.7 || >=1.2.9 <2.0.0', true],
      ['1.4.6', '1.2.7 || >=1.2.9 <2.0.0', true],
      ['1.2.8', '1.2.7 || >=1.2.9 <2.0.0', false],
      ['2.0.0', '1.2.7 || >=1.2.9 <2.0.0', false],
      ['2.0.0', '1.2.7 || >=1.2.9 <2.0.0', false],
      ['1.4.6', '  1.2.7  || >=1.2.9    <2.0.0   ', true],
      ['2.0.0', '  1.2.7  || >=1.2.9    <2.0.0   ', false],
    ]);
  });
});
