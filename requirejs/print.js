var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require
});

var bar = requirejs('bar');

function print() {
    bar.method('welch');
}

module.exports = print();
