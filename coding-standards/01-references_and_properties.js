(function () {
    'use strict';

    // * Use var for all of your references; avoid using const and let.

    // good
    var varA = 1;
    var varB = 2;

    // bad
    // const c = 1;
    // const d = 2;

    // * Use dot notation when accessing properties.

    var luke = {
        jedi: true
    };

    // good
    var isJediB = luke.jedi;

    // bad
    // var isJediA = luke['jedi'];

    // * Use bracket notation [] when accessing properties with a variable.

    var kenobi = {
        jedi: true,
        age: 28
    };

    var key = 'jedi';

    var isJediC = kenobi[key];

    // * Use one const or let declaration per variable.

    // good
    var goSportsTeam = true;
    var dragonBall = 'z';

    // bad
    // var goSportsTeam = true,
    //   dragonBall = 'z';

    // * Don't chain variable assignments.

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
    //   var a = b = c = 1;
    // }());

    // console.log(a); // undefined
    // console.log(b); // 1
    // console.log(c); // 1

    // * Avoid using unary increments and decrements (++, --).
}());
