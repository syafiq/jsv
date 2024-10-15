function Editor() {
    var Component = (function(el, options) {
        // New instance
        var obj = { type:'editor' };
        obj.options = {};

        // Default configuration
        var defaults = {
            // Load data from a remove location
            url: null,
            // Initial HTML content
            value: '',
            // Initial snippet
            snippet: null,
            // Add toolbar
            toolbar: true,
            toolbarOnTop: false,
            // Website parser is to read websites and images from cross domain
            remoteParser: null,
            // Placeholder
            placeholder: null,
            // Parse URL
            filterPaste: true,
            // Accept drop files
            dropZone: true,
            dropAsSnippet: false,
            acceptImages: true,
            acceptFiles: false,
            maxFileSize: 5000000,
            allowImageResize: true,
            // Style
            maxHeight: null,
            height: null,
            focus: false,
            // Events
            onclick: null,
            onfocus: null,
            onblur: null,
            onload: null,
            onkeyup: null,
            onkeydown: null,
            onchange: null,
            extensions: null
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Private controllers
        var editorTimer = null;
        var editorAction = null;
        var files = [];

        // Keep the reference for the container
        obj.el = el;

        if (typeof(obj.options.onclick) == 'function') {
            el.onclick = function(e) {
                obj.options.onclick(el, obj, e);
            }
        }

        // Prepare container
        el.classList.add('jeditor-container');

        // Snippet
        var snippet = document.createElement('div');
        snippet.className = 'jsnippet';
        snippet.setAttribute('contenteditable', false);

        // Toolbar
        var toolbar = document.createElement('div');
        toolbar.className = 'jeditor-toolbar';

        obj.editor = document.createElement('div');
        obj.editor.setAttribute('contenteditable', true);
        obj.editor.setAttribute('spellcheck', false);
        obj.editor.classList.add('jeditor');

        // Placeholder
        if (obj.options.placeholder) {
            obj.editor.setAttribute('data-placeholder', obj.options.placeholder);
        }

        // Max height
        if (obj.options.maxHeight || obj.options.height) {
            obj.editor.style.overflowY = 'auto';

            if (obj.options.maxHeight) {
                obj.editor.style.maxHeight = obj.options.maxHeight;
            }
            if (obj.options.height) {
                obj.editor.style.height = obj.options.height;
            }
        }

        // Set editor initial value
        if (obj.options.url) {
            ajax({
                url: obj.options.url,
                dataType: 'html',
                success: function(result) {
                    obj.editor.innerHTML = result;

                    Component.setCursor(obj.editor, obj.options.focus == 'initial' ? true : false);
                }
            })
        } else {
            if (obj.options.value) {
                obj.editor.innerHTML = obj.options.value;
            } else {
                // Create from existing elements
                for (var i = 0; i < el.children.length; i++) {
                    obj.editor.appendChild(el.children[i]);
                }
            }
        }

        // Make sure element is empty
        el.innerHTML = '';

        /**
         * Onchange event controllers
         */
        var change = function(e) {
            if (typeof(obj.options.onchange) == 'function') {
                obj.options.onchange(el, obj, e);
            }

            // Update value
            obj.options.value = obj.getData();

            // Lemonade JS
            if (el.value != obj.options.value) {
                el.value = obj.options.value;
                if (typeof(el.oninput) == 'function') {
                    el.oninput({
                        type: 'input',
                        target: el,
                        value: el.value
                    });
                }
            }
        }

        /**
         * Extract images from a HTML string
         */
        var extractImageFromHtml = function(html) {
            // Create temp element
            var div = document.createElement('div');
            div.innerHTML = html;

            // Extract images
            var img = div.querySelectorAll('img');

            if (img.length) {
                for (var i = 0; i < img.length; i++) {
                    obj.addImage(img[i].src);
                }
            }
        }

        /**
         * Insert node at caret
         */
        var insertNodeAtCaret = function(newNode) {
            var sel, range;

            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    var selectedText = range.toString();
                    range.deleteContents();
                    range.insertNode(newNode);
                    // move the cursor after element
                    range.setStartAfter(newNode);
                    range.setEndAfter(newNode);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }

        var updateTotalImages = function() {
            var o = null;
            if (o = snippet.children[0]) {
                // Make sure is a grid
                if (! o.classList.contains('jslider-grid')) {
                    o.classList.add('jslider-grid');
                }
                // Quantify of images
                var number = o.children.length;
                // Set the configuration of the grid
                o.setAttribute('data-number', number > 4 ? 4 : number);
                // Total of images inside the grid
                if (number > 4) {
                    o.setAttribute('data-total', number - 4);
                } else {
                    o.removeAttribute('data-total');
                }
            }
        }

        /**
         * Append image to the snippet
         */
        var appendImage = function(image) {
            if (! snippet.innerHTML) {
                obj.appendSnippet({});
            }
            snippet.children[0].appendChild(image);
            updateTotalImages();
        }

        /**
         * Append snippet
         * @Param object data
         */
        obj.appendSnippet = function(data) {
            // Reset snippet
            snippet.innerHTML = '';

            // Attributes
            var a = [ 'image', 'title', 'description', 'host', 'url' ];

            for (var i = 0; i < a.length; i++) {
                var div = document.createElement('div');
                div.className = 'jsnippet-' + a[i];
                div.setAttribute('data-k', a[i]);
                snippet.appendChild(div);
                if (data[a[i]]) {
                    if (a[i] == 'image') {
                        if (! Array.isArray(data.image)) {
                            data.image = [ data.image ];
                        }
                        for (var j = 0; j < data.image.length; j++) {
                            var img = document.createElement('img');
                            img.src = data.image[j];
                            div.appendChild(img);
                        }
                    } else {
                        div.innerHTML = data[a[i]];
                    }
                }
            }

            obj.editor.appendChild(document.createElement('br'));
            obj.editor.appendChild(snippet);
        }

        /**
         * Set editor value
         */
        obj.setData = function(o) {
            if (typeof(o) == 'object') {
                obj.editor.innerHTML = o.content;
            } else {
                obj.editor.innerHTML = o;
            }

            if (obj.options.focus) {
                Component.setCursor(obj.editor, true);
            }

            // Reset files container
            files = [];
        }

        obj.getFiles = function() {
            var f = obj.editor.querySelectorAll('.jfile');
            var d = [];
            for (var i = 0; i < f.length; i++) {
                if (files[f[i].src]) {
                    d.push(files[f[i].src]);
                }
            }
            return d;
        }

        obj.getText = function() {
            return obj.editor.innerText;
        }

        /**
         * Get editor data
         */
        obj.getData = function(json) {
            if (! json) {
                var data = obj.editor.innerHTML;
            } else {
                var data = {
                    content : '',
                }

                // Get snippet
                if (snippet.innerHTML) {
                    var index = 0;
                    data.snippet = {};
                    for (var i = 0; i < snippet.children.length; i++) {
                        // Get key from element
                        var key = snippet.children[i].getAttribute('data-k');
                        if (key) {
                            if (key == 'image') {
                                if (! data.snippet.image) {
                                    data.snippet.image = [];
                                }
                                // Get all images
                                for (var j = 0; j < snippet.children[i].children.length; j++) {
                                    data.snippet.image.push(snippet.children[i].children[j].getAttribute('src'))
                                }
                            } else {
                                data.snippet[key] = snippet.children[i].innerHTML;
                            }
                        }
                    }
                }

                // Get files
                var f = Object.keys(files);
                if (f.length) {
                    data.files = [];
                    for (var i = 0; i < f.length; i++) {
                        data.files.push(files[f[i]]);
                    }
                }

                // Get content
                var d = document.createElement('div');
                d.innerHTML = obj.editor.innerHTML;
                var s = d.querySelector('.jsnippet');
                if (s) {
                    s.remove();
                }

                var text = d.innerHTML;
                text = text.replace(/<br>/g, "\n");
                text = text.replace(/<\/div>/g, "<\/div>\n");
                text = text.replace(/<(?:.|\n)*?>/gm, "");
                data.content = text.trim();

                // Process extensions
                processExtensions('getData', data);
            }

            return data;
        }

        // Reset
        obj.reset = function() {
            obj.editor.innerHTML = '';
            snippet.innerHTML = '';
            files = [];
        }

        obj.addPdf = function(data) {
            if (data.result.substr(0,4) != 'data') {
                console.error('Invalid source');
            } else {
                var canvas = document.createElement('canvas');
                canvas.width = 60;
                canvas.height = 60;

                var img = new Image();
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                canvas.toBlob(function(blob) {
                    var newImage = document.createElement('img');
                    newImage.src = window.URL.createObjectURL(blob);
                    newImage.title = data.name;
                    newImage.className = 'jfile pdf';

                    files[newImage.src] = {
                        file: newImage.src,
                        extension: 'pdf',
                        content: data.result,
                    }

                    //insertNodeAtCaret(newImage);
                    document.execCommand('insertHtml', false, newImage.outerHTML);
                });
            }
        }

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
            helpers.click(obj.file);
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
                       // Check attributes for persistance
                       obj.addImage(element.src);
                   }
               }
               // Remove attributes
               var attr = [];
               var numAttributes = element.attributes.length - 1;
               if (numAttributes > 0) {
                   for (var i = numAttributes; i >= 0 ; i--) {
                       attr.push(element.attributes[i].name);
                   }
                   attr.forEach(function(v) {
                       if (validProperty.indexOf(v) == -1) {
                           element.removeAttribute(v);
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

    Component.setCursor = function(element, first) {
        element.focus();
        document.execCommand('selectAll');
        var sel = window.getSelection();
        var range = sel.getRangeAt(0);
        if (first == true) {
            var node = range.startContainer;
            var size = 0;
        } else {
            var node = range.endContainer;
            var size = node.length;
        }
        range.setStart(node, size);
        range.setEnd(node, size);
        sel.removeAllRanges();
        sel.addRange(range);
    }

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

    return Component;
}

/* harmony default export */ var editor = (Editor());
;// CONCATENATED MODULE: ./src/plugins/floating.js
function Floating() {
    var Component = (function (el, options) {
        var obj = {};
        obj.options = {};

        // Default configuration
        var defaults = {
            type: 'big',
            title: 'Untitled',
            width: 510,
            height: 472,
        }

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Private methods

        var setContent = function () {
            var temp = document.createElement('div');
            while (el.children[0]) {
                temp.appendChild(el.children[0]);
            }

            obj.content = document.createElement('div');
            obj.content.className = 'jfloating_content';
            obj.content.innerHTML = el.innerHTML;

            while (temp.children[0]) {
                obj.content.appendChild(temp.children[0]);
            }

            obj.container = document.createElement('div');
            obj.container.className = 'jfloating';
            obj.container.appendChild(obj.content);

            if (obj.options.title) {
                obj.container.setAttribute('title', obj.options.title);
            } else {
                obj.container.classList.add('no-title');
            }

            // validate element dimensions
            if (obj.options.width) {
                obj.container.style.width = parseInt(obj.options.width) + 'px';
            }

            if (obj.options.height) {
                obj.container.style.height = parseInt(obj.options.height) + 'px';
            }

            el.innerHTML = '';
            el.appendChild(obj.container);
        }

        var setEvents = function () {
            if (obj.container) {
                obj.container.addEventListener('click', function (e) {
                    var rect = e.target.getBoundingClientRect();

                    if (e.target.classList.contains('jfloating')) {
                        if (e.changedTouches && e.changedTouches[0]) {
                            var x = e.changedTouches[0].clientX;
                            var y = e.changedTouches[0].clientY;
                        } else {
                            var x = e.clientX;
                            var y = e.clientY;
                        }

                        if (rect.width - (x - rect.left) < 50 && (y - rect.top) < 50) {
                            setTimeout(function () {
                                obj.close();
                            }, 100);
                        } else {
                            obj.setState();
                        }
                    }
                });
            }
        }

        var setType = function () {
            obj.container.classList.add('jfloating-' + obj.options.type);
        }

        obj.state = {
            isMinized: false,
        }

        obj.setState = function () {
            if (obj.state.isMinized) {
                obj.container.classList.remove('jfloating-minimized');
            } else {
                obj.container.classList.add('jfloating-minimized');
            }
            obj.state.isMinized = !obj.state.isMinized;
        }

        obj.close = function () {
            Components.elements.splice(Component.elements.indexOf(obj.container), 1);
            obj.updatePosition();
            el.remove();
        }

        obj.updatePosition = function () {
            for (var i = 0; i < Component.elements.length; i++) {
                var floating = Component.elements[i];
                var prevFloating = Component.elements[i - 1];
                floating.style.right = i * (prevFloating ? prevFloating.offsetWidth : floating.offsetWidth) * 1.01 + 'px';
            }
        }

        obj.init = function () {
            // Set content into root
            setContent();

            // Set dialog events
            setEvents();

            // Set dialog type
            setType();

            // Update floating position
            Component.elements.push(obj.container);
            obj.updatePosition();

            el.floating = obj;
        }

        obj.init();

        return obj;
    });

    Component.elements = [];

    return Component;
}

/* harmony default export */ var floating = (Floating());
;// CONCATENATED MODULE: ./src/plugins/validations.js
function Validations() {
    /**
     * Options: Object,
     * Properties:
     * Constraint,
     * Reference,
     * Value
     */

    var isNumeric = function(num) {
        return !isNaN(num) && num !== null && num !== '';
    }

    var numberCriterias = {
        'between': function(value, range) {
            return value >= range[0] && value <= range[1];
        },
        'not between': function(value, range) {
            return value < range[0] || value > range[1];
        },
        '<': function(value, range) {
            return value < range[0];
        },
        '<=': function(value, range) {
            return value <= range[0];
        },
        '>': function(value, range) {
            return value > range[0];
        },
        '>=': function(value, range) {
            return value >= range[0];
        },
        '=': function(value, range) {
            return value == range[0];
        },
        '!=': function(value, range) {
            return value != range[0];
        },
    }

    var dateCriterias = {
        'valid date': function() {
            return true;
        },
        '=': function(value, range) {
            return value === range[0];
        },
        '<': function(value, range) {
            return value < range[0];
        },
        '<=': function(value, range) {
            return value <= range[0];
        },
        '>': function(value, range) {
            return value > range[0];
        },
        '>=': function(value, range) {
            return value >= range[0];
        },
        'between': function(value, range) {
            return value >= range[0] && value <= range[1];
        },
        'not between': function(value, range) {
            return value < range[0] || value > range[1];
        },
    }

    var textCriterias = {
        'contains': function(value, range) {
            return value.includes(range[0]);
        },
        'not contains': function(value, range) {
            return !value.includes(range[0]);
        },
        'begins with': function(value, range) {
            return value.startsWith(range[0]);
        },
        'ends with': function(value, range) {
            return value.endsWith(range[0]);
        },
        '=': function(value, range) {
            return value === range[0];
        },
        'valid email': function(value) {
            var pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

            return pattern.test(value);
        },
        'valid url': function(value) {
            var pattern = new RegExp(/(((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]+)/ig);

            return pattern.test(value);
        },
    }

    // Component router
    var component = function(value, options) {
        if (typeof(component[options.type]) === 'function') {
            if (options.allowBlank && value === '') {
                return true;
            }

            return component[options.type](value, options);
        }
        return null;
    }

    component.url = function() {
        var pattern = new RegExp(/(((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]+)/ig);
        return pattern.test(data) ? true : false;
    }

    component.email = function(data) {
        var pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        return data && pattern.test(data) ? true : false;
    }

    component.required = function(data) {
        return data.trim() ? true : false;
    }

    component.exist = function(data, options) {
        return !!data.toString();
    }

    component['not exist'] = function(data, options) {
        return !data.toString();
    }

    component.empty = function(data) {
        return !data.toString();
    }

    component.notEmpty = function(data) {
        return !!data.toString();
    }

    component.number = function(data, options) {
       if (! isNumeric(data)) {
           return false;
       }

       if (!options || !options.criteria) {
           return true;
       }

       if (!numberCriterias[options.criteria]) {
           return false;
       }

       var values = options.value.map(function(num) {
          return parseFloat(num);
       })

       return numberCriterias[options.criteria](data, values);
   };

    component.login = function(data) {
        var pattern = new RegExp(/^[a-zA-Z0-9\_\-\.\s+]+$/);
        return data && pattern.test(data) ? true : false;
    }

    component.list = function(data, options) {
        var dataType = typeof data;
        if (dataType !== 'string' && dataType !== 'number') {
            return false;
        }
        if (typeof(options.value[0]) === 'string') {
            var list = options.value[0].split(',');
        } else {
            var list = options.value[0];
        }

        var validOption = list.findIndex(function name(item) {
            return item == data;
        });

        return validOption > -1;
    }

    component.date = function(data, options) {
        if (new Date(data) == 'Invalid Date') {
            return false;
        }

        if (!options || !options.criteria) {
            return true;
        }

        if (!dateCriterias[options.criteria]) {
            return false;
        }

        var values = options.value.map(function(date) {
            return new Date(date).getTime();
        });

        return dateCriterias[options.criteria](new Date(data).getTime(), values);
    }

    component.text = function(data, options) {
        if (typeof data !== 'string') {
            return false;
        }

        if (!options || !options.criteria) {
            return true;
        }

        if (!textCriterias[options.criteria]) {
            return false;
        }

        return textCriterias[options.criteria](data, options.value);
    }

    component.textLength = function(data, options) {
        data = data.toString();

        return component.number(data.length, options);
    }

    return component;
}

/* harmony default export */ var validations = (Validations());
;// CONCATENATED MODULE: ./src/plugins/form.js




function Form() {
    var Component = (function(el, options) {
        var obj = {};
        obj.options = {};

        // Default configuration
        var defaults = {
            url: null,
            message: 'Are you sure? There are unsaved information in your form',
            ignore: false,
            currentHash: null,
            submitButton:null,
            validations: null,
            onbeforeload: null,
            onload: null,
            onbeforesave: null,
            onsave: null,
            onbeforeremove: null,
            onremove: null,
            onerror: function(el, message) {
                alert(message);
            }
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Validations
        if (! obj.options.validations) {
            obj.options.validations = {};
        }

        // Submit Button
        if (! obj.options.submitButton) {
            obj.options.submitButton = el.querySelector('input[type=submit]');
        }

        if (obj.options.submitButton && obj.options.url) {
            obj.options.submitButton.onclick = function() {
                obj.save();
            }
        }

        if (! obj.options.validations.email) {
            obj.options.validations.email = validations.email;
        }

        if (! obj.options.validations.length) {
            obj.options.validations.length = validations.length;
        }

        if (! obj.options.validations.required) {
            obj.options.validations.required = validations.required;
        }

        obj.setUrl = function(url) {
            obj.options.url = url;
        }

        obj.load = function() {
            ajax({
                url: obj.options.url,
                method: 'GET',
                dataType: 'json',
                queue: true,
                success: function(data) {
                    // Overwrite values from the backend
                    if (typeof(obj.options.onbeforeload) == 'function') {
                        var ret = obj.options.onbeforeload(el, data);
                        if (ret) {
                            data = ret;
                        }
                    }
                    // Apply values to the form
                    Component.setElements(el, data);
                    // Onload methods
                    if (typeof(obj.options.onload) == 'function') {
                        obj.options.onload(el, data);
                    }
                }
            });
        }

        obj.save = function() {
            var test = obj.validate();

            if (test) {
                obj.options.onerror(el, test);
            } else {
                var data = Component.getElements(el, true);

                if (typeof(obj.options.onbeforesave) == 'function') {
                    var data = obj.options.onbeforesave(el, data);

                    if (data === false) {
                        return;
                    }
                }

                ajax({
                    url: obj.options.url,
                    method: 'POST',
                    dataType: 'json',
                    data: data,
                    success: function(result) {
                        if (typeof(obj.options.onsave) == 'function') {
                            obj.options.onsave(el, data, result);
                        }
                    }
                });
            }
        }

        obj.remove = function() {
            if (typeof(obj.options.onbeforeremove) == 'function') {
                var ret = obj.options.onbeforeremove(el, obj);
                if (ret === false) {
                    return false;
                }
            }

            ajax({
                url: obj.options.url,
                method: 'DELETE',
                dataType: 'json',
                success: function(result) {
                    if (typeof(obj.options.onremove) == 'function') {
                        obj.options.onremove(el, obj, result);
                    }

                    obj.reset();
                }
            });
        }

        var addError = function(element) {
            // Add error in the element
            element.classList.add('error');
            // Submit button
            if (obj.options.submitButton) {
                obj.options.submitButton.setAttribute('disabled', true);
            }
            // Return error message
            var error = element.getAttribute('data-error') || 'There is an error in the form';
            element.setAttribute('title', error);
            return error;
        }

        var delError = function(element) {
            var error = false;
            // Remove class from this element
            element.classList.remove('error');
            element.removeAttribute('title');
            // Get elements in the form
            var elements = el.querySelectorAll("input, select, textarea, div[name]");
            // Run all elements
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].getAttribute('data-validation')) {
                    if (elements[i].classList.contains('error')) {
                        error = true;
                    }
                }
            }

            if (obj.options.submitButton) {
                if (error) {
                    obj.options.submitButton.setAttribute('disabled', true);
                } else {
                    obj.options.submitButton.removeAttribute('disabled');
                }
            }
        }

        obj.validateElement = function(element) {
            // Test results
            var test = false;
            // Value
            var value = Component.getValue(element);
            // Validation
            var validation = element.getAttribute('data-validation');
            // Parse
            if (typeof(obj.options.validations[validation]) == 'function' && ! obj.options.validations[validation](value, element)) {
                // Not passed in the test
                test = addError(element);
            } else {
                if (element.classList.contains('error')) {
                    delError(element);
                }
            }

            return test;
        }

        obj.reset = function() {
            // Get elements in the form
            var name = null;
            var elements = el.querySelectorAll("input, select, textarea, div[name]");
            // Run all elements
            for (var i = 0; i < elements.length; i++) {
                if (name = elements[i].getAttribute('name')) {
                    if (elements[i].type == 'checkbox' || elements[i].type == 'radio') {
                        elements[i].checked = false;
                    } else {
                        if (typeof(elements[i].val) == 'function') {
                            elements[i].val('');
                        } else {
                            elements[i].value = '';
                        }
                    }
                }
            }
        }

        // Run form validation
        obj.validate = function() {
            var test = [];
            // Get elements in the form
            var elements = el.querySelectorAll("input, select, textarea, div[name]");
            // Run all elements
            for (var i = 0; i < elements.length; i++) {
                // Required
                if (elements[i].getAttribute('data-validation')) {
                    var res = obj.validateElement(elements[i]);
                    if (res) {
                        test.push(res);
                    }
                }
            }
            if (test.length > 0) {
                return test.join('<br>');
            } else {
                return false;
            }
        }

        // Check the form
        obj.getError = function() {
            // Validation
            return obj.validation() ? true : false;
        }

        // Return the form hash
        obj.setHash = function() {
            return obj.getHash(Component.getElements(el));
        }

        // Get the form hash
        obj.getHash = function(str) {
            var hash = 0, i, chr;

            if (str.length === 0) {
                return hash;
            } else {
                for (i = 0; i < str.length; i++) {
                  chr = str.charCodeAt(i);
                  hash = ((hash << 5) - hash) + chr;
                  hash |= 0;
                }
            }

            return hash;
        }

        // Is there any change in the form since start tracking?
        obj.isChanged = function() {
            var hash = obj.setHash();
            return (obj.options.currentHash != hash);
        }

        // Restart tracking
        obj.resetTracker = function() {
            obj.options.currentHash = obj.setHash();
            obj.options.ignore = false;
        }

        // Ignore flag
        obj.setIgnore = function(ignoreFlag) {
            obj.options.ignore = ignoreFlag ? true : false;
        }

        // Start tracking in one second
        setTimeout(function() {
            obj.options.currentHash = obj.setHash();
        }, 1000);

        // Validations
        el.addEventListener("keyup", function(e) {
            if (e.target.getAttribute('data-validation')) {
                obj.validateElement(e.target);
            }
        });

        // Alert
        if (! Component.hasEvents) {
            window.addEventListener("beforeunload", function (e) {
                if (obj.isChanged() && obj.options.ignore == false) {
                    var confirmationMessage =  obj.options.message? obj.options.message : "\o/";

                    if (confirmationMessage) {
                        if (typeof e == 'undefined') {
                            e = window.event;
                        }

                        if (e) {
                            e.returnValue = confirmationMessage;
                        }

                        return confirmationMessage;
                    } else {
                        return void(0);
                    }
                }
            });

            Component.hasEvents = true;
        }

        el.form = obj;

        return obj;
    });

    // Get value from one element
    Component.getValue = function(element) {
        var value = null;
        if (element.type == 'checkbox') {
            if (element.checked == true) {
                value = element.value || true;
            }
        } else if (element.type == 'radio') {
            if (element.checked == true) {
                value = element.value;
            }
        } else if (element.type == 'file') {
            value = element.files;
        } else if (element.tagName == 'select' && element.multiple == true) {
            value = [];
            var options = element.querySelectorAll("options[selected]");
            for (var j = 0; j < options.length; j++) {
                value.push(options[j].value);
            }
        } else if (typeof(element.val) == 'function') {
            value = element.val();
        } else {
            value = element.value || '';
        }

        return value;
    }

    // Get form elements
    Component.getElements = function(el, asArray) {
        var data = {};
        var name = null;
        var elements = el.querySelectorAll("input, select, textarea, div[name]");

        for (var i = 0; i < elements.length; i++) {
            if (name = elements[i].getAttribute('name')) {
                data[name] = Component.getValue(elements[i]) || '';
            }
        }

        return asArray == true ? data : JSON.stringify(data);
    }

    //Get form elements
    Component.setElements = function(el, data) {
        var name = null;
        var value = null;
        var elements = el.querySelectorAll("input, select, textarea, div[name]");
        for (var i = 0; i < elements.length; i++) {
            // Attributes
            var type = elements[i].getAttribute('type');
            if (name = elements[i].getAttribute('name')) {
                // Transform variable names in pathname
                name = name.replace(new RegExp(/\[(.*?)\]/ig), '.$1');
                value = null;
                // Seach for the data in the path
                if (name.match(/\./)) {
                    var tmp = Path.call(data, name) || '';
                    if (typeof(tmp) !== 'undefined') {
                        value = tmp;
                    }
                } else {
                    if (typeof(data[name]) !== 'undefined') {
                        value = data[name];
                    }
                }
                // Set the values
                if (value !== null) {
                    if (type == 'checkbox' || type == 'radio') {
                        elements[i].checked = value ? true : false;
                    } else if (type == 'file') {
                        // Do nothing
                    } else {
                        if (typeof (elements[i].val) == 'function') {
                            elements[i].val(value);
                        } else {
                            elements[i].value = value;
                        }
                    }
                }
            }
        }
    }

    return Component;
}

/* harmony default export */ var plugins_form = (Form());
;// CONCATENATED MODULE: ./src/plugins/modal.js




function Modal() {

    var Events = function() {
        //  Position
        var tracker = null;

        var keyDown = function (e) {
            if (e.which == 27) {
                var modals = document.querySelectorAll('.jmodal');
                for (var i = 0; i < modals.length; i++) {
                    modals[i].parentNode.modal.close();
                }
            }
        }

        var mouseUp = function (e) {
            var item = helpers.findElement(e.target, 'jmodal');
            if (item) {
                // Get target info
                var rect = item.getBoundingClientRect();

                if (e.changedTouches && e.changedTouches[0]) {
                    var x = e.changedTouches[0].clientX;
                    var y = e.changedTouches[0].clientY;
                } else {
                    var x = e.clientX;
                    var y = e.clientY;
                }

                if (rect.width - (x - rect.left) < 50 && (y - rect.top) < 50) {
                    item.parentNode.modal.close();
                }
            }

            if (tracker) {
                tracker.element.style.cursor = 'auto';
                tracker = null;
            }
        }

        var mouseDown = function (e) {
            var item = helpers.findElement(e.target, 'jmodal');
            if (item) {
                // Get target info
                var rect = item.getBoundingClientRect();

                if (e.changedTouches && e.changedTouches[0]) {
                    var x = e.changedTouches[0].clientX;
                    var y = e.changedTouches[0].clientY;
                } else {
                    var x = e.clientX;
                    var y = e.clientY;
                }

                if (rect.width - (x - rect.left) < 50 && (y - rect.top) < 50) {
                    // Do nothing
                } else {
                    if (y - rect.top < 50) {
                        if (document.selection) {
                            document.selection.empty();
                        } else if (window.getSelection) {
                            window.getSelection().removeAllRanges();
                        }

                        tracker = {
                            left: rect.left,
                            top: rect.top,
                            x: e.clientX,
                            y: e.clientY,
                            width: rect.width,
                            height: rect.height,
                            element: item,
                        }
                    }
                }
            }
        }

        var mouseMove = function (e) {
            if (tracker) {
                e = e || window.event;
                if (e.buttons) {
                    var mouseButton = e.buttons;
                } else if (e.button) {
                    var mouseButton = e.button;
                } else {
                    var mouseButton = e.which;
                }

                if (mouseButton) {
                    tracker.element.style.top = (tracker.top + (e.clientY - tracker.y) + (tracker.height / 2)) + 'px';
                    tracker.element.style.left = (tracker.left + (e.clientX - tracker.x) + (tracker.width / 2)) + 'px';
                    tracker.element.style.cursor = 'move';
                } else {
                    tracker.element.style.cursor = 'auto';
                }
            }
        }

        document.addEventListener('keydown', keyDown);
        document.addEventListener('mouseup', mouseUp);
        document.addEventListener('mousedown', mouseDown);
        document.addEventListener('mousemove', mouseMove);
    }

    var Component = (function (el, options) {
        var obj = {};
        obj.options = {};

        // Default configuration
        var defaults = {
            url: null,
            onopen: null,
            onclose: null,
            onload: null,
            closed: false,
            width: null,
            height: null,
            title: null,
            padding: null,
            backdrop: true,
            icon: null,
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Title
        if (!obj.options.title && el.getAttribute('title')) {
            obj.options.title = el.getAttribute('title');
        }

        var temp = document.createElement('div');
        while (el.children[0]) {
            temp.appendChild(el.children[0]);
        }

        obj.title = document.createElement('div');
        obj.title.className = 'jmodal_title';
        if (obj.options.icon) {
            obj.title.setAttribute('data-icon', obj.options.icon);
        }

        obj.content = document.createElement('div');
        obj.content.className = 'jmodal_content';
        obj.content.innerHTML = el.innerHTML;

        while (temp.children[0]) {
            obj.content.appendChild(temp.children[0]);
        }

        obj.container = document.createElement('div');
        obj.container.className = 'jmodal';
        obj.container.appendChild(obj.title);
        obj.container.appendChild(obj.content);

        if (obj.options.padding) {
            obj.content.style.padding = obj.options.padding;
        }
        if (obj.options.width) {
            obj.container.style.width = obj.options.width;
        }
        if (obj.options.height) {
            obj.container.style.height = obj.options.height;
        }
        if (obj.options.title) {
            var title = document.createElement('h4');
            title.innerText = obj.options.title;
            obj.title.appendChild(title);
        }

        el.innerHTML = '';
        el.style.display = 'none';
        el.appendChild(obj.container);

        // Backdrop
        if (obj.options.backdrop) {
            var backdrop = document.createElement('div');
            backdrop.className = 'jmodal_backdrop';
            backdrop.onclick = function () {
                obj.close();
            }
            el.appendChild(backdrop);
        }

        obj.open = function () {
            el.style.display = 'block';
            // Fullscreen
            var rect = obj.container.getBoundingClientRect();
            if (helpers.getWindowWidth() < rect.width) {
                obj.container.style.top = '';
                obj.container.style.left = '';
                obj.container.classList.add('jmodal_fullscreen');
                animation.slideBottom(obj.container, 1);
            } else {
                if (obj.options.backdrop) {
                    backdrop.style.display = 'block';
                }
            }
            // Event
            if (typeof (obj.options.onopen) == 'function') {
                obj.options.onopen(el, obj);
            }
        }

        obj.resetPosition = function () {
            obj.container.style.top = '';
            obj.container.style.left = '';
        }

        obj.isOpen = function () {
            return el.style.display != 'none' ? true : false;
        }

        obj.close = function () {
            if (obj.isOpen()) {
                el.style.display = 'none';
                if (obj.options.backdrop) {
                    // Backdrop
                    backdrop.style.display = '';
                }
                // Remove fullscreen class
                obj.container.classList.remove('jmodal_fullscreen');
                // Event
                if (typeof (obj.options.onclose) == 'function') {
                    obj.options.onclose(el, obj);
                }
            }
        }

        if (obj.options.url) {
            ajax({
                url: obj.options.url,
                method: 'GET',
                dataType: 'text/html',
                success: function (data) {
                    obj.content.innerHTML = data;

                    if (!obj.options.closed) {
                        obj.open();
                    }

                    if (typeof (obj.options.onload) === 'function') {
                        obj.options.onload(obj);
                    }
                }
            });
        } else {
            if (!obj.options.closed) {
                obj.open();
            }

            if (typeof (obj.options.onload) === 'function') {
                obj.options.onload(obj);
            }
        }

        // Keep object available from the node
        el.modal = obj;

        // Create events when the first modal is create only
        Events();

        // Execute the events only once
        Events = function() {};

        return obj;
    });

    return Component;
}

/* harmony default export */ var modal = (Modal());
;// CONCATENATED MODULE: ./src/plugins/notification.js



function Notification() {
    var Component = function (options) {
        var obj = {};
        obj.options = {};

        // Default configuration
        var defaults = {
            icon: null,
            name: 'Notification',
            date: null,
            error: null,
            title: null,
            message: null,
            timeout: 4000,
            autoHide: true,
            closeable: true,
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        var notification = document.createElement('div');
        notification.className = 'jnotification';

        if (obj.options.error) {
            notification.classList.add('jnotification-error');
        }

        var notificationContainer = document.createElement('div');
        notificationContainer.className = 'jnotification-container';
        notification.appendChild(notificationContainer);

        var notificationHeader = document.createElement('div');
        notificationHeader.className = 'jnotification-header';
        notificationContainer.appendChild(notificationHeader);

        var notificationImage = document.createElement('div');
        notificationImage.className = 'jnotification-image';
        notificationHeader.appendChild(notificationImage);

        if (obj.options.icon) {
            var notificationIcon = document.createElement('img');
            notificationIcon.src = obj.options.icon;
            notificationImage.appendChild(notificationIcon);
        }

        var notificationName = document.createElement('div');
        notificationName.className = 'jnotification-name';
        notificationName.innerHTML = obj.options.name;
        notificationHeader.appendChild(notificationName);

        if (obj.options.closeable == true) {
            var notificationClose = document.createElement('div');
            notificationClose.className = 'jnotification-close';
            notificationClose.onclick = function () {
                obj.hide();
            }
            notificationHeader.appendChild(notificationClose);
        }

        var notificationDate = document.createElement('div');
        notificationDate.className = 'jnotification-date';
        notificationHeader.appendChild(notificationDate);

        var notificationContent = document.createElement('div');
        notificationContent.className = 'jnotification-content';
        notificationContainer.appendChild(notificationContent);

        if (obj.options.title) {
            var notificationTitle = document.createElement('div');
            notificationTitle.className = 'jnotification-title';
            notificationTitle.innerHTML = obj.options.title;
            notificationContent.appendChild(notificationTitle);
        }

        var notificationMessage = document.createElement('div');
        notificationMessage.className = 'jnotification-message';
        notificationMessage.innerHTML = obj.options.message;
        notificationContent.appendChild(notificationMessage);

        obj.show = function () {
            document.body.appendChild(notification);
            if (helpers.getWindowWidth() > 800) {
                animation.fadeIn(notification);
            } else {
                animation.slideTop(notification, 1);
            }
        }

        obj.hide = function () {
            if (helpers.getWindowWidth() > 800) {
                animation.fadeOut(notification, function () {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                        if (notificationTimeout) {
                            clearTimeout(notificationTimeout);
                        }
                    }
                });
            } else {
                animation.slideTop(notification, 0, function () {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                        if (notificationTimeout) {
                            clearTimeout(notificationTimeout);
                        }
                    }
                });
            }
        };

        obj.show();

        if (obj.options.autoHide == true) {
            var notificationTimeout = setTimeout(function () {
                obj.hide();
            }, obj.options.timeout);
        }

        if (helpers.getWindowWidth() < 800) {
            notification.addEventListener("swipeup", function (e) {
                obj.hide();
                e.preventDefault();
                e.stopPropagation();
            });
        }

        return obj;
    }

    Component.isVisible = function () {
        var j = document.querySelector('.jnotification');
        return j && j.parentNode ? true : false;
    }

    return Component;
}

/* harmony default export */ var notification = (Notification());
;// CONCATENATED MODULE: ./src/plugins/progressbar.js
function Progressbar(el, options) {
    var obj = {};
    obj.options = {};

    // Default configuration
    var defaults = {
        value: 0,
        onchange: null,
        width: null,
    };

    // Loop through the initial configuration
    for (var property in defaults) {
        if (options && options.hasOwnProperty(property)) {
            obj.options[property] = options[property];
        } else {
            obj.options[property] = defaults[property];
        }
    }

    // Class
    el.classList.add('jprogressbar');
    el.setAttribute('tabindex', 1);
    el.setAttribute('data-value', obj.options.value);

    var bar = document.createElement('div');
    bar.style.width = obj.options.value + '%';
    bar.style.color = '#fff';
    el.appendChild(bar);

    if (obj.options.width) {
        el.style.width = obj.options.width;
    }

    // Set value
    obj.setValue = function(value) {
        value = parseInt(value);
        obj.options.value = value;
        bar.style.width = value + '%';
        el.setAttribute('data-value', value + '%');

        if (value < 6) {
            el.style.color = '#000';
        } else {
            el.style.color = '#fff';
        }

        // Update value
        obj.options.value = value;

        if (typeof(obj.options.onchange) == 'function') {
            obj.options.onchange(el, value);
        }

        // Lemonade JS
        if (el.value != obj.options.value) {
            el.value = obj.options.value;
            if (typeof(el.oninput) == 'function') {
                el.oninput({
                    type: 'input',
                    target: el,
                    value: el.value
                });
            }
        }
    }

    obj.getValue = function() {
        return obj.options.value;
    }

    var action = function(e) {
        if (e.which) {
            // Get target info
            var rect = el.getBoundingClientRect();

            if (e.changedTouches && e.changedTouches[0]) {
                var x = e.changedTouches[0].clientX;
                var y = e.changedTouches[0].clientY;
            } else {
                var x = e.clientX;
                var y = e.clientY;
            }

            obj.setValue(Math.round((x - rect.left) / rect.width * 100));
        }
    }

    // Events
    if ('touchstart' in document.documentElement === true) {
        el.addEventListener('touchstart', action);
        el.addEventListener('touchend', action);
    } else {
        el.addEventListener('mousedown', action);
        el.addEventListener("mousemove", action);
    }

    // Change
    el.change = obj.setValue;

    // Global generic value handler
    el.val = function(val) {
        if (val === undefined) {
            return obj.getValue();
        } else {
            obj.setValue(val);
        }
    }

    // Reference
    el.progressbar = obj;

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/rating.js
function Rating(el, options) {
    // Already created, update options
    if (el.rating) {
        return el.rating.setOptions(options, true);
    }

    // New instance
    var obj = {};
    obj.options = {};

    obj.setOptions = function(options, reset) {
        // Default configuration
        var defaults = {
            number: 5,
            value: 0,
            tooltip: [ 'Very bad', 'Bad', 'Average', 'Good', 'Very good' ],
            onchange: null,
        };

        // Loop through the initial configuration
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                if (typeof(obj.options[property]) == 'undefined' || reset === true) {
                    obj.options[property] = defaults[property];
                }
            }
        }

        // Make sure the container is empty
        el.innerHTML = '';

        // Add elements
        for (var i = 0; i < obj.options.number; i++) {
            var div = document.createElement('div');
            div.setAttribute('data-index', (i + 1))
            div.setAttribute('title', obj.options.tooltip[i])
            el.appendChild(div);
        }

        // Selected option
        if (obj.options.value) {
            for (var i = 0; i < obj.options.number; i++) {
                if (i < obj.options.value) {
                    el.children[i].classList.add('jrating-selected');
                }
            }
        }

        return obj;
    }

    // Set value
    obj.setValue = function(index) {
        for (var i = 0; i < obj.options.number; i++) {
            if (i < index) {
                el.children[i].classList.add('jrating-selected');
            } else {
                el.children[i].classList.remove('jrating-over');
                el.children[i].classList.remove('jrating-selected');
            }
        }

        obj.options.value = index;

        if (typeof(obj.options.onchange) == 'function') {
            obj.options.onchange(el, index);
        }

        // Lemonade JS
        if (el.value != obj.options.value) {
            el.value = obj.options.value;
            if (typeof(el.oninput) == 'function') {
                el.oninput({
                    type: 'input',
                    target: el,
                    value: el.value
                });
            }
        }
    }

    obj.getValue = function() {
        return obj.options.value;
    }

    var init = function() {
        // Start plugin
        obj.setOptions(options);

        // Class
        el.classList.add('jrating');

        // Events
        el.addEventListener("click", function(e) {
            var index = e.target.getAttribute('data-index');
            if (index != undefined) {
                if (index == obj.options.value) {
                    obj.setValue(0);
                } else {
                    obj.setValue(index);
                }
            }
        });

        el.addEventListener("mouseover", function(e) {
            var index = e.target.getAttribute('data-index');
            for (var i = 0; i < obj.options.number; i++) {
                if (i < index) {
                    el.children[i].classList.add('jrating-over');
                } else {
                    el.children[i].classList.remove('jrating-over');
                }
            }
        });

        el.addEventListener("mouseout", function(e) {
            for (var i = 0; i < obj.options.number; i++) {
                el.children[i].classList.remove('jrating-over');
            }
        });

        // Change
        el.change = obj.setValue;

        // Global generic value handler
        el.val = function(val) {
            if (val === undefined) {
                return obj.getValue();
            } else {
                obj.setValue(val);
            }
        }

        // Reference
        el.rating = obj;
    }

    init();

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/search.js



function Search(el, options) {
    if (el.search) {
        return el.search;
    }

    var index =  null;

    var select = function(e) {
        if (e.target.classList.contains('jsearch_item')) {
            var element = e.target;
        } else {
            var element = e.target.parentNode;
        }

        obj.selectIndex(element);
        e.preventDefault();
    }

    var createList = function(data) {
        if (typeof(obj.options.onsearch) == 'function') {
            var ret = obj.options.onsearch(obj, data);
            if (ret) {
                data = ret;
            }
        }

        // Reset container
        container.innerHTML = '';
        // Print results
        if (! data.length) {
            // Show container
            el.style.display = '';
        } else {
            // Show container
            el.style.display = 'block';

            // Show items (only 10)
            var len = data.length < 11 ? data.length : 10;
            for (var i = 0; i < len; i++) {
                if (typeof(data[i]) == 'string') {
                    var text = data[i];
                    var value = data[i];
                } else {
                    // Legacy
                    var text = data[i].text;
                    if (! text && data[i].name) {
                        text = data[i].name;
                    }
                    var value = data[i].value;
                    if (! value && data[i].id) {
                        value = data[i].id;
                    }
                }

                var div = document.createElement('div');
                div.setAttribute('data-value', value);
                div.setAttribute('data-text', text);
                div.className = 'jsearch_item';

                if (data[i].id) {
                    div.setAttribute('id', data[i].id)
                }

                if (obj.options.forceSelect && i == 0) {
                    div.classList.add('selected');
                }
                var img = document.createElement('img');
                if (data[i].image) {
                    img.src = data[i].image;
                } else {
                    img.style.display = 'none';
                }
                div.appendChild(img);

                var item = document.createElement('div');
                item.innerHTML = text;
                div.appendChild(item);

                // Append item to the container
                container.appendChild(div);
            }
        }
    }

    var execute = function(str) {
        if (str != obj.terms) {
            // New terms
            obj.terms = str;
            // New index
            if (obj.options.forceSelect) {
                index = 0;
            } else {
                index = null;
            }
            // Array or remote search
            if (Array.isArray(obj.options.data)) {
                var test = function(o) {
                    if (typeof(o) == 'string') {
                        if ((''+o).toLowerCase().search(str.toLowerCase()) >= 0) {
                            return true;
                        }
                    } else {
                        for (var key in o) {
                            var value = o[key];
                            if ((''+value).toLowerCase().search(str.toLowerCase()) >= 0) {
                                return true;
                            }
                        }
                    }
                    return false;
                }

                var results = obj.options.data.filter(function(item) {
                    return test(item);
                });

                // Show items
                createList(results);
            } else {
                // Get remove results
                ajax({
                    url: obj.options.data + str,
                    method: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        // Show items
                        createList(data);
                    }
                });
            }
        }
    }

    // Search timer
    var timer = null;

    // Search methods
    var obj = function(str) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            execute(str);
        }, 500);
    }
    if(options.forceSelect === null) {
        options.forceSelect = true;
    }
    obj.options = {
        data: options.data || null,
        input: options.input || null,
        searchByNode: options.searchByNode || null,
        onselect: options.onselect || null,
        forceSelect: options.forceSelect,
        onsearch: options.onsearch || null,
        onbeforesearch: options.onbeforesearch || null,
    };

    obj.selectIndex = function(item) {
        var id = item.getAttribute('id');
        var text = item.getAttribute('data-text');
        var value = item.getAttribute('data-value');
        var image = item.children[0].src || '';
        // Onselect
        if (typeof(obj.options.onselect) == 'function') {
            obj.options.onselect(obj, text, value, id, image);
        }
        // Close container
        obj.close();
    }

    obj.open = function() {
        el.style.display = 'block';
    }

    obj.close = function() {
        if (timer) {
            clearTimeout(timer);
        }
        // Current terms
        obj.terms = '';
        // Remove results
        container.innerHTML = '';
        // Hide
        el.style.display = '';
    }

    obj.isOpened = function() {
        return el.style.display ? true : false;
    }

    obj.keydown = function(e) {
        if (obj.isOpened()) {
            if (e.key == 'Enter') {
                // Enter
                if (index!==null && container.children[index]) {
                    obj.selectIndex(container.children[index]);
                    e.preventDefault();
                } else {
                    obj.close();
                }
            } else if (e.key === 'ArrowUp') {
                // Up
                if (index!==null && container.children[0]) {
                    container.children[index].classList.remove('selected');
                    if(!obj.options.forceSelect && index === 0) {
                        index = null;
                    } else {
                        index = Math.max(0, index-1);
                        container.children[index].classList.add('selected');
                    }
                }
                e.preventDefault();
            } else if (e.key === 'ArrowDown') {
                // Down
                if(index == null) {
                    index = -1;
                } else {
                    container.children[index].classList.remove('selected');
                }
                if (index < 9 && container.children[index+1]) {
                    index++;
                }
                container.children[index].classList.add('selected');
                e.preventDefault();
            }
        }
    }

    obj.keyup = function(e) {
        if (! obj.options.searchByNode && obj.options.input) {
            if (obj.options.input.tagName === 'DIV') {
                var terms = obj.options.input.innerText;
            } else {
                var terms = obj.options.input.value;
            }
        } else {
            // Current node
            var node = helpers.getNode();
            if (node) {
                var terms = node.innerText;
            }
        }

        if (typeof(obj.options.onbeforesearch) == 'function') {
            var ret = obj.options.onbeforesearch(obj, terms);
            if (ret) {
                terms = ret;
            } else {
                if (ret === false) {
                    // Ignore event
                    return;
                }
            }
        }

        obj(terms);
    }

    obj.blur = function(e) {
        obj.close();
    }

    // Add events
    if (obj.options.input) {
        obj.options.input.addEventListener("keyup", obj.keyup);
        obj.options.input.addEventListener("keydown", obj.keydown);
        obj.options.input.addEventListener("blur", obj.blur);
    }

    // Append element
    var container = document.createElement('div');
    container.classList.add('jsearch_container');
    container.onmousedown = select;
    el.appendChild(container);

    el.classList.add('jsearch');
    el.search = obj;

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/slider.js
function Slider(el, options) {
    var obj = {};
    obj.options = {};
    obj.currentImage = null;

    if (options) {
        obj.options = options;
    }

    // Focus
    el.setAttribute('tabindex', '900')

    // Items
    obj.options.items = [];

    if (! el.classList.contains('jslider')) {
        el.classList.add('jslider');
        el.classList.add('unselectable');

        if (obj.options.height) {
            el.style.minHeight = parseInt(obj.options.height) + 'px';
        }
        if (obj.options.width) {
            el.style.width = parseInt(obj.options.width) + 'px';
        }
        if (obj.options.grid) {
            el.classList.add('jslider-grid');
            var number = el.children.length;
            if (number > 4) {
                el.setAttribute('data-total', number - 4);
            }
            el.setAttribute('data-number', (number > 4 ? 4 : number));
        }

        // Add slider counter
        var counter = document.createElement('div');
        counter.classList.add('jslider-counter');

        // Move children inside
        if (el.children.length > 0) {
            // Keep children items
            for (var i = 0; i < el.children.length; i++) {
                obj.options.items.push(el.children[i]);

                // counter click event
                var item = document.createElement('div');
                item.onclick = function() {
                    var index = Array.prototype.slice.call(counter.children).indexOf(this);
                    obj.show(obj.currentImage = obj.options.items[index]);
                }
                counter.appendChild(item);
            }
        }
        // Add caption
        var caption = document.createElement('div');
        caption.className = 'jslider-caption';

        // Add close buttom
        var controls = document.createElement('div');
        var close = document.createElement('div');
        close.className = 'jslider-close';
        close.innerHTML = '';

        close.onclick = function() {
            obj.close();
        }
        controls.appendChild(caption);
        controls.appendChild(close);
    }

    obj.updateCounter = function(index) {
        for (var i = 0; i < counter.children.length; i ++) {
            if (counter.children[i].classList.contains('jslider-counter-focus')) {
                counter.children[i].classList.remove('jslider-counter-focus');
                break;
            }
        }
        counter.children[index].classList.add('jslider-counter-focus');
    }

    obj.show = function(target) {
        if (! target) {
            var target = el.children[0];
        }

        // Focus element
        el.classList.add('jslider-focus');
        el.classList.remove('jslider-grid');
        el.appendChild(controls);
        el.appendChild(counter);

        // Update counter
        var index = obj.options.items.indexOf(target);
        obj.updateCounter(index);

        // Remove display
        for (var i = 0; i < el.children.length; i++) {
            el.children[i].style.display = '';
        }
        target.style.display = 'block';

        // Is there any previous
        if (target.previousElementSibling) {
            el.classList.add('jslider-left');
        } else {
            el.classList.remove('jslider-left');
        }

        // Is there any next
        if (target.nextElementSibling && target.nextElementSibling.tagName == 'IMG') {
            el.classList.add('jslider-right');
        } else {
            el.classList.remove('jslider-right');
        }

        obj.currentImage = target;

        // Vertical image
        if (obj.currentImage.offsetHeight > obj.currentImage.offsetWidth) {
            obj.currentImage.classList.add('jslider-vertical');
        }

        controls.children[0].innerText = obj.currentImage.getAttribute('title');
    }

    obj.open = function() {
        obj.show();

        // Event
        if (typeof(obj.options.onopen) == 'function') {
            obj.options.onopen(el);
        }
    }

    obj.close = function() {
        // Remove control classes
        el.classList.remove('jslider-focus');
        el.classList.remove('jslider-left');
        el.classList.remove('jslider-right');
        // Show as a grid depending on the configuration
        if (obj.options.grid) {
            el.classList.add('jslider-grid');
        }
        // Remove display
        for (var i = 0; i < el.children.length; i++) {
            el.children[i].style.display = '';
        }
        // Remove controls from the component
        counter.remove();
        controls.remove();
        // Current image
        obj.currentImage = null;
        // Event
        if (typeof(obj.options.onclose) == 'function') {
            obj.options.onclose(el);
        }
    }

    obj.reset = function() {
        el.innerHTML = '';
    }

    obj.next = function() {
        var nextImage = obj.currentImage.nextElementSibling;
        if (nextImage && nextImage.tagName === 'IMG') {
            obj.show(obj.currentImage.nextElementSibling);
        }
    }

    obj.prev = function() {
        if (obj.currentImage.previousElementSibling) {
            obj.show(obj.currentImage.previousElementSibling);
        }
    }

    var mouseUp = function(e) {
        // Open slider
        if (e.target.tagName == 'IMG') {
            obj.show(e.target);
        } else if (! e.target.classList.contains('jslider-close') && ! (e.target.parentNode.classList.contains('jslider-counter') || e.target.classList.contains('jslider-counter'))){
            // Arrow controls
            var offsetX = e.offsetX || e.changedTouches[0].clientX;
            if (e.target.clientWidth - offsetX < 40) {
                // Show next image
                obj.next();
            } else if (offsetX < 40) {
                // Show previous image
                obj.prev();
            }
        }
    }

    if ('ontouchend' in document.documentElement === true) {
        el.addEventListener('touchend', mouseUp);
    } else {
        el.addEventListener('mouseup', mouseUp);
    }

    // Add global events
    el.addEventListener("swipeleft", function(e) {
        obj.next();
        e.preventDefault();
        e.stopPropagation();
    });

    el.addEventListener("swiperight", function(e) {
        obj.prev();
        e.preventDefault();
        e.stopPropagation();
    });

    el.addEventListener('keydown', function(e) {
        if (e.which == 27) {
            obj.close();
        }
    });

    el.slider = obj;

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/tags.js




function Tags(el, options) {
    // Redefine configuration
    if (el.tags) {
        return el.tags.setOptions(options, true);
    }

    var obj = { type:'tags' };
    obj.options = {};

    // Limit
    var limit = function() {
        return obj.options.limit && el.children.length >= obj.options.limit ? true : false;
    }

    // Search helpers
    var search = null;
    var searchContainer = null;

    obj.setOptions = function(options, reset) {
        /**
         * @typedef {Object} defaults
         * @property {(string|Array)} value - Initial value of the compontent
         * @property {number} limit - Max number of tags inside the element
         * @property {string} search - The URL for suggestions
         * @property {string} placeholder - The default instruction text on the element
         * @property {validation} validation - Method to validate the tags
         * @property {requestCallback} onbeforechange - Method to be execute before any changes on the element
         * @property {requestCallback} onchange - Method to be execute after any changes on the element
         * @property {requestCallback} onfocus - Method to be execute when on focus
         * @property {requestCallback} onblur - Method to be execute when on blur
         * @property {requestCallback} onload - Method to be execute when the element is loaded
         */
        var defaults = {
            value: '',
            limit: null,
            search: null,
            placeholder: null,
            validation: null,
            onbeforepaste: null,
            onbeforechange: null,
            onlimit: null,
            onchange: null,
            onfocus: null,
            onblur: null,
            onload: null,
        }

        // Loop through though the default configuration
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                if (typeof(obj.options[property]) == 'undefined' || reset === true) {
                    obj.options[property] = defaults[property];
                }
            }
        }

        // Placeholder
        if (obj.options.placeholder) {
            el.setAttribute('data-placeholder', obj.options.placeholder);
        } else {
            el.removeAttribute('data-placeholder');
        }
        el.placeholder = obj.options.placeholder;

        // Update value
        obj.setValue(obj.options.value);

        // Validate items
        filter();

        // Create search box
        if (obj.options.search) {
            if (! searchContainer) {
                searchContainer = document.createElement('div');
                el.parentNode.insertBefore(searchContainer, el.nextSibling);

                // Create container
                search = Search(searchContainer, {
                    data: obj.options.search,
                    onselect: function(a,b,c) {
                        obj.selectIndex(b,c);
                    }
                });
            }
        } else {
            if (searchContainer) {
                search = null;
                searchContainer.remove();
                searchContainer = null;
            }
        }

        return obj;
    }

    /**
     * Add a new tag to the element
     * @param {(?string|Array)} value - The value of the new element
     */
    obj.add = function(value, focus) {
        if (typeof(obj.options.onbeforechange) == 'function') {
            var ret = obj.options.onbeforechange(el, obj, obj.options.value, value);
            if (ret === false) {
                return false;
            } else {
                if (ret != null) {
                    value = ret;
                }
            }
        }

        // Make sure search is closed
        if (search) {
            search.close();
        }

        if (limit()) {
            if (typeof(obj.options.onlimit) == 'function') {
                obj.options.onlimit(obj, obj.options.limit);
            } else {
                alert(dictionary.translate('You reach the limit number of entries') + ' ' + obj.options.limit);
            }
        } else {
            // Get node
            var node = helpers.getNode();

            if (node && node.parentNode && node.parentNode.classList.contains('jtags') &&
                node.nextSibling && (! (node.nextSibling.innerText && node.nextSibling.innerText.trim()))) {
                div = node.nextSibling;
            } else {
                // Remove not used last item
                if (el.lastChild) {
                    if (! el.lastChild.innerText.trim()) {
                        el.removeChild(el.lastChild);
                    }
                }

                // Mix argument string or array
                if (! value || typeof(value) == 'string') {
                    var div = createElement(value, value, node);
                } else {
                    for (var i = 0; i <= value.length; i++) {
                        if (! limit()) {
                            if (! value[i] || typeof(value[i]) == 'string') {
                                var t = value[i] || '';
                                var v = null;
                            } else {
                                var t = value[i].text;
                                var v = value[i].value;
                            }

                            // Add element
                            var div = createElement(t, v);
                        }
                    }
                }

                // Change
                change();
            }

            // Place caret
            if (focus) {
                setFocus(div);
            }
        }
    }

    obj.setLimit = function(limit) {
        obj.options.limit = limit;
        var n = el.children.length - limit;
        while (el.children.length > limit) {
            el.removeChild(el.lastChild);
        }
    }

    // Remove a item node
    obj.remove = function(node) {
        // Remove node
        node.parentNode.removeChild(node);
        // Make sure element is not blank
        if (! el.children.length) {
            obj.add('', true);
        } else {
            change();
        }
    }

    /**
     * Get all tags in the element
     * @return {Array} data - All tags as an array
     */
    obj.getData = function() {
        var data = [];
        for (var i = 0; i < el.children.length; i++) {
            // Get value
            var text = el.children[i].innerText.replace("\n", "");
            // Get id
            var value = el.children[i].getAttribute('data-value');
            if (! value) {
                value = text;
            }
            // Item
            if (text || value) {
                data.push({ text: text, value: value });
            }
        }
        return data;
    }

    /**
     * Get the value of one tag. Null for all tags
     * @param {?number} index - Tag index number. Null for all tags.
     * @return {string} value - All tags separated by comma
     */
    obj.getValue = function(index) {
        var value = null;

        if (index != null) {
            // Get one individual value
            value = el.children[index].getAttribute('data-value');
            if (! value) {
                value = el.children[index].innerText.replace("\n", "");
            }
        } else {
            // Get all
            var data = [];
            for (var i = 0; i < el.children.length; i++) {
                value = el.children[i].innerText.replace("\n", "");
                if (value) {
                    data.push(obj.getValue(i));
                }
            }
            value = data.join(',');
        }

        return value;
    }

    /**
     * Set the value of the element based on a string separeted by (,|;|\r\n)
     * @param {mixed} value - A string or array object with values
     */
    obj.setValue = function(mixed) {
        if (! mixed) {
            obj.reset();
        } else {
            if (el.value != mixed) {
                if (Array.isArray(mixed)) {
                    obj.add(mixed);
                } else {
                    // Remove whitespaces
                    var text = (''+mixed).trim();
                    // Tags
                    var data = extractTags(text);
                    // Reset
                    el.innerHTML = '';
                    // Add tags to the element
                    obj.add(data);
                }
            }
        }
    }

    /**
     * Reset the data from the element
     */
    obj.reset = function() {
        // Empty class
        el.classList.add('jtags-empty');
        // Empty element
        el.innerHTML = '<div></div>';
        // Execute changes
        change();
    }

    /**
     * Verify if all tags in the element are valid
     * @return {boolean}
     */
    obj.isValid = function() {
        var test = 0;
        for (var i = 0; i < el.children.length; i++) {
            if (el.children[i].classList.contains('jtags_error')) {
                test++;
            }
        }
        return test == 0 ? true : false;
    }

    /**
     * Add one element from the suggestions to the element
     * @param {object} item - Node element in the suggestions container
     */
    obj.selectIndex = function(text, value) {
        var node = helpers.getNode();
        if (node) {
            // Append text to the caret
            node.innerText = text;
            // Set node id
            if (value) {
                node.setAttribute('data-value', value);
            }
            // Remove any error
            node.classList.remove('jtags_error');
            if (! limit()) {
                // Add new item
                obj.add('', true);
            }
        }
    }

    /**
     * Search for suggestions
     * @param {object} node - Target node for any suggestions
     */
    obj.search = function(node) {
        // Search for
        var terms = node.innerText;
    }

    // Destroy tags element
    obj.destroy = function() {
        // Bind events
        el.removeEventListener('mouseup', tagsMouseUp);
        el.removeEventListener('keydown', tagsKeyDown);
        el.removeEventListener('keyup', tagsKeyUp);
        el.removeEventListener('paste', tagsPaste);
        el.removeEventListener('focus', tagsFocus);
        el.removeEventListener('blur', tagsBlur);

        // Remove element
        el.parentNode.removeChild(el);
    }

    var setFocus = function(node) {
        if (el.children.length) {
            var range = document.createRange();
            var sel = window.getSelection();
            if (! node) {
                var node = el.childNodes[el.childNodes.length-1];
            }
            range.setStart(node, node.length)
            range.collapse(true)
            sel.removeAllRanges()
            sel.addRange(range)
            el.scrollLeft = el.scrollWidth;
        }
    }

    var createElement = function(label, value, node) {
        var div = document.createElement('div');
        div.innerHTML = label ? label : '';
        if (value) {
            div.setAttribute('data-value', value);
        }

        if (node && node.parentNode.classList.contains('jtags')) {
            el.insertBefore(div, node.nextSibling);
        } else {
            el.appendChild(div);
        }

        return div;
    }

    var change = function() {
        // Value
        var value = obj.getValue();

        if (value != obj.options.value) {
            obj.options.value = value;
            if (typeof(obj.options.onchange) == 'function') {
                obj.options.onchange(el, obj, obj.options.value);
            }

            // Lemonade JS
            if (el.value != obj.options.value) {
                el.value = obj.options.value;
                if (typeof(el.oninput) == 'function') {
                    el.oninput({
                        type: 'input',
                        target: el,
                        value: el.value
                    });
                }
            }
        }

        filter();
    }

    /**
     * Filter tags
     */
    var filter = function() {
        for (var i = 0; i < el.children.length; i++) {
            if (el.children[i].tagName === 'DIV') {
                // Create label design
                if (!obj.getValue(i)) {
                    el.children[i].classList.remove('jtags_label');
                } else {
                    el.children[i].classList.add('jtags_label');

                    // Validation in place
                    if (typeof (obj.options.validation) == 'function') {
                        if (obj.getValue(i)) {
                            if (!obj.options.validation(el.children[i], el.children[i].innerText, el.children[i].getAttribute('data-value'))) {
                                el.children[i].classList.add('jtags_error');
                            } else {
                                el.children[i].classList.remove('jtags_error');
                            }
                        } else {
                            el.children[i].classList.remove('jtags_error');
                        }
                    } else {
                        el.children[i].classList.remove('jtags_error');
                    }
                }
            }
        }

        isEmpty();
    }

    var isEmpty = function() {
        // Can't be empty
        if (! el.innerText.trim()) {
            if (! el.children.length || el.children[0].tagName === 'BR') {
                el.innerHTML = '';
                setFocus(createElement());
            }
        } else {
            el.classList.remove('jtags-empty');
        }
    }

    /**
     * Extract tags from a string
     * @param {string} text - Raw string
     * @return {Array} data - Array with extracted tags
     */
    var extractTags = function(text) {
        /** @type {Array} */
        var data = [];

        /** @type {string} */
        var word = '';

        // Remove whitespaces
        text = text.trim();

        if (text) {
            for (var i = 0; i < text.length; i++) {
                if (text[i] == ',' || text[i] == ';' || text[i] == '\n') {
                    if (word) {
                        data.push(word.trim());
                        word = '';
                    }
                } else {
                    word += text[i];
                }
            }

            if (word) {
                data.push(word);
            }
        }

        return data;
    }

    /** @type {number} */
    var anchorOffset = 0;

    /**
     * Processing event keydown on the element
     * @param e {object}
     */
    var tagsKeyDown = function(e) {
        // Anchoroffset
        anchorOffset = window.getSelection().anchorOffset;

        // Verify if is empty
        isEmpty();

        // Comma
        if (e.key === 'Tab'  || e.key === ';' || e.key === ',') {
            var n = window.getSelection().anchorOffset;
            if (n > 1) {
                if (limit()) {
                    if (typeof(obj.options.onlimit) == 'function') {
                        obj.options.onlimit(obj, obj.options.limit)
                    }
                } else {
                    obj.add('', true);
                }
            }
            e.preventDefault();
        } else if (e.key == 'Enter') {
            if (! search || ! search.isOpened()) {
                var n = window.getSelection().anchorOffset;
                if (n > 1) {
                    if (! limit()) {
                        obj.add('', true);
                    }
                }
                e.preventDefault();
            }
        } else if (e.key == 'Backspace') {
            // Back space - do not let last item to be removed
            if (el.children.length == 1 && window.getSelection().anchorOffset < 1) {
                e.preventDefault();
            }
        }

        // Search events
        if (search) {
            search.keydown(e);
        }

        // Verify if is empty
        isEmpty();
    }

    /**
     * Processing event keyup on the element
     * @param e {object}
     */
    var tagsKeyUp = function(e) {
        if (e.which == 39) {
            // Right arrow
            var n = window.getSelection().anchorOffset;
            if (n > 1 && n == anchorOffset) {
                obj.add('', true);
            }
        } else if (e.which == 13 || e.which == 38 || e.which == 40) {
            e.preventDefault();
        } else {
            if (search) {
                search.keyup(e);
            }
        }

        filter();
    }

    /**
     * Processing event paste on the element
     * @param e {object}
     */
    var tagsPaste =  function(e) {
        if (e.clipboardData || e.originalEvent.clipboardData) {
            var text = (e.originalEvent || e).clipboardData.getData('text/plain');
        } else if (window.clipboardData) {
            var text = window.clipboardData.getData('Text');
        }

        var data = extractTags(text);

        if (typeof(obj.options.onbeforepaste) == 'function') {
            var ret = obj.options.onbeforepaste(el, obj, data);
            if (ret === false) {
                e.preventDefault();
                return false;
            } else {
                if (ret) {
                    data = ret;
                }
            }
        }

        if (data.length > 1) {
            obj.add(data, true);
            e.preventDefault();
        } else if (data[0]) {
            document.execCommand('insertText', false, data[0])
            e.preventDefault();
        }
    }

    /**
     * Processing event mouseup on the element
     * @param e {object}
     */
    var tagsMouseUp = function(e) {
        if (e.target.parentNode && e.target.parentNode.classList.contains('jtags')) {
            if (e.target.classList.contains('jtags_label') || e.target.classList.contains('jtags_error')) {
                var rect = e.target.getBoundingClientRect();
                if (rect.width - (e.clientX - rect.left) < 16) {
                    obj.remove(e.target);
                }
            }
        }

        // Set focus in the last item
        if (e.target == el) {
            setFocus();
        }
    }

    var tagsFocus = function() {
        if (! el.classList.contains('jtags-focus')) {
            if (! el.children.length || obj.getValue(el.children.length - 1)) {
                if (! limit()) {
                    createElement('');
                }
            }

            if (typeof(obj.options.onfocus) == 'function') {
                obj.options.onfocus(el, obj, obj.getValue());
            }

            el.classList.add('jtags-focus');
        }
    }

    var tagsBlur = function() {
        if (el.classList.contains('jtags-focus')) {
            if (search) {
                search.close();
            }

            for (var i = 0; i < el.children.length - 1; i++) {
                // Create label design
                if (! obj.getValue(i)) {
                    el.removeChild(el.children[i]);
                }
            }

            change();

            el.classList.remove('jtags-focus');

            if (typeof(obj.options.onblur) == 'function') {
                obj.options.onblur(el, obj, obj.getValue());
            }
        }
    }

    var init = function() {
        // Bind events
        if ('touchend' in document.documentElement === true) {
            el.addEventListener('touchend', tagsMouseUp);
        } else {
            el.addEventListener('mouseup', tagsMouseUp);
        }

        el.addEventListener('keydown', tagsKeyDown);
        el.addEventListener('keyup', tagsKeyUp);
        el.addEventListener('paste', tagsPaste);
        el.addEventListener('focus', tagsFocus);
        el.addEventListener('blur', tagsBlur);

        // Editable
        el.setAttribute('contenteditable', true);

        // Prepare container
        el.classList.add('jtags');

        // Initial options
        obj.setOptions(options);

        if (typeof(obj.options.onload) == 'function') {
            obj.options.onload(el, obj);
        }

        // Change methods
        el.change = obj.setValue;

        // Global generic value handler
        el.val = function(val) {
            if (val === undefined) {
                return obj.getValue();
            } else {
                obj.setValue(val);
            }
        }

        el.tags = obj;
    }

    init();

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/upload.js




function Upload(el, options) {
    var obj = {};
    obj.options = {};

    // Default configuration
    var defaults = {
        type: 'image',
        extension: '*',
        input: false,
        minWidth: false,
        maxWidth: null,
        maxHeight: null,
        maxJpegSizeBytes: null, // For example, 350Kb would be 350000
        onchange: null,
        multiple: false,
        remoteParser: null,
    };

    // Loop through our object
    for (var property in defaults) {
        if (options && options.hasOwnProperty(property)) {
            obj.options[property] = options[property];
        } else {
            obj.options[property] = defaults[property];
        }
    }

    // Multiple
    if (obj.options.multiple == true) {
        el.setAttribute('data-multiple', true);
    }

    // Container
    el.content = [];

    // Upload icon
    el.classList.add('jupload');

    if (obj.options.input == true) {
        el.classList.add('input');
    }

    obj.add = function(data) {
        // Reset container for single files
        if (obj.options.multiple == false) {
            el.content = [];
            el.innerText = '';
        }

        // Append to the element
        if (obj.options.type == 'image') {
            var img = document.createElement('img');
            img.setAttribute('src', data.file);
            img.setAttribute('tabindex', -1);
            if (! el.getAttribute('name')) {
                img.className = 'jfile';
                img.content = data;
            }
            el.appendChild(img);
        } else {
            if (data.name) {
                var name = data.name;
            } else {
                var name = data.file;
            }
            var div = document.createElement('div');
            div.innerText = name || obj.options.type;
            div.classList.add('jupload-item');
            div.setAttribute('tabindex', -1);
            el.appendChild(div);
        }

        if (data.content) {
            data.file = helpers.guid();
        }

        // Push content
        el.content.push(data);

        // Onchange
        if (typeof(obj.options.onchange) == 'function') {
            obj.options.onchange(el, data);
        }
    }

    obj.addFromFile = function(file) {
        var type = file.type.split('/');
        if (type[0] == obj.options.type) {
            var readFile = new FileReader();
            readFile.addEventListener("load", function (v) {
                var data = {
                    file: v.srcElement.result,
                    extension: file.name.substr(file.name.lastIndexOf('.') + 1),
                    name: file.name,
                    size: file.size,
                    lastmodified: file.lastModified,
                    content: v.srcElement.result,
                }

                obj.add(data);
            });

            readFile.readAsDataURL(file);
        } else {
            alert(dictionary.translate('This extension is not allowed'));
        }
    }

    obj.addFromUrl = function(src) {
        if (src.substr(0,4) != 'data' && ! obj.options.remoteParser) {
            console.error('remoteParser not defined in your initialization');
        } else {
            // This is to process cross domain images
            if (src.substr(0,4) == 'data') {
                var extension = src.split(';')
                extension = extension[0].split('/');
                var type = extension[0].replace('data:','');
                if (type == obj.options.type) {
                    var data = {
                        file: src,
                        name: '',
                        extension: extension[1],
                        content: src,
                    }
                    obj.add(data);
                } else {
                    alert(obj.options.text.extensionNotAllowed);
                }
            } else {
                var extension = src.substr(src.lastIndexOf('.') + 1);
                // Work for cross browsers
                src = obj.options.remoteParser + src;
                // Get remove content
                ajax({
                    url: src,
                    type: 'GET',
                    dataType: 'blob',
                    success: function(data) {
                        //add(extension[0].replace('data:',''), data);
                    }
                })
            }
        }
    }

    var getDataURL = function(canvas, type) {
        var compression = 0.92;
        var lastContentLength = null;
        var content = canvas.toDataURL(type, compression);
        while (obj.options.maxJpegSizeBytes && type === 'image/jpeg' &&
               content.length > obj.options.maxJpegSizeBytes && content.length !== lastContentLength) {
            // Apply the compression
            compression *= 0.9;
            lastContentLength = content.length;
            content = canvas.toDataURL(type, compression);
        }
        return content;
    }

    var mime = obj.options.type + '/' + obj.options.extension;
    var input = document.createElement('input');
    input.type = 'file';
    input.setAttribute('accept', mime);
    input.onchange = function() {
        for (var i = 0; i < this.files.length; i++) {
            obj.addFromFile(this.files[i]);
        }
    }

    // Allow multiple files
    if (obj.options.multiple == true) {
        input.setAttribute('multiple', true);
    }

    var current = null;

    el.addEventListener("click", function(e) {
        current = null;
        if (! el.children.length || e.target === el) {
            helpers.click(input);
        } else {
            if (e.target.parentNode == el) {
                current = e.target;
            }
        }
    });

    el.addEventListener("dblclick", function(e) {
        helpers.click(input);
    });

    el.addEventListener('dragenter', function(e) {
        el.style.border = '1px dashed #000';
    });

    el.addEventListener('dragleave', function(e) {
        el.style.border = '1px solid #eee';
    });

    el.addEventListener('dragstop', function(e) {
        el.style.border = '1px solid #eee';
    });

    el.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    el.addEventListener('keydown', function(e) {
        if (current && e.which == 46) {
            var index = Array.prototype.indexOf.call(el.children, current);
            if (index >= 0) {
                el.content.splice(index, 1);
                current.remove();
                current = null;
            }
        }
    });

    el.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var html = (e.originalEvent || e).dataTransfer.getData('text/html');
        var file = (e.originalEvent || e).dataTransfer.files;

        if (file.length) {
            for (var i = 0; i < e.dataTransfer.files.length; i++) {
                obj.addFromFile(e.dataTransfer.files[i]);
            }
        } else if (html) {
            if (obj.options.multiple == false) {
                el.innerText = '';
            }

            // Create temp element
            var div = document.createElement('div');
            div.innerHTML = html;

            // Extract images
            var img = div.querySelectorAll('img');

            if (img.length) {
                for (var i = 0; i < img.length; i++) {
                    obj.addFromUrl(img[i].src);
                }
            }
        }

        el.style.border = '1px solid #eee';

        return false;
    });

    el.val = function(val) {
        if (val === undefined) {
            return el.content && el.content.length ? el.content : null;
        } else {
            // Reset
            el.innerText = '';
            el.content = [];

            if (val) {
                if (Array.isArray(val)) {
                    for (var i = 0; i < val.length; i++) {
                        if (typeof(val[i]) == 'string') {
                            obj.add({ file: val[i] });
                        } else {
                            obj.add(val[i]);
                        }
                    }
                } else if (typeof(val) == 'string') {
                    obj.add({ file: val });
                }
            }
        }
    }

    el.upload = el.image = obj;

    return obj;
}

