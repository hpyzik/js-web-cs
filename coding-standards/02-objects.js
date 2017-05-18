(function () {
    'use strict';

    // * Use the literal syntax for object creation. eslint: no-new-object

    // good
    var itemB = {};

    // bad
    // var itemA = new Object();

    // * Don't use computed property names when creating objects with dynamic property names

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

    // * Don't use object method shorthand.

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

    // * Don't use property value shorthand.

    var lukeSkywalker = 'Luke Skywalker';

    // good
    var objC = {
        lukeSkywalker: lukeSkywalker
    };

    // bad
    // var objD = {
    //     lukeSkywalker
    // };

    // * Do not mix quoted and unquoted keys.

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
}());
