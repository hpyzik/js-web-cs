(function () {
    'use strict';

    // * Avoid short names - min 2 characters. Be descriptive with your naming.

    // good
    var query = function () {
        // ...
    };

    // bad
    // var q = function () {
    //     // ...
    // };

    // * Use camelCase when naming objects, functions, and instances.

    // good
    var thisIsMyObject = {};

    // // bad
    // var OBJEcttsssss = {};
    // var this_is_my_object = {};

    // * Do not use trailing or leading underscores.

    var person = {};

    // good
    person.firstName = 'Panda';

    // bad
    // person.__firstName__ = 'Panda';
    // person.firstName_ = 'Panda';
    // person._firstName = 'Panda';

    // * Don't save references to this

    var logger = {
        log: function (data) {
        }
    };

    // bad
    // var functionB = function () {
    //     var self = this;
    //
    //     return function () {
    //         logger.log(self);
    //     };
    // };

    // bad
    // var functionC = function () {
    //     var that = this;
    //
    //     return function () {
    //         logger.log(that);
    //     };
    // };

    // * Prefix jQuery object variables with a $

    var $ = function () {
    };

    // good
    var $sidebarA = $('.sidebarA');

    // bad
    var sidebarB = $('.sidebarB');
}());
