mxClient.IS_IE||mxClient.IS_IE11||mxClient.IS_FF&&mxClient.IS_WIN?"gray dotted 1px":""};var N=mxCellEditor.prototype.installListeners;mxCellEditor.prototype.installListeners=function(t){function z(G,K){K.originalNode=G;G=G.firstChild;for(var W=K.firstChild;null!=G&&null!=W;)z(G,W),G=G.nextSibling,W=W.nextSibling;return K}function A(G,K){if(null!=G)if(K.originalNode!=G)D(G);else for(G=G.firstChild,K=K.firstChild;null!=G;){var W=G.nextSibling;null==K?D(G):(A(G,K),K=K.nextSibling);G=W}}function D(G){for(var K=
G.firstChild;null!=K;){var W=K.nextSibling;D(K);K=W}1==G.nodeType&&("BR"===G.nodeName||null!=G.firstChild)||3==G.nodeType&&0!=mxUtils.trim(mxUtils.getTextContent(G)).length?(3==G.nodeType&&mxUtils.setTextContent(G,mxUtils.getTextContent(G).replace(/\n|\r/g,"")),1==G.nodeType&&(G.removeAttribute("style"),G.removeAttribute("class"),G.removeAttribute("width"),G.removeAttribute("cellpadding"),G.removeAttribute("cellspacing"),G.removeAttribute("border"))):G.parentNode.removeChild(G)}N.apply(this,arguments);
7!==document.documentMode&&8!==document.documentMode&&mxEvent.addListener(this.textarea,"paste",mxUtils.bind(this,function(G){var K=z(this.textarea,this.textarea.cloneNode(!0));window.setTimeout(mxUtils.bind(this,function(){null!=this.textarea&&(0<=this.textarea.innerHTML.indexOf("<o:OfficeDocumentSettings>")||0<=this.textarea.innerHTML.indexOf("\x3c!--[if !mso]>")?A(this.textarea,K):Graph.removePasteFormatting(this.textarea))}),0)}))};mxCellEditor.prototype.toggleViewMode=function(){var t=this.graph.view.getState(this.editingCell);