(function () {
    'use strict';

    var rules = {

        'Use brace for all control statements': function () {
            var test = true;

            // good
            if (test) {
                test = false;
            }

            // bad
            // if (test)
            //     test = false;

            // bad
            // if (test) test = false;
        },

        'If you are using multi-line blocks with if and else...': function () {
            /*
             If you are using multi-line blocks with if and else
             put else on the same line as your if block\'s closing brace
             */
            var test = true;
            // good
            if (test) {
                // ...
            } else {
                // ...
            }

            // bad
            // if (test) {
            //     // ...
            // }
            // else {
            //     // ...
            // }
        }
    };
}());
