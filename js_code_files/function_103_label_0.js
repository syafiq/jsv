na=na.nextSibling;return ea}function O(aa,ea){if(null!=aa)if(ea.originalNode!=aa)U(aa);else for(aa=aa.firstChild,ea=ea.firstChild;null!=aa;){var na=aa.nextSibling;null==ea?U(aa):(O(aa,ea),ea=ea.nextSibling);aa=na}}function U(aa){for(var ea=aa.firstChild;null!=ea;){var na=ea.nextSibling;U(ea);ea=na}1==aa.nodeType&&("BR"===aa.nodeName||null!=aa.firstChild)||3==aa.nodeType&&0!=mxUtils.trim(mxUtils.getTextContent(aa)).length?(3==aa.nodeType&&mxUtils.setTextContent(aa,mxUtils.getTextContent(aa).replace(/\n|\r/g,
"")),1==aa.nodeType&&(aa.removeAttribute("style"),aa.removeAttribute("class"),aa.removeAttribute("width"),aa.removeAttribute("cellpadding"),aa.removeAttribute("cellspacing"),aa.removeAttribute("border"))):aa.parentNode.removeChild(aa)}A.apply(this,arguments);7!==document.documentMode&&8!==document.documentMode&&mxEvent.addListener(this.textarea,"paste",mxUtils.bind(this,function(aa){var ea=L(this.textarea,this.textarea.cloneNode(!0));window.setTimeout(mxUtils.bind(this,function(){null!=this.textarea&&