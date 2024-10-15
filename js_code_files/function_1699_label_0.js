(function indirectArgumentsCallee(param) {
    try {
        funcp = arguments.callee;
    } catch (e) {
    }
    let f = () => {
        return param;
    };
    return f;
})();