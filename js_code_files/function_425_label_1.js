e,f,p);this.saveData(n,q,c.substring(c.lastIndexOf(",")+1),"image/"+f,!0)};EditorUi.prototype.isLocalFileSave=function(){return"remote"!=urlParams.save&&(mxClient.IS_IE||"undefined"!==typeof window.Blob&&"undefined"!==typeof window.URL)&&9!=document.documentMode&&8!=document.documentMode&&7!=document.documentMode||this.isOfflineApp()||mxClient.IS_IOS};EditorUi.prototype.showTextDialog=function(c,e){c=new TextareaDialog(this,c,e,null,null,mxResources.get("close"));this.showDialog(c.container,620,460,