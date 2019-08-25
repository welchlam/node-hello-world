define(['foo'], function (foo) {
    return {
        method: function (name) {
            foo.method1();
            foo.method2(name);
        }
    }
});