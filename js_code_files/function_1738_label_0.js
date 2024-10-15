                {text: t("time"), width: 100, sortable: true, dataIndex: 'time', editor: new Ext.form.TimeField({
                        format: "H:i",
                        listeners: {
                            focus : function(component) {
                                component.setValue(Ext.util.Format.htmlDecode(component.value));
                            },
                            blur: function(component){
                                component.setValue(Ext.util.Format.htmlEncode(component.value));
                            }
                        }
                    })