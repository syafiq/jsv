EditorUi.prototype.showImageDialog=function(b,e,k,l){l=this.editor.graph.cellEditor;var C=l.saveSelection(),p=mxUtils.prompt(b,e);l.restoreSelection(C);if(null!=p&&0<p.length){var D=new Image;D.onload=function(){k(p,D.width,D.height)};D.onerror=function(){k(null);mxUtils.alert(mxResources.get("fileNotFound"))};D.src=p}else k(null)};EditorUi.prototype.showLinkDialog=function(b,e,k){b=new LinkDialog(this,b,e,k);this.showDialog(b.container,420,90,!0,!0);b.init()};