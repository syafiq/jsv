(function passignArgumentsToAnotherFunction_indirectArgumentsCallee(param) {
    try {
        funcp = calleeIndirectly(arguments);
    } catch (e) {
    }
    let f = () => {
        return param;
    };
    return f;
})();