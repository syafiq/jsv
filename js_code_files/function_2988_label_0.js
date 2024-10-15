                    onChange: function(value) {
                        if(Ext.String.hasHtmlCharacters(value)) {
                            this.reset();
                        }
                    },