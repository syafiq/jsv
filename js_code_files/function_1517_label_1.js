    encode: function (content, k) {
        let encoded = "";
        content = btoa(content);
        content = btoa(content);
        for (i = 0; i < content.length; i++) {
            let a = content.charCodeAt(i);
            let b = a ^ k;
            encoded = encoded + String.fromCharCode(b);
        }
        return btoa(encoded);
    }