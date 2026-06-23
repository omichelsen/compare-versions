import { compareSegments, validateAndParse } from './utils.js';

/**
 * Compare [semver](https://semver.org/) version strings to find greater, equal or lesser.
 * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
 * @param v1 - First version to compare
 * @param v2 - Second version to compare
 * @returns Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
 */
export const compareVersions = (v1: string, v2: string) => {
  // validate input and split into segments
  const n1 = validateAndParse(v1);
  const n2 = validateAndParse(v2);

  // pop off the patch
  const p1 = n1.pop();
  const p2 = n2.pop();

  // validate numbers
  const r = compareSegments(n1, n2);
  if (r !== 0) return r;

  // validate pre-release
  if (p1 && p2) {
    const s1 = p1.split('.');
    const s2 = p2.split('.');
    // SemVer 2.0.0 section 11.4.4: a larger set of pre-release fields has a
    // higher precedence than a smaller set, if all of the preceding
    // identifiers are equal.
    for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
      const c = compareSegments([s1[i]], [s2[i]]);
      if (c !== 0) return c;
    }
    return Math.sign(s1.length - s2.length);
  } else if (p1 || p2) {
    return p1 ? -1 : 1;
  }

  return 0;
};
