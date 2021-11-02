import assert from 'assert';
import compareVersions from '../index.mjs';

describe('sort versions', function () {
  it('should sort versions', function () {
    const versions = [
      '1.2.3',
      '4.11.6',
      '4.2.0',
      '1.5.19',
      '1.5.5',
      '4.1.3',
      '2.3.1',
      '10.5.5',
      '11.3.0',
    ];

    assert.deepEqual(versions.sort(compareVersions), [
      '1.2.3',
      '1.5.5',
      '1.5.19',
      '2.3.1',
      '4.1.3',
      '4.2.0',
      '4.11.6',
      '10.5.5',
      '11.3.0',
    ]);
  });

  it('should sort different digits', function () {
    const versions = ['1.0', '1.0.0', '1.0.1'];

    assert.deepEqual(versions.sort(compareVersions), ['1.0', '1.0.0', '1.0.1']);
  });

  it('should sort pre-release', function () {
    const versions = ['1.0.0', '1.0.1', '1.0.1-gamma', '1.0.1-alpha'];

    assert.deepEqual(versions.sort(compareVersions), [
      '1.0.0',
      '1.0.1-alpha',
      '1.0.1-gamma',
      '1.0.1',
    ]);
  });
});
