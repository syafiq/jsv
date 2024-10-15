async function _alertFromGet(type) {
    if (urlParams.has(type)) {
        var msg = urlParams.get(type);
        var div = document.createElement("div");
        div.innerHTML = msg;
        var text = div.textContent || div.innerText || "";
        if (!empty(text)) {
            switch (type) {
                case 'error':
                    avideoAlertError(text);
                    break;
                case 'msg':
                    avideoAlertInfo(text);
                    break;
                case 'success':
                    avideoAlertSuccess(text);
                    break;
                case 'toast':
                    avideoToast(text);
                    break;
            }
            var url = removeGetParam(window.location.href, type);
            window.history.pushState({}, document.title, url);
        }
    }
}