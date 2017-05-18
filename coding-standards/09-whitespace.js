(function () {
    'use strict';

    // * Use soft tabs (space character) set to 4 spaces.

    // good
    var foo = function () {
        var name;
    };

    // bad
    // var bar = function () {
    //     var name;
    // };

    // bad
    // var baz = function () {
    //     var name;
    // };

    // * Place 1 space before the leading brace.

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

    /*
     Place 1 space before the opening parenthesis in control statements (if, while etc.).
     Place no space between the argument list and the function name in function calls and declarations.
     */

    var isJedi = false;

    // good
    if (isJedi) {
        // ...
    }

    // bad
    // if(isJedi) {
    //   // ...
    // }

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

    // * Set off operators with spaces.

    var varX = 7;
    // good
    var varY = varX + 5;
    // bad
    // var z=x+5;

    /*
     Use indentation when making long method chains (more than 2 method chains).
     Use a leading dot, which emphasizes that the line is a method call, not a new statement.
     */

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

    // * Leave a blank line after blocks and before the next statement.

    var condition = false;

    // good
    var getIntA = function () {
        if (condition) {
            return 1;
        }

        return 2;
    };

    // bad
    // var getIntB = function () {
    //     if (condition) {
    //         return 1;
    //     }
    //     return 2;
    // };

    // * Do not pad your blocks with blank lines.

    // good
    var barA = function () {
        getIntA();
    };

    // good
    if (condition) {
        getIntA();
    } else {
        getIntA();
    }

    // bad
    // var barB = function () {
    //
    //     getIntA();
    //
    // };

    // also bad
    // if (condition) {
    //
    //     getIntA();
    // } else {
    //     getIntA();
    //
    // }

    // * Do not add spaces inside parentheses.

    // good
    var barC = function (condition) {
        return condition;
    };

    // bad
    // var barD = function ( condition ) {
    //   return condition;
    // };

    // good
    if (condition) {
        getIntA();
    }

    // bad
    // if ( condition ) {
    //     getIntA();
    // }

    // * Do not add spaces inside brackets.

    // good
    var fooA = [1, 2, [[3]], [{foo: 'bar'}], 4];
    getIntA(fooA[0]);

    // bad
    // var fooB = [ 1, 2, [ [3] ], [ {foo: 'bar'} ], 4 ];
    // getIntA(fooB[ 0 ]);

    // FIXME: what to do in cases [[ 'foo' ]] and  [{'foo': 'bar'}] ?

    // * Do not add spaces inside curly braces.

    // good
    var bazA = {clark: 'kent'};

    // bad
    // var bazB = { clark: 'kent' };

    // * Avoid having lines of code that are longer than 120 characters (including whitespace).

    // * Multiple empty lines disallowed

    // * End files with a single newline character.
}());
