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