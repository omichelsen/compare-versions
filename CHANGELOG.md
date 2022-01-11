# Changelog

## [4.1.3](https://github.com/omichelsen/compare-versions/releases/tag/v4.1.3) - 2022-01-11
- Export CJS style in ESM for cross compatibility.

## [4.1.2](https://github.com/omichelsen/compare-versions/releases/tag/v4.1.2) - 2021-12-09
- Do not allow leading comparators in `validate()`.

## [4.1.1](https://github.com/omichelsen/compare-versions/releases/tag/v4.1.1) - 2021-11-12
- Remove optional chaining operator.

## [4.1.0](https://github.com/omichelsen/compare-versions/releases/tag/v4.1.0) - 2021-11-12
- Add `satisfies()` function to test for range match.

## [4.0.2](https://github.com/omichelsen/compare-versions/releases/tag/v4.0.2) - 2021-11-12
- Fix wildcard comparisons.

## [4.0.1](https://github.com/omichelsen/compare-versions/releases/tag/v4.0.1) - 2021-11-01
- Remove `{ "type": "module" }` from package.json and set `{ "sideEffects": false }`.

## [4.0.0](https://github.com/omichelsen/compare-versions/releases/tag/v4.0.0) - 2021-10-30
- Add new ESM version in addition to the original CJS version.
- Refactor ESM version to improve performance and reduce lines of code.
- No breaking API changes but releasing as a major version bump to signal the new ESM code will be used by compatible bundlers like webpack and parcel.

## [3.6.0](https://github.com/omichelsen/compare-versions/releases/tag/v3.6.0) - 2020-02-13
- Add `validate()` function for checking whether a version number is semver-compliant.

## [3.5.1](https://github.com/omichelsen/compare-versions/releases/tag/v3.5.1) - 2019-07-31
- Refactor map compare with less code.

## [3.5.0](https://github.com/omichelsen/compare-versions/releases/tag/v3.5.0) - 2019-06-22
- Add api returning true or false given a comparison operator.

## [3.4.0](https://github.com/omichelsen/compare-versions/releases/tag/v3.4.0) - 2018-08-30
- Show rejected version in error message.

## [3.3.1](https://github.com/omichelsen/compare-versions/releases/tag/v3.3.1) - 2018-08-18
- Fix TypeScript export declaration.

## [3.3.0](https://github.com/omichelsen/compare-versions/releases/tag/v3.3.0) - 2018-06-10
- Add TypeScript declarations.

## [3.2.1](https://github.com/omichelsen/compare-versions/releases/tag/v3.2.1) - 2018-05-14
- Fix rare bug in handling optional metadata.

## [3.2.0](https://github.com/omichelsen/compare-versions/releases/tag/v3.2.0) - 2018-05-13
- Support Chromium version numbers.

## [3.1.0](https://github.com/omichelsen/compare-versions/releases/tag/v3.1.0) - 2017-09-25
- Ignore leading zero in numbers.

## [3.0.1](https://github.com/omichelsen/compare-versions/releases/tag/v3.0.1) - 2017-04-01
- Fix for leading 'v'.

## [3.0.0](https://github.com/omichelsen/compare-versions/releases/tag/v3.0.0) - 2016-08-08
- Validate input data.

## [2.0.2](https://github.com/omichelsen/compare-versions/releases/tag/v2.0.2) - 2016-06-06
- Handle numbers in pre-release versions.

## [2.0.1](https://github.com/omichelsen/compare-versions/releases/tag/v2.0.1) - 2015-09-13
- Fix for versions with <3 digits.

## [2.0.0](https://github.com/omichelsen/compare-versions/releases/tag/v2.0.0) - 2015-09-07
- Change global window accessor from returnExports to compareVersions.

## [1.1.2](https://github.com/omichelsen/compare-versions/releases/tag/v1.1.2) - 2015-05-03
- Move patch check outside of the for loop.

## [1.1.1](https://github.com/omichelsen/compare-versions/releases/tag/v1.1.1) - 2015-05-03
- Add a base 10 radix.

## [1.1.0](https://github.com/omichelsen/compare-versions/releases/tag/v1.1.0) - 2015-03-18
- Added support for semver pre-release and metadata syntax.

## [1.0.0](https://github.com/omichelsen/compare-versions/releases/tag/v1.0.0) - 2015-03-18
- Initial release.
