n.isSelectionEmpty()||mxEvent.isAltDown(v)||mxEvent.isShiftDown(v)||mxEvent.isControlDown(v)||mxClient.IS_MAC&&mxEvent.isMetaDown(v)?k.apply(this,arguments):null}}return g};var d=EditorUi.prototype.extractGraphModelFromHtml;EditorUi.prototype.extractGraphModelFromHtml=function(e){var g=d.apply(this,arguments);if(null==g)try{var k=e.indexOf("&lt;mxfile ");if(0<=k){var n=e.lastIndexOf("&lt;/mxfile&gt;");n>k&&(g=e.substring(k,n+15).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/\\&quot;/g,'"').replace(/\n/g,
""))}else{var u=mxUtils.parseXml(e),v=this.editor.extractGraphModel(u.documentElement,null!=this.pages||"hidden"==this.diagramContainer.style.visibility);g=null!=v?mxUtils.getXml(v):""}}catch(E){}return g};EditorUi.prototype.validateFileData=function(e){if(null!=e&&0<e.length){var g=e.indexOf('<meta charset="utf-8">');0<=g&&(e=e.slice(0,g)+'<meta charset="utf-8"/>'+e.slice(g+23-1,e.length));e=Graph.zapGremlins(e)}return e};EditorUi.prototype.replaceFileData=function(e){e=this.validateFileData(e);