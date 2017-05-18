(function () {
    'use strict';

    // * Strings:

    var match = {
        reviewScore: []
    };

    // good
    var totalScoreA = String(match.reviewScore);

    // bad
    // var totalScoreB = match.reviewScore + ''; // invokes this.reviewScore.valueOf()

    // bad
    // var totalScoreC = match.reviewScore.toString(); // isn't guaranteed to return a string

    // * Numbers: Use Number for type casting and parseInt always with a radix for parsing strings.

    var inputValue = '4';

    // good
    var valA = Number(inputValue);
    var valB = parseInt(inputValue, 10);

    // bad
    // var valC = new Number(inputValue);
    // var valD = +inputValue;
    // var valE = inputValue >> 0;
    // var valG = parseInt(inputValue);

    // * Booleans:

    var age = 0;

    // good
    var hasAgeA = Boolean(age);

    // best
    var hasAgeB = !!age;

    // bad
    // var hasAgeC = new Boolean(age);
}());
