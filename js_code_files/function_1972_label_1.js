g,k,u);this.saveData(n,v,e.substring(e.lastIndexOf(",")+1),"image/"+k,!0)};EditorUi.prototype.isLocalFileSave=function(){return"remote"!=urlParams.save&&(mxClient.IS_IE||"undefined"!==typeof window.Blob&&"undefined"!==typeof window.URL)&&9!=document.documentMode&&8!=document.documentMode&&7!=document.documentMode||this.isOfflineApp()||mxClient.IS_IOS};EditorUi.prototype.showTextDialog=function(e,g){e=new TextareaDialog(this,e,g,null,null,mxResources.get("close"));this.showDialog(e.container,620,460,