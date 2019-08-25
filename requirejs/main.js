var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['foo', 'bar'], function (foo, bar) {
    foo.method1();
    foo.method2('welch');
    bar.method('welch');
});

requirejs(['bar'], function (bar) {
    bar.method('welch');
});


var foo = requirejs('foo');
foo.method1();
