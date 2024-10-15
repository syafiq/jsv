    Component.getDefaultToolbar = function(obj) {

        var color = function(a,b,c) {
            if (! c.color) {
                var t = null;
                var colorPicker = Color(c, {
                    onchange: function(o, v) {
                        if (c.k === 'color') {
                            document.execCommand('foreColor', false, v);
                        } else {
                            document.execCommand('backColor', false, v);
                        }
                    }
                });
                c.color.open();
            }
        }

        var items = [];

        items.push({
            content: 'undo',
            onclick: function() {
                document.execCommand('undo');
            }
        });

        items.push({
            content: 'redo',
            onclick: function() {
                document.execCommand('redo');
            }
        });

        items.push({
            type: 'divisor'
        });

        if (obj.options.toolbarOnTop) {
            items.push({
                type: 'select',
                width: '140px',
                options: ['Default', 'Verdana', 'Arial', 'Courier New'],
                render: function (e) {
                    return '<span style="font-family:' + e + '">' + e + '</span>';
                },
                onchange: function (a,b,c,d,e) {
                    document.execCommand("fontName", false, d);
                }
            });

            items.push({
                type: 'select',
                content: 'format_size',
                options: ['x-small', 'small', 'medium', 'large', 'x-large'],
                render: function (e) {
                    return '<span style="font-size:' + e + '">' + e + '</span>';
                },
                onchange: function (a,b,c,d,e) {
                    //var html = `<span style="font-size: ${c}">${text}</span>`;
                    //document.execCommand('insertHtml', false, html);
                    document.execCommand("fontSize", false, parseInt(e)+1);
                    //var f = window.getSelection().anchorNode.parentNode
                    //f.removeAttribute("size");
                    //f.style.fontSize = d;
                }
            });

            items.push({
                type: 'select',
                options: ['format_align_left', 'format_align_center', 'format_align_right', 'format_align_justify'],
                render: function (e) {
                    return '<i class="material-icons">' + e + '</i>';
                },
                onchange: function (a,b,c,d,e) {
                    var options = ['JustifyLeft','justifyCenter','justifyRight','justifyFull'];
                    document.execCommand(options[e]);
                }
            });

            items.push({
                type: 'divisor'
            });

            items.push({
                content: 'format_color_text',
                k: 'color',
                onclick: color,
            });

            items.push({
                content: 'format_color_fill',
                k: 'background-color',
                onclick: color,
            });
        }

        items.push({
            content: 'format_bold',
            onclick: function(a,b,c) {
                document.execCommand('bold');

                if (document.queryCommandState("bold")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_italic',
            onclick: function(a,b,c) {
                document.execCommand('italic');

                if (document.queryCommandState("italic")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_underline',
            onclick: function(a,b,c) {
                document.execCommand('underline');

                if (document.queryCommandState("underline")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            type:'divisor'
        });

        items.push({
            content: 'format_list_bulleted',
            onclick: function(a,b,c) {
                document.execCommand('insertUnorderedList');

                if (document.queryCommandState("insertUnorderedList")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_list_numbered',
            onclick: function(a,b,c) {
                document.execCommand('insertOrderedList');

                if (document.queryCommandState("insertOrderedList")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_indent_increase',
            onclick: function(a,b,c) {
                document.execCommand('indent', true, null);

                if (document.queryCommandState("indent")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_indent_decrease',
            onclick: function() {
                document.execCommand('outdent');

                if (document.queryCommandState("outdent")) {
                    this.classList.add('selected');
                } else {
                    this.classList.remove('selected');
                }
            }
        });

        if (obj.options.toolbarOnTop) {
            items.push({
                type: 'divisor'
            });

            items.push({
                content: 'photo',
                onclick: function () {
                    obj.upload();
                }
            });

            items.push({
                type: 'select',
                content: 'table_view',
                columns: 10,
                right: true,
                options: [
                    '0x0', '1x0', '2x0', '3x0', '4x0', '5x0', '6x0', '7x0', '8x0', '9x0',
                    '0x1', '1x1', '2x1', '3x1', '4x1', '5x1', '6x1', '7x1', '8x1', '9x1',
                    '0x2', '1x2', '2x2', '3x2', '4x2', '5x2', '6x2', '7x2', '8x2', '9x2',
                    '0x3', '1x3', '2x3', '3x3', '4x3', '5x3', '6x3', '7x3', '8x3', '9x3',
                    '0x4', '1x4', '2x4', '3x4', '4x4', '5x4', '6x4', '7x4', '8x4', '9x4',
                    '0x5', '1x5', '2x5', '3x5', '4x5', '5x5', '6x5', '7x5', '8x5', '9x5',
                    '0x6', '1x6', '2x6', '3x6', '4x6', '5x6', '6x6', '7x6', '8x6', '9x6',
                    '0x7', '1x7', '2x7', '3x7', '4x7', '5x7', '6x7', '7x7', '8x7', '9x7',
                    '0x8', '1x8', '2x8', '3x8', '4x8', '5x8', '6x8', '7x8', '8x8', '9x8',
                    '0x9', '1x9', '2x9', '3x9', '4x9', '5x9', '6x9', '7x9', '8x9', '9x9',
                ],
                render: function (e, item) {
                    if (item) {
                        item.onmouseover = this.onmouseover;
                        e = e.split('x');
                        item.setAttribute('data-x', e[0]);
                        item.setAttribute('data-y', e[1]);
                    }
                    var element = document.createElement('div');
                    item.style.margin = '1px';
                    item.style.border = '1px solid #ddd';
                    return element;
                },
                onmouseover: function (e) {
                    var x = parseInt(e.target.getAttribute('data-x'));
                    var y = parseInt(e.target.getAttribute('data-y'));
                    for (var i = 0; i < e.target.parentNode.children.length; i++) {
                        var element = e.target.parentNode.children[i];
                        var ex = parseInt(element.getAttribute('data-x'));
                        var ey = parseInt(element.getAttribute('data-y'));
                        if (ex <= x && ey <= y) {
                            element.style.backgroundColor = '#cae1fc';
                            element.style.borderColor = '#2977ff';
                        } else {
                            element.style.backgroundColor = '';
                            element.style.borderColor = '#ddd';
                        }
                    }
                },
                onchange: function (a, b, c) {
                    c = c.split('x');
                    var table = document.createElement('table');
                    var tbody = document.createElement('tbody');
                    for (var y = 0; y <= c[1]; y++) {
                        var tr = document.createElement('tr');
                        for (var x = 0; x <= c[0]; x++) {
                            var td = document.createElement('td');
                            td.innerHTML = '';
                            tr.appendChild(td);
                        }
                        tbody.appendChild(tr);
                    }
                    table.appendChild(tbody);
                    table.setAttribute('width', '100%');
                    table.setAttribute('cellpadding', '6');
                    table.setAttribute('cellspacing', '0');
                    document.execCommand('insertHTML', false, table.outerHTML);
                }
            });
        }

        return items;
    }