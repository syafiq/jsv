0;g<c.length;g++)mxUtils.bind(this,function(n){var q=new FileReader;q.onload=mxUtils.bind(this,function(p){try{this.openFileHandle(p.target.result,n.name,n,e)}catch(y){this.handleError(y)}});q.onerror=mxUtils.bind(this,function(p){this.spinner.stop();this.handleError(p);window.openFile=null});"image"!==n.type.substring(0,5)&&"application/pdf"!==n.type||"image/svg"===n.type.substring(0,9)?q.readAsText(n):q.readAsDataURL(n)})(c[g])};EditorUi.prototype.openLocalFile=function(c,e,g,n,q){var p=this.getCurrentFile(),
y=mxUtils.bind(this,function(){window.openFile=null;if(null==e&&null!=this.getCurrentFile()&&this.isDiagramEmpty()){var B=mxUtils.parseXml(c);null!=B&&(this.editor.setGraphXml(B.documentElement),this.editor.graph.selectAll())}else this.fileLoaded(new LocalFile(this,c,e||this.defaultFilename,g,n,q))});if(null!=c&&0<c.length)null==p||!p.isModified()&&(mxClient.IS_CHROMEAPP||EditorUi.isElectronApp||null!=n)?y():(mxClient.IS_CHROMEAPP||EditorUi.isElectronApp||null!=n)&&null!=p&&p.isModified()?this.confirm(mxResources.get("allChangesLost"),
null,y,mxResources.get("cancel"),mxResources.get("discardChanges")):(window.openFile=new OpenFile(function(){window.openFile=null}),window.openFile.setData(c,e),window.openWindow(this.getUrl(),null,mxUtils.bind(this,function(){null!=p&&p.isModified()?this.confirm(mxResources.get("allChangesLost"),null,y,mxResources.get("cancel"),mxResources.get("discardChanges")):y()})));else throw Error(mxResources.get("notADiagramFile"));};EditorUi.prototype.getBasenames=function(){var c={};if(null!=this.pages)for(var e=