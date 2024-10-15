                    handler: function (grid, rowIndex) {
                        var data = grid.getStore().getAt(rowIndex);
                        if (!data.data.writeable) {
                            return;
                        }

                        pimcore.helpers.deleteConfirm(t('staticroute'), data.data.name, function () {
                            grid.getStore().removeAt(rowIndex);
                        }.bind(this));
                    }.bind(this)