                    handler: function (grid, rowIndex) {
                        var data = grid.getStore().getAt(rowIndex);
                        if (!data.data.writeable) {
                            return;
                        }

                        const decodedName = Ext.util.Format.htmlDecode(data.data.name);

                        pimcore.helpers.deleteConfirm(
                            t('staticroute'),
                            Ext.util.Format.htmlEncode(decodedName),
                            function () {
                                grid.getStore().removeAt(rowIndex);
                            }.bind(this)
                        );
                    }.bind(this)