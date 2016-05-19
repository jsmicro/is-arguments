'use strict';

if (!global.hasOwnProperty('isArguments')) global.isArguments = isArguments;
if (!global.hasOwnProperty('isNotArguments')) global.isNotArguments = isNotArguments;

/**
 * Check does the given javascript object is a Arguments.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isArguments(object) {
    return toString.call(object) === '[object Arguments]';
}

/**
 * Check does the given javascript object is not a Arguments.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotArguments(object) {
    return !isArguments(object);
}

module.exports = {isArguments, isNotArguments};
