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

            // bad
            object.hasOwnProperty(key);

            // good
            Object.prototype.hasOwnProperty.call(object, key);

            // best
            var has = Object.prototype.hasOwnProperty;
        },

        'ARRAYS - Use Array#push instead of direct assignment to add items to an array': function () {
            var someStack = [];

            // bad
            someStack[someStack.length] = 'abracadabra';

            // good
            someStack.push('abracadabra');
        }
    };
}());
