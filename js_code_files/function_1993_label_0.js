pimcore.helpers.getStringWithoutControlChars = function (text) {
    return text.replace(/[<>"'`!?/\\%$(){};,:|=]/gi, '');
};