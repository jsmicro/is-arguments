const $ = require('../main');

const test = require('jsmicro-test');

// Call function to give arguments
StartTest('first', 2, ['thrid']);

function StartTest() {
    // Run the isArguments() Test.
    test($.isArguments)
        .accept(test.args(arguments))
        .reject([])
        .reject('Test')
        .reject({})
        .reject(true)
        .reject(false)
        .reject(arguments)
        .queue(true);

    // Run the isNotArguments() Test.
    test(isNotArguments)
        .accept(10)
        .accept([])
        .accept('Test')
        .accept({})
        .accept(true)
        .accept(false)
        .accept(arguments)
        .reject(test.args(arguments))
        .queue(true);
}
