(function () {
    'use strict';

    var rules = {

        'Limit cyclomatic complexity is 8': function () {
            // add one extra condition and this function has 9 cyclomatic complexity
            var isTrue = true;
            if (isTrue) {
                if (isTrue) {
                    isTrue = !isTrue;
                } else if (!isTrue) {
                    isTrue = !isTrue;
                }
                isTrue = !isTrue;
            } else if (!isTrue) {
                if (isTrue) {
                    isTrue = !isTrue;
                } else if (!isTrue) {
                    isTrue = !isTrue;
                }
                isTrue = !isTrue;
            } else if (isTrue) {
                isTrue = false;
            }
            // else if (isTrue) {
            //     isTrue = false;
            // }
        },

        'Maximum characters in one line code is 120': function () {
            // add one extra char to make this line too long, add one extra char to make this line too long, add one ext
        }
    };
}());
