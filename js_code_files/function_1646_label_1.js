"https://app.diagrams.net/";var C=e.editor.getEditBlankUrl;this.editor.getEditBlankUrl=function(I){I=null!=I?I:"";"1"==urlParams.dev&&(I+=(0<I.length?"&":"?")+"dev=1");return C.apply(this,arguments)};var H=g.addClickHandler;g.addClickHandler=function(I,M,Q){var P=M;M=function(V,W){if(null==W){var q=mxEvent.getSource(V);"a"==q.nodeName.toLowerCase()&&(W=q.getAttribute("href"))}null!=W&&g.isCustomLink(W)&&(mxEvent.isTouchEvent(V)||!mxEvent.isPopupTrigger(V))&&g.customLinkClicked(W)&&mxEvent.consume(V);