// EXTERNAL MODULE: ./packages/sha512/sha512.js
var sha512 = __webpack_require__(195);
var sha512_default = /*#__PURE__*/__webpack_require__.n(sha512);
;// CONCATENATED MODULE: ./src/jsuites.js




















































var jSuites = {
    /** Current version */
    version: '5.0.0',
    /** Bind new extensions to Jsuites */
    setExtensions: function(o) {
        if (typeof(o) == 'object') {
            var k = Object.keys(o);
            for (var i = 0; i < k.length; i++) {
                jSuites[k[i]] = o[k[i]];
            }
        }
    },
    // Helpers
    tracking: Tracking,
    ...dictionary,
    ...helpers,
    path: Path,
    sorting: Sorting,
    lazyLoading: LazyLoading,
    // Plugins
    ajax: ajax,
    animation: animation,
    calendar: calendar,
    color: Color,
    contextmenu: contextmenu,
    dropdown: dropdown,
    editor: editor,
    floating: floating,
    form: plugins_form,
    mask: mask,
    modal: modal,
    notification: notification,
    palette: palette,
    picker: Picker,
    progressbar: Progressbar,
    rating: Rating,
    search: Search,
    slider: Slider,
    tabs: Tabs,
    tags: Tags,
    toolbar: Toolbar,
    upload: Upload,
    validations: validations,
}

