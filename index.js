(function() {
    'use strict';

    if (!window.hasOwnProperty('isArguments')) window.isArguments = isArguments;
    if (!window.hasOwnProperty('isNotArguments')) window.isNotArguments = isNotArguments;

    function isArguments(object) {
        return toString.call(object) === '[object Arguments]';
    }

    function isNotArguments(object) {
        return !isArguments(object);
    }
})();
