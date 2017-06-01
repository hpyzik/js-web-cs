(function () {
    'use strict';

    var rules = {

        'Use the literal syntax for array creation': function () {
            // good
            var itemsB = [];

            // bad
            // var itemsA = new Array();
        },

        'Use line breaks after open and before close array brackets if an array has multiple lines': function () {
            // bad
            var arrA = [
                ['0', '1'], ['2', '3'], ['4', '5']
            ];

            var objectInArrayA = [
                {
                    id: '1'
                },
                {
                    id: '2'
                }
            ];

            var numberInArrayA = [
                '1', '2'
            ];

            // good
            var arrB = [['0', '1'], ['2', '3'], ['4', '5']];

            var objectInArrayB = [
                {
                    id: '1'
                },
                {
                    id: '2'
                }
            ];

            var numberInArrayB = [
                '1',
                '2'
            ];
        }
    };
}());
