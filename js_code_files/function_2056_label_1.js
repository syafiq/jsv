                    handler: function (grid, rowIndex) {
                        let data = grid.getStore().getAt(rowIndex);
                        pimcore.helpers.deleteConfirm(t('document_type'), data.data.name, function () {
                            grid.getStore().removeAt(rowIndex);
                        }.bind(this));
                    }.bind(this)