                                    "change": function (el) {
                                        const sanitizedValue = pimcore.helpers.sanitizeUrlSlug(el.getValue());
                                        el.setValue(sanitizedValue);
                                    }.bind(this)