EditorUi.prototype.openLocalFile=function(d,f,g,u,x){var A=this.getCurrentFile(),H=mxUtils.bind(this,function(){window.openFile=null;if(null==f&&null!=this.getCurrentFile()&&this.isDiagramEmpty()){var P=mxUtils.parseXml(d);null!=P&&(this.editor.setGraphXml(P.documentElement),this.editor.graph.selectAll())}else this.fileLoaded(new LocalFile(this,d,f||this.defaultFilename,g,u,x))});if(null!=d&&0<d.length)null==A||!A.isModified()&&(mxClient.IS_CHROMEAPP||EditorUi.isElectronApp||null!=u)?H():(mxClient.IS_CHROMEAPP||
EditorUi.isElectronApp||null!=u)&&null!=A&&A.isModified()?this.confirm(mxResources.get("allChangesLost"),null,H,mxResources.get("cancel"),mxResources.get("discardChanges")):(window.openFile=new OpenFile(function(){window.openFile=null}),window.openFile.setData(d,f),window.openWindow(this.getUrl(),null,mxUtils.bind(this,function(){null!=A&&A.isModified()?this.confirm(mxResources.get("allChangesLost"),null,H,mxResources.get("cancel"),mxResources.get("discardChanges")):H()})));else throw Error(mxResources.get("notADiagramFile"));
};EditorUi.prototype.getBasenames=function(){var d={};if(null!=this.pages)for(var f=0;f<this.pages.length;f++)this.updatePageRoot(this.pages[f]),this.addBasenamesForCell(this.pages[f].root,d);else this.addBasenamesForCell(this.editor.graph.model.getRoot(),d);f=[];for(var g in d)f.push(g);return f};EditorUi.prototype.addBasenamesForCell=function(d,f){function g(H){if(null!=H){var P=H.lastIndexOf(".");0<P&&(H=H.substring(P+1,H.length));null==f[H]&&(f[H]=!0)}}var u=this.editor.graph,x=u.getCellStyle(d);