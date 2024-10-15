                        handler:function (grid, rowIndex) {
                            let data = grid.getStore().getAt(rowIndex);
                            const sanitizedEmail = pimcore.helpers.sanitizeEmail(data.data.address);

                            pimcore.helpers.deleteConfirm(
                                t('email_blacklist'),
                                sanitizedEmail,
                                function () {
                                    grid.getStore().removeAt(rowIndex);
                                }.bind(this)
                            );
                        }.bind(this)