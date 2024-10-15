                    handler: function (grid, rowIndex) {
                        let data = grid.getStore().getAt(rowIndex);
                        const decodedName = Ext.util.Format.htmlDecode(data.data.name);
                        
                        pimcore.helpers.deleteConfirm(
                            t('predefined_properties'),
                            Ext.util.Format.htmlEncode(decodedName),
                            function () {
                                grid.getStore().removeAt(rowIndex);
                            }.bind(this)
                        );
                    }.bind(this)