c,l){var m="/me/drive/root";null!=e&&(m=this.getItemURL(e,!0));this.executeRequest(this.baseUrl+m+"/children/"+encodeURIComponent(f),mxUtils.bind(this,function(t){404==t.getStatus()?l(!0):c?(this.ui.spinner.stop(),this.ui.confirm(mxResources.get("replaceIt",[f]),function(){l(!0)},function(){l(!1)})):(this.ui.spinner.stop(),this.ui.showError(mxResources.get("error"),mxResources.get("fileExists"),mxResources.get("ok"),function(){l(!1)}))}),function(t){l(!1)},!0)};OneDriveClient.prototype.saveFile=function(e,
f,c,l){try{var m=e.getData(),t=mxUtils.bind(this,function(C){var z=mxUtils.bind(this,function(J){f(J,m)}),A=this.getItemURL(e.getId());4E6<=C.length?this.writeLargeFile(A,C,z,c,l):this.writeFile(A+"/content/",C,"PUT",null,z,c,l)});if(this.ui.useCanvasForExport&&/(\.png)$/i.test(e.meta.name)){var y=this.ui.getPngFileProperties(this.ui.fileNode);this.ui.getEmbeddedPng(mxUtils.bind(this,function(C){t(this.ui.base64ToBlob(C,"image/png"))}),c,this.ui.getCurrentFile()!=e?m:null,y.scale,y.border)}else t(m)}catch(C){c(C)}};