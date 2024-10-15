                            text: t("update_available"),
                            iconCls: "pimcore_icon_reload",
                            handler: function () {
                                var html = '<div class="pimcore_about_window" xmlns="http://www.w3.org/1999/html">';
                                html += '<h2 style="text-decoration: underline">New Version Available!</h2>';
                                html += '<br><b>Your Version: ' + pimcore.settings.version + '</b>';
                                html += '<br><b style="color: darkgreen;">New Version: ' + data.latestVersion + '</b>';
                                html += '<h3 style="color: darkred">Please update as soon as possible!</h3>';
                                html += '</div>';

                                var win = new Ext.Window({
                                    title: "New Version Available!",
                                    width: 500,
                                    height: 220,
                                    bodyStyle: "padding: 10px;",
                                    modal: true,
                                    html: html
                                });
                                win.show();
                            }
                        });
                    }
                }

                if (data.pushStatistics) {
                    var request = new XMLHttpRequest();
                    request.open('GET', Routing.generate('pimcore_admin_index_statistics'));

                    request.onload = function () {
                        if (this.status >= 200 && this.status < 400) {
                            var res = Ext.decode(this.response);

                            var request = new XMLHttpRequest();
                            request.open('POST', "https://liveupdate.pimcore.org/statistics");

                            var data = new FormData();
                            data.append('data', encodeURIComponent(JSON.stringify(res)));

                            request.send(data);
                        }
                    };
                    request.send(data);
                }
            }
        };