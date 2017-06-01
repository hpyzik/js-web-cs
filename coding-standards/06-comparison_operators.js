(function () {
    'use strict';

    var rules = {

        'Use === and !== over == and !=': function () {
            // good
            var varX = 'sth';
            if (varX === 'sth') {
                // ...
            }

            // bad
            // var y = 12
            // if (y == 12) {
            //     // ...
            // }
        },

        'Use shortcuts for booleans, but explicit comparisons for strings and numbers': function () {
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

            var min = 0;
            var collection = [];
            // good
            if (collection.length > min) {
                // ...
            }
            // bad
            if (collection.length) {
                // ...
            }
        },

        'Ternaries should not be nested and generally be single line expressions': function () {
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
        },

        'Avoid unneeded ternary statements': function () {
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
        }
    };
}());
