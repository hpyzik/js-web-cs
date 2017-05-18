(function () {
    'use strict';

    // * Use named function expressions instead of function declarations.

    // good
    var fooC = function () {
    };

    // best
    var fooA = function bar() {
    };

    // bad
    // function fooB() {
    // }

    // * Wrap immediately invoked function expressions in parentheses.

    (function () {
        var varX = 7;
    }());

    // * Never declare a function in a non-function block (if, while, etc).

    // * Never use the Function constructor to create a new function.

    // bad
    // var add = new Function('a', 'b', 'return a + b');

    // still bad
    // var subtract = Function('a', 'b', 'return a - b');

    // * Spacing in a function signature.

    // bad
    // var f = function(){};
    // var g = function (){};
    // var h = function() {};
    // var j = function a () {};

    // good
    var functionX = function () {
    };
    var functionY = function functionY() {
    };

    // * Never mutate and reassign parameters.

    // good
    var function1 = function function1(obj) {
        var key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
    };

    // good
    var function2 = function function2(parameterA) {
        var varB = parameterA || 1;
    };

    // bad
    // var f3 = function f3(obj) {
    //     obj.key = 1;
    // };

    // bad
    // var f4 = function f4(a) {
    //     a = 1;
    // };

    /*
     Functions with multiline signatures, or invocations, should be indented like multiline list:
     with each item on a line by itself.
     */

    // good
    var foo1 = function foo1(
        bar,
        baz,
        quux
    ) {
    };

    // bad
    var foo2 = function foo2(
        bar,
        baz,
        quux
    ) {
    };

    // good
    foo1.log(
        functionX,
        functionY
    );

    // bad
    // console.log(foo,
    //     bar,
    //     baz);
}());
