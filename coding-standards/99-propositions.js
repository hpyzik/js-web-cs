(function () {
    'use strict';

    var rules = {

        'OBJECTS - Do not call Object.prototype methods directly...': function () {
            /*
             Do not call Object.prototype methods directly
             such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf
             */

            var key = 'key';
            var object = Object.create(null);

            // best
            var has = Object.prototype.hasOwnProperty;

            // good
            Object.prototype.hasOwnProperty.call(object, key);

            // bad
            object.hasOwnProperty(key);
        },

        'ARRAYS - Use Array#push instead of direct assignment to add items to an array': function () {
            var someStack = [];

            // bad
            someStack[ someStack.length ] = 'abracadabra';

            // good
            someStack.push('abracadabra');
        },

        'Disallow specific global variables': function () {
            // eslint no-restricted-globals: ["error", "event"]

            // bad
            // function onClick() {
            //     console.log(event);
            // }
        },

        'Require named function expressions': function () {
            /*
             If you provide the optional name for a function expression
             then you will get the name of the function expression in the stack trace
             eslint func-names: ["error", "always"]
             */

            // good
            var foo = function foo() {
                // function body
            };

            (function bar() {
                // function body
            }());

            // bad
            // var foo = function () {
            //     // function body
            // };
            //
            // (function () {
            //     // function body
            // }());
        },

        'Enforce spaces inside of computed properties ': function () {
            /*
             eslint computed-property-spacing: ["error", "always"]
             */

            // good
            // var obj = {};
            // var foo = 'key';
            // var variable;
            //
            // variable = obj[ foo ];
            // variable = obj[ 'foo' ];
            // variable = {x: [ 'b' ], y : 'a'};
            // variable = obj[ foo[ bar ] ];

            // bad
            // obj[foo]
            // var x = {[b]: a}
            // obj[ foo]
            // obj['foo' ]
            // obj[foo[ bar ]]
            // var x = {[ b]: a}
        },

        'Yoda conditions': function () {
            var color = 'blue';
            var isRed = false;

            // good
            if ('red' === color) {
                isRed = true;
            }

            // bad
            if (color === 'red') {
                isRed = true;
            }
        }
    };
}());
