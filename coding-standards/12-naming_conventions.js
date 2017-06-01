(function () {
    'use strict';

    var rules = {

        'Avoid short names - min 2 characters. Be descriptive with your naming': function () {
            // good
            var query = function () {
                // ...
            };

            // bad
            // var q = function () {
            //     // ...
            // };
        },

        'Use camelCase when naming objects, functions, and instances': function () {
            // good
            var thisIsMyObject = {};

            // // bad
            // var OBJEcttsssss = {};
            // var this_is_my_object = {};
        },

        'Do not use trailing or leading underscores': function () {
            var person = {};

            // good
            person.firstName = 'Panda';

            // bad
            // person.__firstName__ = 'Panda';
            // person.firstName_ = 'Panda';
            // person._firstName = 'Panda';
        },

        'Do not save references to this': function () {
            var logger = {
                log: function (data) {
                    var functionBody = 'something';
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
        },

        'Prefix jQuery object variables with a $': function () {
            var $ = function () {
                var functionBody = 'something';
            };

            // good
            var $sidebarA = $('.sidebarA');

            // bad
            var sidebarB = $('.sidebarB');
        }
    };
}());
