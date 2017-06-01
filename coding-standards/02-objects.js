(function () {
    'use strict';

    var rules = {

        'Use the literal syntax for object creation': function () {
            // good
            var itemB = {};

            // bad
            // var itemA = new Object();
        },

        'Do not use computed property names when creating objects with dynamic property names': function () {
            var getKey = function getKey(suffix) {
                return 'a key named ' + suffix;
            };

            // good
            var objA = {
                id: 5,
                name: 'San Francisco'
            };
            objA[getKey('enabled')] = true;

            // bad
            // var objB = {
            //     id: 5,
            //     name: 'San Francisco',
            //     [getKey('enabled')]: true
            // };
        },

        'Do not use object method shorthand': function () {
            // good
            var atom = {
                value: 1,

                addValue: function (value) {
                    return atom.value + value;
                }
            };

            // bad
            // var atomB = {
            //     value: 1,
            //
            //     addValue(value) {
            //         return atomB.value + value;
            //     },
            // };
        },

        'Do not use property value shorthand': function () {
            var lukeSkywalker = 'Luke Skywalker';

            // good
            var objC = {
                lukeSkywalker: lukeSkywalker
            };

            // bad
            // var objD = {
            //     lukeSkywalker
            // };
        },

        'Do not mix quoted and unquoted keys': function () {
            // good
            var goodA = {
                foo: 3,
                bar: 4
            };

            // good
            var goodB = {
                'foo': 3,
                'bar': 4,
                'data-blah': 5
            };

            // // bad
            // var bad = {
            //     foo: 3,
            //     bar: 4,
            //     'data-blah': 5
            // };
        }
    };
}());
