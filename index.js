(function (root, factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.returnExports = factory();
  }
}(this, function () {

    return function compareVersions(v1, v2) {
        var s1 = v1.split('.');
        var s2 = v2.split('.');
        if (s1.length < s2.length) {
            for (var i = s1.length; i < s2.length; i++) {
                s1[i] = '0';
            }
        }
        if (s2.length < s1.length) {
            for (var j = s2.length; j < s1.length; j++) {
                s2[j] = '0';
            }
        }
        for (var k = 0; k < s1.length; ++k) {
            if (Number(s1[k]) > Number(s2[k])) {
                return 1;
            }
            if (Number(s1[k]) < Number(s2[k])) {
                return -1;
            }
        }
        return 0;
    }

}));
