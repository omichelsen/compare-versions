/**
 * Allowed arithmetic operators
 */
export type CompareOperator = '>' | '>=' | '=' | '<' | '<=' | '!=';

export const semver =
  /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

export const validateAndParse = (version: string) => {
  if (typeof version !== 'string') {
    throw new TypeError('Invalid argument expected string');
  }
  const match = version.match(semver);
  if (!match) {
    throw new Error(
      `Invalid argument not valid semver ('${version}' received)`
    );
  }
  match.shift();
  return match;
};

const isWildcard = (s: string) => s === '*' || s === 'x' || s === 'X';

const compareStrings = (a: string, b: string) => {
  if (isWildcard(a) || isWildcard(b)) return 0;
  // SemVer 2.0.0 section 11.4: identifiers made only of digits are compared
  // numerically, identifiers with letters or hyphens are compared lexically in
  // ASCII order, and a numeric identifier always has lower precedence than an
  // alphanumeric one. `parseInt` read a leading-digit identifier like `0a` as
  // the number 0, which both dropped that precedence rule and made `0a`, `0b`
  // and `0` compare equal.
  const aNum = /^\d+$/.test(a);
  const bNum = /^\d+$/.test(b);
  if (aNum && bNum) {
    const na = Number(a);
    const nb = Number(b);
    return na > nb ? 1 : na < nb ? -1 : 0;
  }
  if (aNum) return -1;
  if (bNum) return 1;
  return a > b ? 1 : a < b ? -1 : 0;
};

export const compareSegments = (
  a: string | string[] | RegExpMatchArray,
  b: string | string[] | RegExpMatchArray
) => {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const r = compareStrings(a[i] || '0', b[i] || '0');
    if (r !== 0) return r;
  }
  return 0;
};