// Legacy
jSuites.image = Upload;
jSuites.image.create = function(data) {
    var img = document.createElement('img');
    img.setAttribute('src', data.file);
    img.className = 'jfile';
    img.setAttribute('tabindex', -1);
    img.content = data;

    return img;
}

jSuites.tracker = plugins_form;
jSuites.loading = animation.loading;
jSuites.sha512 = (sha512_default());


/** Core events */
var Events = function() {

    document.jsuitesComponents = [];

    var find = function(DOMElement, component) {
        if (DOMElement[component.type] && DOMElement[component.type] == component) {
            return true;
        }
        if (DOMElement.component && DOMElement.component == component) {
            return true;
        }
        if (DOMElement.parentNode) {
            return find(DOMElement.parentNode, component);
        }
        return false;
    }

    var isOpened = function(e) {
        if (document.jsuitesComponents && document.jsuitesComponents.length > 0) {
            for (var i = 0; i < document.jsuitesComponents.length; i++) {
                if (document.jsuitesComponents[i] && ! find(e, document.jsuitesComponents[i])) {
                    document.jsuitesComponents[i].close();
                }
            }
        }
    }

    // Width of the border
    var cornerSize = 15;

    // Current element
    var element = null;

    // Controllers
    var editorAction = false;

    // Event state
    var state = {
        x: null,
        y: null,
    }

    // Tooltip element
    var tooltip = document.createElement('div')
    tooltip.classList.add('jtooltip');

    // Events
    var mouseDown = function(e) {
        // Check if this is the floating
        var item = jSuites.findElement(e.target, 'jpanel');
        // Jfloating found
        if (item && ! item.classList.contains("readonly")) {
            // Add focus to the chart container
            item.focus();
            // Keep the tracking information
            var rect = e.target.getBoundingClientRect();
            editorAction = {
                e: item,
                x: e.clientX,
                y: e.clientY,
                w: rect.width,
                h: rect.height,
                d: item.style.cursor,
                resizing: item.style.cursor ? true : false,
                actioned: false,
            }

            // Make sure width and height styling is OK
            if (! item.style.width) {
                item.style.width = rect.width + 'px';
            }

            if (! item.style.height) {
                item.style.height = rect.height + 'px';
            }

            // Remove any selection from the page
            var s = window.getSelection();
            if (s.rangeCount) {
                for (var i = 0; i < s.rangeCount; i++) {
                    s.removeRange(s.getRangeAt(i));
                }
            }

            e.preventDefault();
            e.stopPropagation();
        } else {
            // No floating action found
            editorAction = false;
        }

        // Verify current components tracking
        if (e.changedTouches && e.changedTouches[0]) {
            var x = e.changedTouches[0].clientX;
            var y = e.changedTouches[0].clientY;
        } else {
            var x = e.clientX;
            var y = e.clientY;
        }

        // Which component I am clicking
        var path = e.path || (e.composedPath && e.composedPath());

        // If path available get the first element in the chain
        if (path) {
            element = path[0];
        } else {
            // Try to guess using the coordinates
            if (e.target && e.target.shadowRoot) {
                var d = e.target.shadowRoot;
            } else {
                var d = document;
            }
            // Get the first target element
            element = d.elementFromPoint(x, y);
        }

        isOpened(element);
    }

    var mouseUp = function(e) {
        if (editorAction && editorAction.e) {
            if (typeof(editorAction.e.refresh) == 'function' && state.actioned) {
                editorAction.e.refresh();
            }
            editorAction.e.style.cursor = '';
        }

        // Reset
        state = {
            x: null,
            y: null,
        }

        editorAction = false;
    }

    var mouseMove = function(e) {
        if (editorAction) {
            var x = e.clientX || e.pageX;
            var y = e.clientY || e.pageY;

            // Action on going
            if (! editorAction.resizing) {
                if (state.x == null && state.y == null) {
                    state.x = x;
                    state.y = y;
                }

                var dx = x - state.x;
                var dy = y - state.y;
                var top = editorAction.e.offsetTop + dy;
                var left = editorAction.e.offsetLeft + dx;

                // Update position
                editorAction.e.style.top = top + 'px';
                editorAction.e.style.left = left + 'px';
                editorAction.e.style.cursor = "move";

                state.x = x;
                state.y = y;


                // Update element
                if (typeof(editorAction.e.refresh) == 'function') {
                    state.actioned = true;
                    editorAction.e.refresh('position', top, left);
                }
            } else {
                var width = null;
                var height = null;

                if (editorAction.d == 'e-resize' || editorAction.d == 'ne-resize' || editorAction.d == 'se-resize') {
                    // Update width
                    width = editorAction.w + (x - editorAction.x);
                    editorAction.e.style.width = width + 'px';

                    // Update Height
                    if (e.shiftKey) {
                        var newHeight = (x - editorAction.x) * (editorAction.h / editorAction.w);
                        height = editorAction.h + newHeight;
                        editorAction.e.style.height = height + 'px';
                    } else {
                        var newHeight = false;
                    }
                }

                if (! newHeight) {
                    if (editorAction.d == 's-resize' || editorAction.d == 'se-resize' || editorAction.d == 'sw-resize') {
                        height = editorAction.h + (y - editorAction.y);
                        editorAction.e.style.height = height + 'px';
                    }
                }

                // Update element
                if (typeof(editorAction.e.refresh) == 'function') {
                    state.actioned = true;
                    editorAction.e.refresh('dimensions', width, height);
                }
            }
        } else {
            // Resizing action
            var item = jSuites.findElement(e.target, 'jpanel');
            // Found eligible component
            if (item) {
                if (item.getAttribute('tabindex')) {
                    var rect = item.getBoundingClientRect();
                    if (e.clientY - rect.top < cornerSize) {
                        if (rect.width - (e.clientX - rect.left) < cornerSize) {
                            item.style.cursor = 'ne-resize';
                        } else if (e.clientX - rect.left < cornerSize) {
                            item.style.cursor = 'nw-resize';
                        } else {
                            item.style.cursor = 'n-resize';
                        }
                    } else if (rect.height - (e.clientY - rect.top) < cornerSize) {
                        if (rect.width - (e.clientX - rect.left) < cornerSize) {
                            item.style.cursor = 'se-resize';
                        } else if (e.clientX - rect.left < cornerSize) {
                            item.style.cursor = 'sw-resize';
                        } else {
                            item.style.cursor = 's-resize';
                        }
                    } else if (rect.width - (e.clientX - rect.left) < cornerSize) {
                        item.style.cursor = 'e-resize';
                    } else if (e.clientX - rect.left < cornerSize) {
                        item.style.cursor = 'w-resize';
                    } else {
                        item.style.cursor = '';
                    }
                }
            }
        }
    }

    var mouseOver = function(e) {
        var message = e.target.getAttribute('data-tooltip');
        if (message) {
            // Instructions
            tooltip.innerText = message;

            // Position
            if (e.changedTouches && e.changedTouches[0]) {
                var x = e.changedTouches[0].clientX;
                var y = e.changedTouches[0].clientY;
            } else {
                var x = e.clientX;
                var y = e.clientY;
            }

            tooltip.style.top = y + 'px';
            tooltip.style.left = x + 'px';
            document.body.appendChild(tooltip);
        } else if (tooltip.innerText) {
            tooltip.innerText = '';
            document.body.removeChild(tooltip);
        }
    }

    var dblClick = function(e) {
        var item = jSuites.findElement(e.target, 'jpanel');
        if (item && typeof(item.dblclick) == 'function') {
            // Create edition
            item.dblclick(e);
        }
    }

    var contextMenu = function(e) {
        var item = document.activeElement;
        if (item && typeof(item.contextmenu) == 'function') {
            // Create edition
            item.contextmenu(e);

            e.preventDefault();
            e.stopImmediatePropagation();
        } else {
            // Search for possible context menus
            item = jSuites.findElement(e.target, function(o) {
                return o.tagName && o.getAttribute('aria-contextmenu-id');
            });

            if (item) {
                var o = document.querySelector('#' + item);
                if (! o) {
                    console.error('JSUITES: contextmenu id not found: ' + item);
                } else {
                    o.contextmenu.open(e);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            }
        }
    }

    var keyDown = function(e) {
        var item = document.activeElement;
        if (item) {
            if (e.key == "Delete" && typeof(item.delete) == 'function') {
                item.delete();
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }

        if (document.jsuitesComponents && document.jsuitesComponents.length) {
            if (item = document.jsuitesComponents[document.jsuitesComponents.length - 1]) {
                if (e.key == "Escape" && typeof(item.isOpened) == 'function' && typeof(item.close) == 'function') {
                    if (item.isOpened()) {
                        item.close();
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }
                }
            }
        }
    }

    document.addEventListener('mouseup', mouseUp);
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', mouseOver);
    document.addEventListener('dblclick', dblClick);
    document.addEventListener('keydown', keyDown);
    document.addEventListener('contextmenu', contextMenu);
}

if (typeof(document) !== "undefined" && ! document.jsuitesComponents) {
    Events();
}

/* harmony default export */ var jsuites = (jSuites);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()