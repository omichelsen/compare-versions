var assert = require('assert');
var compare = require('..');

describe('compare versions', function () {
    it('should compare versions correctly', function () {
        assert.equal(compare('10.1.8', '10.0.4'),  1);
        assert.equal(compare('10.0.1', '10.0.1'),  0);
        assert.equal(compare('10.1.1', '10.2.2'), -1);
    });

    it('should compare versions with different number of digits in same group', function () {
        assert.equal(compare('11.0.10', '11.0.2'), 1);
        assert.equal(compare('11.0.2', '11.0.10'), -1);
    });

    it('should compare versions with different number of digits in different groups', function () {
        assert.equal(compare('11.1.10', '11.0'), 1);
    });

    it('should compare versions with different number of digits', function () {
        assert.equal(compare('1.1.1', '1'), 1);
        assert.equal(compare('1.0.0', '1'), 0);
        assert.equal(compare('1.0', '1.4.1'), -1);
    });

    it('should compare pre-release versions', function () {
        assert.equal(compare('1.0.0-alpha.1', '1.0.0-alpha'), 1);
        assert.equal(compare('1.0.0-alpha', '1.0.0-alpha'), 0);
        assert.equal(compare('1.0.0-alpha', '1.0.0-alpha.beta'), -1);
        assert.equal(compare('1.0.0-alpha', '1.0.0-beta'), -1);
    });

    it('should give precendece to normal versions over pre-release', function () {
        assert.equal(compare('1.0.0', '1.0.0-alpha'), 1);
        assert.equal(compare('1.0.0-beta', '1'), -1);
    });

    it('should ignore build metadata', function () {
        assert.equal(compare('1.4.0-build.3928', '1.4.0-build.3928+sha.a8d9d4f'), 0);
        assert.equal(compare('1.4.0-build.3928+sha.b8dbdb0', '1.4.0-build.3928+sha.a8d9d4f'), 0);
    });

    it('should sort versions', function () {
        var versions = [
            '1.2.3',
            '4.11.6',
            '4.2.0',
            '1.5.19',
            '1.5.5',
            '4.1.3',
            '2.3.1',
            '10.5.5',
            '11.3.0'
        ];

        assert.deepEqual(versions.sort(compare), [
            '1.2.3',
            '1.5.5',
            '1.5.19',
            '2.3.1',
            '4.1.3',
            '4.2.0',
            '4.11.6',
            '10.5.5',
            '11.3.0'
        ]);
    });
});