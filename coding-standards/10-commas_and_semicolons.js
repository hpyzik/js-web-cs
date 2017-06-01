(function () {
    'use strict';

    var rules = {

        'Avoid leading commas': function () {
            // good
            var storyA = [
                'x',
                'y',
                'z'
            ];

            // bad
            // var storyB = [
            //     'x'
            //     , 'y'
            //     , 'z'
            // ];
        },

        'Avoid trailing commas': function () {
            // good
            var heroB = {
                firstName: 'Dana',
                lastName: 'Scully'
            };

            var heroeB = [
                'Batman',
                'Superman'
            ];

            // bad
            // var heroA = {
            //     firstName: 'Dana',
            //     lastName: 'Scully',
            // };
            //
            // var heroesA = [
            //     'Batman',
            //     'Superman',
            // ];

            // good
            var createHeroA = function (
                firstName, lastName
            ) {
                // does nothing
            };

            // bad
            // var createHeroB = function (
            //     firstName,
            //     lastName,
            // ) {
            //     // does nothing
            // }

            // good
            createHeroA(
                'firstName', 'lastName'
            );

            // bad
            // createHeroB(
            //     'firstName',
            //     'lastName',
            // );
        },

        'Use semicolons': function () {
            // good
            (function () {
                var name = 'Skywalker';

                return name;
            }());

            // bad
            // (function () {
            //     var name = 'Skywalker'
            //
            //     return name
            // }())
        }
    };
}());
