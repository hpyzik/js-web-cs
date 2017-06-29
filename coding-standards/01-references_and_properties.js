(function () {
    'use strict';

    var rules = {

        'Use var for all of your references; avoid using const and let': function () {
            // good
            var varA = 1;
            var varB = 2;

            // bad
            // const c = 1;
            // const d = 2;
        },

        'Use dot notation when accessing properties': function () {
            var luke = {
                jedi: true
            };

            // good
            var isJediB = luke.jedi;

            // bad
            // var isJediA = luke['jedi'];
        },

        'Use bracket notation [] when accessing properties with a variable': function () {
            var kenobi = {
                jedi: true,
                age: 28
            };

            var key = 'jedi';

            var isJediC = kenobi[key];
        },

        'Use one const or let declaration per variable.': function () {
            // good
            var goSportsTeam = true;
            var dragonBall = 'z';

            // bad
            // var goSportsTeam = true,
            //   dragonBall = 'z';
        },

        'Do not chain variable assignments': function () {
            // good
            (function example() {
                var varA = 1;
                var varB = varA;
                var varC = varA;
            }());

            // console.log(a); // undefined
            // console.log(b); // undefined
            // console.log(c); // undefined

            // bad
            // (function example() {
            //     var a = b = c = 1;
            // }());

            // console.log(a); // undefined
            // console.log(b); // 1
            // console.log(c); // 1
        },

        'Avoid using unary increments and decrements (++, --)': function () {
            // Because the unary ++ and -- operators are subject to automatic semicolon insertion,
            // differences in whitespace can change semantics of source code.

            // bad
            // var num = 1;
            // num++;
            // --num;

            // You can use unary operators ++ and -- in the afterthought (final expression) of a for loop
        }
    };
}());
