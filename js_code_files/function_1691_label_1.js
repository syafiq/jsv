    function checkInput() {
        var child = pasteCatcher.childNodes[0];

        if (child) {
            // If the user pastes an image, the src attribute
            // will represent the image as a base64 encoded string.
            if (child.tagName === 'IMG') {
                createImage(child.src);
            }
        }

        pasteCatcher.innerHTML = '';
    }