(function () {
    'use strict';

    var rules = {

        'Use single quotes for strings': function () {
            // good
            var nameA = 'Capt. Janeway';

            // bad
            // var nameB = "Capt. Janeway";

            // bad - template literals should contain interpolation or newlines
            // var nameC = `Capt. Janeway`;
        },

        'Strings that cause the line to go over 120 characters..': function () {
            /*
             Strings that cause the line to go over 120 characters
             should be written across multiple lines using string concatenation - plus operator at the end of line.
             */

            // bad
            var errorMessageA = 'This is a super long error that was thrown because '
                + 'of Batman. When you stop to think about how Batman had anything to do '
                + 'with this, you would get nowhere fast.';

            // bad
            // var errorMessageB = 'This is a super long error that was thrown because \
            // of Batman. When you stop to think about how Batman had anything to do \
            // with this, you would get nowhere \
            // fast.';
        }
    };
}());
