O=this.graph.getModel().getParent(y);var U=this.graph.getCellGeometry(y);if(this.graph.getModel().isEdge(O)&&null!=U&&U.relative||this.graph.getModel().isEdge(y))this.textarea.style.outline=mxClient.IS_IE||mxClient.IS_IE11||mxClient.IS_FF&&mxClient.IS_WIN?"gray dotted 1px":""};var A=mxCellEditor.prototype.installListeners;mxCellEditor.prototype.installListeners=function(y){function L(aa,ea){ea.originalNode=aa;aa=aa.firstChild;for(var na=ea.firstChild;null!=aa&&null!=na;)L(aa,na),aa=aa.nextSibling,
na=na.nextSibling;return ea}function O(aa,ea){if(null!=aa)if(ea.originalNode!=aa)U(aa);else for(aa=aa.firstChild,ea=ea.firstChild;null!=aa;){var na=aa.nextSibling;null==ea?U(aa):(O(aa,ea),ea=ea.nextSibling);aa=na}}function U(aa){for(var ea=aa.firstChild;null!=ea;){var na=ea.nextSibling;U(ea);ea=na}1==aa.nodeType&&("BR"===aa.nodeName||null!=aa.firstChild)||3==aa.nodeType&&0!=mxUtils.trim(mxUtils.getTextContent(aa)).length?(3==aa.nodeType&&mxUtils.setTextContent(aa,mxUtils.getTextContent(aa).replace(/\n|\r/g,
"")),1==aa.nodeType&&(aa.removeAttribute("style"),aa.removeAttribute("class"),aa.removeAttribute("width"),aa.removeAttribute("cellpadding"),aa.removeAttribute("cellspacing"),aa.removeAttribute("border"))):aa.parentNode.removeChild(aa)}A.apply(this,arguments);7!==document.documentMode&&8!==document.documentMode&&mxEvent.addListener(this.textarea,"paste",mxUtils.bind(this,function(aa){var ea=L(this.textarea,this.textarea.cloneNode(!0));window.setTimeout(mxUtils.bind(this,function(){null!=this.textarea&&
(0<=this.textarea.innerHTML.indexOf("<o:OfficeDocumentSettings>")||0<=this.textarea.innerHTML.indexOf("\x3c!--[if !mso]>")?O(this.textarea,ea):Graph.removePasteFormatting(this.textarea))}),0)}))};mxCellEditor.prototype.toggleViewMode=function(){var y=this.graph.view.getState(this.editingCell);if(null!=y){var L=null!=y&&"0"!=mxUtils.getValue(y.style,"nl2Br","1"),O=this.saveSelection();if(this.codeViewMode){va=mxUtils.extractTextWithWhitespace(this.textarea.childNodes);0<va.length&&"\n"==va.charAt(va.length-