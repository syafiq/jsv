        obj.addImage = function(src, asSnippet) {
            if (! src) {
                src = '';
            }

            if (src.substr(0,4) != 'data' && ! obj.options.remoteParser) {
                console.error('remoteParser not defined in your initialization');
            } else {
                // This is to process cross domain images
                if (src.substr(0,4) == 'data') {
                    var extension = src.split(';')
                    extension = extension[0].split('/');
                    extension = extension[1];
                } else {
                    var extension = src.substr(src.lastIndexOf('.') + 1);
                    // Work for cross browsers
                    src = obj.options.remoteParser + src;
                }

                var img = new Image();

                img.onload = function onload() {
                    var canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;

                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                    canvas.toBlob(function(blob) {
                        var newImage = document.createElement('img');
                        newImage.src = window.URL.createObjectURL(blob);
                        newImage.classList.add('jfile');
                        newImage.setAttribute('tabindex', '900');
                        newImage.setAttribute('width', img.width);
                        newImage.setAttribute('height', img.height);
                        files[newImage.src] = {
                            file: newImage.src,
                            extension: extension,
                            content: canvas.toDataURL(),
                        }

                        if (obj.options.dropAsSnippet || asSnippet) {
                            appendImage(newImage);
                            // Just to understand the attachment is part of a snippet
                            files[newImage.src].snippet = true;
                        } else {
                            //insertNodeAtCaret(newImage);
                            document.execCommand('insertHtml', false, newImage.outerHTML);
                        }

                        change();
                    });
                };

                img.src = src;
            }
        }

        obj.addFile = function(files) {
            var reader = [];

            for (var i = 0; i < files.length; i++) {
                if (files[i].size > obj.options.maxFileSize) {
                    alert('The file is too big');
                } else {
                    // Only PDF or Images
                    var type = files[i].type.split('/');

                    if (type[0] == 'image') {
                        type = 1;
                    } else if (type[1] == 'pdf') {
                        type = 2;
                    } else {
                        type = 0;
                    }

                    if (type) {
                        // Create file
                        reader[i] = new FileReader();
                        reader[i].index = i;
                        reader[i].type = type;
                        reader[i].name = files[i].name;
                        reader[i].date = files[i].lastModified;
                        reader[i].size = files[i].size;
                        reader[i].addEventListener("load", function (data) {
                            // Get result
                            if (data.target.type == 2) {
                                if (obj.options.acceptFiles == true) {
                                    obj.addPdf(data.target);
                                }
                            } else {
                                obj.addImage(data.target.result);
                            }
                        }, false);

                        reader[i].readAsDataURL(files[i])
                    } else {
                        alert('The extension is not allowed');
                    }
                }
            }
        }

        // Destroy
        obj.destroy = function() {
            obj.editor.removeEventListener('mouseup', editorMouseUp);
            obj.editor.removeEventListener('mousedown', editorMouseDown);
            obj.editor.removeEventListener('mousemove', editorMouseMove);
            obj.editor.removeEventListener('keyup', editorKeyUp);
            obj.editor.removeEventListener('keydown', editorKeyDown);
            obj.editor.removeEventListener('dragstart', editorDragStart);
            obj.editor.removeEventListener('dragenter', editorDragEnter);
            obj.editor.removeEventListener('dragover', editorDragOver);
            obj.editor.removeEventListener('drop', editorDrop);
            obj.editor.removeEventListener('paste', editorPaste);
            obj.editor.removeEventListener('blur', editorBlur);
            obj.editor.removeEventListener('focus', editorFocus);

            el.editor = null;
            el.classList.remove('jeditor-container');

            toolbar.remove();
            snippet.remove();
            obj.editor.remove();
        }

        obj.upload = function() {
            Helpers.click(obj.file);
        }

        // Elements to be removed
        var remove = [
            HTMLUnknownElement,
            HTMLAudioElement,
            HTMLEmbedElement,
            HTMLIFrameElement,
            HTMLTextAreaElement,
            HTMLInputElement,
            HTMLScriptElement
        ];

        // Valid properties
        var validProperty = ['width', 'height', 'align', 'border', 'src', 'tabindex'];

        // Valid CSS attributes
        var validStyle = ['color', 'font-weight', 'font-size', 'background', 'background-color', 'margin'];

        var parse = function(element) {
           // Remove attributes
           if (element.attributes && element.attributes.length) {
               var image = null;
               var style = null;
               // Process style attribute
               var elementStyle = element.getAttribute('style');
               if (elementStyle) {
                   style = [];
                   var t = elementStyle.split(';');
                   for (var j = 0; j < t.length; j++) {
                       var v = t[j].trim().split(':');
                       if (validStyle.indexOf(v[0].trim()) >= 0) {
                           var k = v.shift();
                           var v = v.join(':');
                           style.push(k + ':' + v);
                       }
                   }
               }
               // Process image
               if (element.tagName.toUpperCase() == 'IMG') {
                   if (! obj.options.acceptImages || ! element.src) {
                       element.parentNode.removeChild(element);
                   } else {
                       // Check if is data
                       element.setAttribute('tabindex', '900');
                       // Check attributes for persistence
                       obj.addImage(element.src);
                   }
               }
               // Remove attributes
               var attr = [];
               for (var i = 0; i < element.attributes.length; i++) {
                   attr.push(element.attributes[i].name);
               }
               if (attr.length) {
                   attr.forEach(function(v) {
                       if (validProperty.indexOf(v) == -1) {
                           element.removeAttribute(v);
                       } else {
                           // Protection XSS
                           if (element.attributes[i].value.indexOf('<') !== -1) {
                               element.attributes[i].value.replace('<', '&#60;');
                           }
                       }
                   });
               }
               element.style = '';
               // Add valid style
               if (style && style.length) {
                   element.setAttribute('style', style.join(';'));
               }
           }
           // Parse children
           if (element.children.length) {
               for (var i = 0; i < element.children.length; i++) {
                   parse(element.children[i]);
               }
           }

           if (remove.indexOf(element.constructor) >= 0) {
               element.remove();
           }
        }

        var select = function(e) {
            var s = window.getSelection()
            var r = document.createRange();
            r.selectNode(e);
            s.addRange(r)
        }

        var filter = function(data) {
            if (data) {
                data = data.replace(new RegExp('<!--(.*?)-->', 'gsi'), '');
            }
            var parser = new DOMParser();
            var d = parser.parseFromString(data, "text/html");
            parse(d);
            var span = document.createElement('span');
            span.innerHTML = d.firstChild.innerHTML;
            return span;
        }

        var editorPaste = function(e) {
            if (obj.options.filterPaste == true) {
                if (e.clipboardData || e.originalEvent.clipboardData) {
                    var html = (e.originalEvent || e).clipboardData.getData('text/html');
                    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
                    var file = (e.originalEvent || e).clipboardData.files
                } else if (window.clipboardData) {
                    var html = window.clipboardData.getData('Html');
                    var text = window.clipboardData.getData('Text');
                    var file = window.clipboardData.files
                }

                if (file.length) {
                    // Paste a image from the clipboard
                    obj.addFile(file);
                } else {
                    if (! html) {
                        html = text.split('\r\n');
                        if (! e.target.innerText) {
                            html.map(function(v) {
                                var d = document.createElement('div');
                                d.innerText = v;
                                obj.editor.appendChild(d);
                            });
                        } else {
                            html = html.map(function(v) {
                                return '<div>' + v + '</div>';
                            });
                            document.execCommand('insertHtml', false, html.join(''));
                        }
                    } else {
                        var d = filter(html);
                        // Paste to the editor
                        //insertNodeAtCaret(d);
                        document.execCommand('insertHtml', false, d.innerHTML);
                    }
                }

                e.preventDefault();
            }
        }

        var editorDragStart = function(e) {
            if (editorAction && editorAction.e) {
                e.preventDefault();
            }
        }

        var editorDragEnter = function(e) {
            if (editorAction || obj.options.dropZone == false) {
                // Do nothing
            } else {
                el.classList.add('jeditor-dragging');
                e.preventDefault();
            }
        }

        var editorDragOver = function(e) {
            if (editorAction || obj.options.dropZone == false) {
                // Do nothing
            } else {
                if (editorTimer) {
                    clearTimeout(editorTimer);
                }

                editorTimer = setTimeout(function() {
                    el.classList.remove('jeditor-dragging');
                }, 100);
                e.preventDefault();
            }
        }

        var editorDrop = function(e) {
            if (editorAction || obj.options.dropZone == false) {
                // Do nothing
            } else {
                // Position caret on the drop
                var range = null;
                if (document.caretRangeFromPoint) {
                    range=document.caretRangeFromPoint(e.clientX, e.clientY);
                } else if (e.rangeParent) {
                    range=document.createRange();
                    range.setStart(e.rangeParent,e.rangeOffset);
                }
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                sel.anchorNode.parentNode.focus();

                var html = (e.originalEvent || e).dataTransfer.getData('text/html');
                var text = (e.originalEvent || e).dataTransfer.getData('text/plain');
                var file = (e.originalEvent || e).dataTransfer.files;

                if (file.length) {
                    obj.addFile(file);
                } else if (text) {
                    extractImageFromHtml(html);
                }

                el.classList.remove('jeditor-dragging');
                e.preventDefault();
            }
        }

        var editorBlur = function(e) {
            // Process extensions
            processExtensions('onevent', e);
            // Apply changes
            change(e);
            // Blur
            if (typeof(obj.options.onblur) == 'function') {
                obj.options.onblur(el, obj, e);
            }
        }

        var editorFocus = function(e) {
            // Focus
            if (typeof(obj.options.onfocus) == 'function') {
                obj.options.onfocus(el, obj, e);
            }
        }

        var editorKeyUp = function(e) {
            if (! obj.editor.innerHTML) {
                obj.editor.innerHTML = '<div><br></div>';
            }
            if (typeof(obj.options.onkeyup) == 'function') {
                obj.options.onkeyup(el, obj, e);
            }
        }

        var editorKeyDown = function(e) {
            // Process extensions
            processExtensions('onevent', e);

            if (e.key == 'Delete') {
                if (e.target.tagName == 'IMG') {
                    var parent = e.target.parentNode;
                    select(e.target);
                    if (parent.classList.contains('jsnippet-image')) {
                        updateTotalImages();
                    }
                }
            }

            if (typeof(obj.options.onkeydown) == 'function') {
                obj.options.onkeydown(el, obj, e);
            }
        }

        var editorMouseUp = function(e) {
            if (editorAction && editorAction.e) {
                editorAction.e.classList.remove('resizing');

                if (editorAction.e.changed == true) {
                    var image = editorAction.e.cloneNode()
                    image.width = parseInt(editorAction.e.style.width) || editorAction.e.getAttribute('width');
                    image.height = parseInt(editorAction.e.style.height) || editorAction.e.getAttribute('height');
                    editorAction.e.style.width = '';
                    editorAction.e.style.height = '';
                    select(editorAction.e);
                    document.execCommand('insertHtml', false, image.outerHTML);
                }
            }

            editorAction = false;
        }

        var editorMouseDown = function(e) {
            var close = function(snippet) {
                var rect = snippet.getBoundingClientRect();
                if (rect.width - (e.clientX - rect.left) < 40 && e.clientY - rect.top < 40) {
                    snippet.innerHTML = '';
                    snippet.remove();
                }
            }

            if (e.target.tagName == 'IMG') {
                if (e.target.style.cursor) {
                    var rect = e.target.getBoundingClientRect();
                    editorAction = {
                        e: e.target,
                        x: e.clientX,
                        y: e.clientY,
                        w: rect.width,
                        h: rect.height,
                        d: e.target.style.cursor,
                    }

                    if (! e.target.getAttribute('width')) {
                        e.target.setAttribute('width', rect.width)
                    }

                    if (! e.target.getAttribute('height')) {
                        e.target.setAttribute('height', rect.height)
                    }

                    var s = window.getSelection();
                    if (s.rangeCount) {
                        for (var i = 0; i < s.rangeCount; i++) {
                            s.removeRange(s.getRangeAt(i));
                        }
                    }

                    e.target.classList.add('resizing');
                } else {
                    editorAction = true;
                }
            } else {
                if (e.target.classList.contains('jsnippet')) {
                    close(e.target);
                } else if (e.target.parentNode.classList.contains('jsnippet')) {
                    close(e.target.parentNode);
                }

                editorAction = true;
            }
        }

        var editorMouseMove = function(e) {
            if (e.target.tagName == 'IMG' && ! e.target.parentNode.classList.contains('jsnippet-image') && obj.options.allowImageResize == true) {
                if (e.target.getAttribute('tabindex')) {
                    var rect = e.target.getBoundingClientRect();
                    if (e.clientY - rect.top < 5) {
                        if (rect.width - (e.clientX - rect.left) < 5) {
                            e.target.style.cursor = 'ne-resize';
                        } else if (e.clientX - rect.left < 5) {
                            e.target.style.cursor = 'nw-resize';
                        } else {
                            e.target.style.cursor = 'n-resize';
                        }
                    } else if (rect.height - (e.clientY - rect.top) < 5) {
                        if (rect.width - (e.clientX - rect.left) < 5) {
                            e.target.style.cursor = 'se-resize';
                        } else if (e.clientX - rect.left < 5) {
                            e.target.style.cursor = 'sw-resize';
                        } else {
                            e.target.style.cursor = 's-resize';
                        }
                    } else if (rect.width - (e.clientX - rect.left) < 5) {
                        e.target.style.cursor = 'e-resize';
                    } else if (e.clientX - rect.left < 5) {
                        e.target.style.cursor = 'w-resize';
                    } else {
                        e.target.style.cursor = '';
                    }
                }
            }

            // Move
            if (e.which == 1 && editorAction && editorAction.d) {
                if (editorAction.d == 'e-resize' || editorAction.d == 'ne-resize' ||  editorAction.d == 'se-resize') {
                    editorAction.e.style.width = (editorAction.w + (e.clientX - editorAction.x));

                    if (e.shiftKey) {
                        var newHeight = (e.clientX - editorAction.x) * (editorAction.h / editorAction.w);
                        editorAction.e.style.height = editorAction.h + newHeight;
                    } else {
                        var newHeight =  null;
                    }
                }

                if (! newHeight) {
                    if (editorAction.d == 's-resize' || editorAction.d == 'se-resize' || editorAction.d == 'sw-resize') {
                        if (! e.shiftKey) {
                            editorAction.e.style.height = editorAction.h + (e.clientY - editorAction.y);
                        }
                    }
                }

                editorAction.e.changed = true;
            }
        }

        var processExtensions = function(method, data) {
            if (obj.options.extensions) {
                var ext = Object.keys(obj.options.extensions);
                if (ext.length) {
                    for (var i = 0; i < ext.length; i++)
                        if (obj.options.extensions[ext[i]] && typeof(obj.options.extensions[ext[i]][method]) == 'function') {
                            obj.options.extensions[ext[i]][method].call(obj, data);
                        }
                }
            }
        }

        var loadExtensions = function() {
            if (obj.options.extensions) {
                var ext = Object.keys(obj.options.extensions);
                if (ext.length) {
                    for (var i = 0; i < ext.length; i++) {
                        if (obj.options.extensions[ext[i]] && typeof (obj.options.extensions[ext[i]]) == 'function') {
                            obj.options.extensions[ext[i]] = obj.options.extensions[ext[i]](el, obj);
                        }
                    }
                }
            }
        }

        document.addEventListener('mouseup', editorMouseUp);
        document.addEventListener('mousemove', editorMouseMove);
        obj.editor.addEventListener('mousedown', editorMouseDown);
        obj.editor.addEventListener('keyup', editorKeyUp);
        obj.editor.addEventListener('keydown', editorKeyDown);
        obj.editor.addEventListener('dragstart', editorDragStart);
        obj.editor.addEventListener('dragenter', editorDragEnter);
        obj.editor.addEventListener('dragover', editorDragOver);
        obj.editor.addEventListener('drop', editorDrop);
        obj.editor.addEventListener('paste', editorPaste);
        obj.editor.addEventListener('focus', editorFocus);
        obj.editor.addEventListener('blur', editorBlur);

        // Append editor to the container
        el.appendChild(obj.editor);
        // Snippet
        if (obj.options.snippet) {
            obj.appendSnippet(obj.options.snippet);
        }

        // Add toolbar
        if (obj.options.toolbar) {
            // Default toolbar configuration
            if (Array.isArray(obj.options.toolbar)) {
                var toolbarOptions = {
                    container: true,
                    responsive: true,
                    items: obj.options.toolbar
                }
            } else if (obj.options.toolbar === true) {
                var toolbarOptions = {
                    container: true,
                    responsive: true,
                    items: [],
                }
            } else {
                var toolbarOptions = obj.options.toolbar;
            }

            // Default items
            if (! (toolbarOptions.items && toolbarOptions.items.length)) {
                toolbarOptions.items = Component.getDefaultToolbar(obj);
            }

            if (obj.options.toolbarOnTop) {
                // Add class
                el.classList.add('toolbar-on-top');
                // Append to the DOM
                el.insertBefore(toolbar, el.firstChild);
            } else {
                // Add padding to the editor
                obj.editor.style.padding = '15px';
                // Append to the DOM
                el.appendChild(toolbar);
            }

            // Create toolbar
            Toolbar(toolbar, toolbarOptions);

            toolbar.addEventListener('click', function() {
                obj.editor.focus();
            })
        }

        // Upload file
        obj.file = document.createElement('input');
        obj.file.style.display = 'none';
        obj.file.type = 'file';
        obj.file.setAttribute('accept', 'image/*');
        obj.file.onchange = function() {
            obj.addFile(this.files);
        }
        el.appendChild(obj.file);

        // Focus to the editor
        if (obj.editor.innerHTML && obj.options.focus) {
            Component.setCursor(obj.editor, obj.options.focus == 'initial' ? true : false);
        }

        // Change method
        el.change = obj.setData;

        // Global generic value handler
        el.val = function(val) {
            if (val === undefined) {
                // Data type
                var o = el.getAttribute('data-html') === 'true' ? false : true;
                return obj.getData(o);
            } else {
                obj.setData(val);
            }
        }

        loadExtensions();

        el.editor = obj;

        // Onload
        if (typeof(obj.options.onload) == 'function') {
            obj.options.onload(el, obj, obj.editor);
        }

        return obj;
    });