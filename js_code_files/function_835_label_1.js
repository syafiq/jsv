function(){return this.editor.isExportToCanvas()};EditorUi.prototype.createImageDataUri=function(d,f,g,v){d=d.toDataURL("image/"+g);if(null!=d&&6<d.length)null!=f&&(d=Editor.writeGraphModelToPng(d,"tEXt","mxfile",encodeURIComponent(f))),0<v&&(d=Editor.writeGraphModelToPng(d,"pHYs","dpi",v));else throw{message:mxResources.get("unknownError")};return d};EditorUi.prototype.saveCanvas=function(d,f,g,v,x){var A="jpeg"==g?"jpg":g;v=this.getBaseFilename(v)+(null!=f?".drawio":"")+"."+A;d=this.createImageDataUri(d,
f,g,x);this.saveData(v,A,d.substring(d.lastIndexOf(",")+1),"image/"+g,!0)};EditorUi.prototype.isLocalFileSave=function(){return"remote"!=urlParams.save&&(mxClient.IS_IE||"undefined"!==typeof window.Blob&&"undefined"!==typeof window.URL)&&9!=document.documentMode&&8!=document.documentMode&&7!=document.documentMode||this.isOfflineApp()||mxClient.IS_IOS};EditorUi.prototype.showTextDialog=function(d,f){d=new TextareaDialog(this,d,f,null,null,mxResources.get("close"));this.showDialog(d.container,620,460,