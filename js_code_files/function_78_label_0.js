            validator: function(value) {
                if (value) {
                    if (!value.startsWith('/') || value.length < 2) {
                        return false;

                    }
                    value = value.substring(1);
                    value = value.replace(/\/$/, "");

                    var parts = value.split('/');
                    for (let i = 0; i < parts.length; i++) {
                        let part = parts[i];
                        if  (part.length == 0) {
                            return false;
                        }

                        sanitizedPart = part.replace(/[#\?\*\:\\\\<\>\|"%&@=;]/g, '-');
                        if (sanitizedPart != part) {
                            return t('url-slug-invalid-chars');
                        }
                    }
                }

                return true;

            }