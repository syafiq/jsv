    function initialize() {
        destroy();

        if (! window.Clipboard) {
            // Insert the content editable at the top to avoid scrolling down in the board view
            pasteCatcher = document.createElement('template');
            pasteCatcher.id = 'screenshot-pastezone';
            pasteCatcher.contentEditable = true;
            pasteCatcher.style.opacity = 0;
            pasteCatcher.style.position = 'fixed';
            pasteCatcher.style.top = 0;
            pasteCatcher.style.right = 0;
            pasteCatcher.style.width = 0;
            document.body.insertBefore(pasteCatcher, document.body.firstChild);

            pasteCatcher.focus();

            // Set the focus when clicked anywhere in the document
            document.addEventListener('click', setFocus);

            // Set the focus when clicked in screenshot dropzone
            document.getElementById('screenshot-zone').addEventListener('click', setFocus);
        }

        window.addEventListener('paste', onPaste, false);
    }