(function () {
    'use strict';

    // * Use === and !== over == and !=.

    // good
    var varX = 12;
    if (varX === 12) {
        // ...
    }

    // bad
    // var y = 12
    // if (y == 12) {
    //     // ...
    // }

    // * Use shortcuts for booleans, but explicit comparisons for strings and numbers.

    var isValid = true;
    // good
    if (isValid) {
        // ...
    }
    // bad
    if (isValid === true) {
        // ...
    }

    // good
    if (name !== '') {
        // ...
    }
    // bad
    if (name) {
        // ...
    }

    var collection = [];
    // good
    if (collection.length > 0) {
        // ...
    }
    // bad
    if (collection.length) {
        // ...
    }

    // * Ternaries should not be nested and generally be single line expressions.

    var maybe1;
    var maybe2;
    var value1;
    var value2;

    // bad
    // var fooA = maybe1 > maybe2
    //   ? 'bar'
    //   : value1 > value2 ? 'baz' : null;

    // better
    var maybeNull = value1 > value2 ? 'baz' : null;
    var fooB = maybe1 > maybe2
        ? 'bar'
        : maybeNull;

    // best
    var fooC = maybe1 > maybe2 ? 'bar' : maybeNull;

    // * Avoid unneeded ternary statements.

    var varA;
    var varB;
    var varC;

    // good
    var fooX = varA || varB;
    var barX = !!varC;
    var bazX = !varC;

    // bad
    // var fooY = a ? a : b;
    // var barY = c ? true : false;
    // var bazY = c ? false : true;
}());
