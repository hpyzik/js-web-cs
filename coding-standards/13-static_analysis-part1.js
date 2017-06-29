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
        },

        'Maximum depth that callbacks can be nested is 3': function () {
            var foo1 = function () {
                // Do something
            };
            var foo2 = foo1;
            var foo3 = foo1;
            var foo4 = foo1;

            foo1(function () {
                foo2(function () {
                    foo3(function () {
                        // Remove bellow comment to make nesting too deep
                        // foo4(function () {
                        //     // Do something
                        // });
                    });
                });
            });
        },

        'Maximum number of parameters in function definitions is 4': function () {
            var foo1 = function (param1, param2, param3, param4) {
                // Do something
            };

            // below function has too many arguments
            // var foo2 = function (param1, param2, param3, param4, param5) {
            //     // Do something
            // };
        }
    };
}());
