(function () {
    'use strict';

    var condition = false;

    var testFunction = function () {
        var functionBody = 'something';
    };

    var rules = {

        'Leave a blank line after blocks and before the next statement': function () {
            // good
            var getIntA = function () {
                if (condition) {
                    return '1';
                }

                return '2';
            };

            // bad
            // var getIntB = function () {
            //     if (condition) {
            //         return 1;
            //     }
            //     return 2;
            // };
        },

        'Do not pad your blocks with blank lines': function () {
            // good
            var barA = function () {
                testFunction();
            };

            // good
            if (condition) {
                testFunction();
            } else {
                testFunction();
            }

            // bad
            // var barB = function () {
            //
            //     getIntA();
            //
            // };

            // also bad
            // if (condition) {
            //
            //     getIntA();
            // } else {
            //     getIntA();
            //
            // }
        },

        'Do not add spaces inside parentheses': function () {
            // good
            var barC = function (parameter) {
                return parameter;
            };

            // bad
            // var barD = function ( condition ) {
            //     return condition;
            // };

            // good
            if (condition) {
                testFunction();
            }

            // bad
            // if ( condition ) {
            //     getIntA();
            // }
        },

        'Do not add spaces inside brackets': function () {
            // good
            var fooA = ['1', '2', [['3']], [{foo: 'bar'}], '4'];
            testFunction(fooA['0']);

            // bad
            // var fooB = [ 1, 2, [ [3] ], [ {foo: 'bar'} ], 4 ];
            // getIntA(fooB[ 0 ]);

            // FIXME: what to do in cases [[ 'foo' ]] and  [{'foo': 'bar'}] ?
        },

        'Do not add spaces inside curly braces': function () {
            // good
            var bazA = {clark: 'kent'};

            // bad
            // var bazB = { clark: 'kent' };
        },

        'Maximum depth that blocks can be nested is 3': function () {
            var isTrue = false;

            if (isTrue) {
                if (isTrue) {
                    if (isTrue) {
                        // Bellow block is nested too deeply
                        // if (isTrue) {
                        //     isTrue = false;
                        // }
                        isTrue = false;
                    }
                }
            }
        },

        'Others': function () {
            /*
             Multiple empty lines disallowed

             End files with a single newline character
             */
        }
    };
}());
