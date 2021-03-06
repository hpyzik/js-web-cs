(function () {
    'use strict';

    var rules = {

        'Use soft tabs (space character) set to 4 spaces': function () {
            // good
            var foo = function () {
                var name;
            };

            // bad
            // var bar = function () {
            //   var name;
            // };

            // bad
            // var baz = function () {
            //       var name;
            // };
        },

        'Place 1 space before the leading brace': function () {
            // good
            var testA = function () {
                // ...
            };

            // bad
            // var testB = function(){
            //     // ...
            // };

            var dog = {
                set: function () {
                    // ...
                }
            };

            // good
            dog.set(
                'attr', {
                    age: '1 year',
                    breed: 'Bernese Mountain Dog'
                }
            );

            // bad
            // dog.set('attr',{
            //     age: '1 year',
            //     breed: 'Bernese Mountain Dog'
            // });
        },

        'Place 1 space before the opening parenthesis in control statements (if, while etc.)': function () {
            /*
             Place no space between the argument list and the function name in function calls and declarations.
             */

            var isJedi = false;

            var cat = {
                bite: function () {
                    // ...
                }
            };

            // good
            var fightA = function fightA() {
                cat.bite();
            };

            // bad
            // var fightB = function fightB () {
            //     cat.bite ();
            // };

            // good
            if (isJedi) {
                // ...
            }

            // bad
            // if(isJedi) {
            //     // ...
            // }
        },

        'Set off operators with spaces': function () {
            var varX = 7;
            var varY = 5;
            // good
            var varZ = varX + varY;
            // bad
            // var z=x+5;
        },

        'When a statement is too long add line breaks before the operator': function () {
            var varA = 'foo';
            var varB = 'bar';
            var varC = 'baa';

            // good
            var varZ = varA
                + varB
                + varC;

            // bad
            // var varY = varA +
            //     varB +
            //     varC;
        },

        ' Use indentation when making long method chains (more than 2 method chains)': function () {
            // Use a leading dot, which emphasizes that the line is a method call, not a new statement.

            var jQuery = function () {
                // ...
            };

            // good
            jQuery('#items')
                .find('.selected')
                .highlight()
                .end()
                .find('.open')
                .updateCount();

            // bad
            // $('#items').find('.selected').highlight().end().find('.open').updateCount();

            // bad
            // $('#items').
            // find('.selected').
            // highlight().
            // end().
            // find('.open').
            // updateCount();
        }
    };
}());
