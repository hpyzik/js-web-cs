(function () {
    'use strict';

    var rules = {

        'Use named function expressions instead of function declarations': function () {
            // good
            var fooC = function () {
                var functionBody = 'something';
            };

            // best
            var fooA = function bar() {
                var functionBody = 'something';
            };

            // bad
            // function fooB() {
            // }
        },

        'Wrap immediately invoked function expressions in parentheses': function () {
            (function () {
                var varX = 7;
            }());
        },

        'Never declare a function in a non-function block (if, while, etc)': function () {
            // bad
            // var index = 10;
            // for (index; index; index--) {
            //     (function() { return index; })();
            // }
        },

        'Never use the Function constructor to create a new function': function () {
            // bad
            // var add = new Function('a', 'b', 'return a + b');

            // still bad
            // var subtract = Function('a', 'b', 'return a - b');
        },

        'Spacing in a function signature': function () {
            // bad
            // var f = function(){};
            // var g = function (){};
            // var h = function() {};
            // var j = function a () {};

            // good
            var functionX = function () {
                var functionBody = 'something';
            };
            var functionY = function functionY() {
                var functionBody = 'something';
            };
        },

        'Never mutate and reassign parameters': function () {
            // good
            var function1 = function function1(obj) {
                var key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : '1';
            };

            // good
            var function2 = function function2(parameterA) {
                var varB = parameterA || '1';
            };

            // bad
            // var f3 = function f3(obj) {
            //     obj.key = 1;
            // };

            // bad
            // var f4 = function f4(a) {
            //     a = 1;
            // };
        },

        'Functions with multiline signatures, or invocations, should...': function () {
            /*
             Functions with multiline signatures, or invocations, should be indented like multi-line list:
             with each item on a line by itself.
             */

            // good
            var foo1 = function foo1(
                bar,
                baz,
                quux
            ) {
                return bar || baz || quux;
            };

            // bad
            var foo2 = function foo2(
                bar,
                baz,
                quux
            ) {
                return bar || baz || quux;
            };

            // good
            foo1.log(
                foo1,
                foo2
            );

            // bad
            // console.log(foo1,
            //     foo2);
        }
    };
}());
