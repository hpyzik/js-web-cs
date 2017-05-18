(function () {
    'use strict';

    // * Use brace for all control statements
    var test = true;

    // good
    if (test) {
        test = false;
    }

    // bad
    // if (test)
    //   test = false;

    // bad
    // if (test) test = false;

    // good
    var bar = function bar() {
        return false;
    };

    // bad
    // var foo = function foo() {
    //   return false;
    // };

    // * If you're using multi-line blocks with if and else, put else on the same line as your if block's closing brace.

    // good
    if (test) {
        // ...
    } else {
        // ...
    }

    // bad
    // if (test) {
    //   // ...
    // }
    // else {
    //   // ...
    // }
}());
