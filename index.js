/* global define */
(function (root, factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.compareVersions = factory();
    }
}(this, function () {

    var patchPattern = /-([\w-.]+)/;

    function split(v) {
        var temp = v.split('.');
        var arr = temp.splice(0, 2);
        arr.push(temp.join('.'));
        return arr;
    }

    return function compareVersions(v1, v2) {
        var s1 = split(v1);
        var s2 = split(v2);

        for (var i = 0; i < 3; i++) {
            var n1 = parseInt(s1[i] || 0, 10);
            var n2 = parseInt(s2[i] || 0, 10);

            if (n1 > n2) return 1;
            if (n2 > n1) return -1;
        }

        if ((s1[2] + s2[2] + '').indexOf('-') > -1) {
            var p1 = (patchPattern.exec(s1[2]) || [''])[0];
            var p2 = (patchPattern.exec(s2[2]) || [''])[0];

            if (p1 === '') return 1;
            if (p2 === '') return -1;
            if (p1 > p2) return 1;
            if (p2 > p1) return -1;
        }

        return 0;
    };

}));
