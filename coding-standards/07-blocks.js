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
