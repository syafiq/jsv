function closeThisModal(modal_ID = false) {
    if (modal_ID != '') {
        window.$('#' + modal_ID).modal('toggle');
    }
}