null!=d.pages?mxUtils.indexOf(d.pages,d.currentPage)+1:1:"pagecount"==J?null!=d.pages?d.pages.length:1:ja.apply(this,arguments)};var ha=f.labelLinkClicked;f.labelLinkClicked=function(J,V,T){var ca=V.getAttribute("href");if(null==ca||!f.isCustomLink(ca)||!mxEvent.isTouchEvent(T)&&mxEvent.isPopupTrigger(T))ha.apply(this,arguments);else{if(!f.isEnabled()||null!=J&&f.isCellLocked(J.cell))f.customLinkClicked(ca),f.getRubberband().reset();mxEvent.consume(T)}};this.editor.getOrCreateFilename=function(){var J=