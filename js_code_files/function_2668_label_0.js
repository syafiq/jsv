(function capture_directArgumentsCallee(param) {
    try {
        argumentsp = arguments;
    } catch (e) {
    }
    let f = () => {
        return param;
    };
    return f;
})();