const render = ($) => {
    $('#jqcontainer').html('Hello, render with jQuery');
    return Promise.resolve();
};

((global) => {
    global['jqApp'] = {
        bootstrap: () => {
            console.log('jqApp bootstrap');
            return Promise.resolve();
        },
        mount: () => {
            console.log('jqApp mount');
            return render($);
        },
        unmount: () => {
            console.log('jqApp unmount');
            return Promise.resolve();
        },
    };
})(window);
