v.isSelectionEmpty()||mxEvent.isAltDown(A)||mxEvent.isShiftDown(A)||mxEvent.isControlDown(A)||mxClient.IS_MAC&&mxEvent.isMetaDown(A)?g.apply(this,arguments):null}}return f};var e=EditorUi.prototype.extractGraphModelFromHtml;EditorUi.prototype.extractGraphModelFromHtml=function(d){var f=e.apply(this,arguments);if(null==f)try{var g=d.indexOf("&lt;mxfile ");if(0<=g){var v=d.lastIndexOf("&lt;/mxfile&gt;");v>g&&(f=d.substring(g,v+15).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/\\&quot;/g,'"').replace(/\n/g,
""))}else{var x=mxUtils.parseXml(d),A=this.editor.extractGraphModel(x.documentElement,null!=this.pages||"hidden"==this.diagramContainer.style.visibility);f=null!=A?mxUtils.getXml(A):""}}catch(J){}return f};EditorUi.prototype.validateFileData=function(d){if(null!=d&&0<d.length){var f=d.indexOf('<meta charset="utf-8">');0<=f&&(d=d.slice(0,f)+'<meta charset="utf-8"/>'+d.slice(f+23-1,d.length));d=Graph.zapGremlins(d)}return d};EditorUi.prototype.replaceFileData=function(d){d=this.validateFileData(d);