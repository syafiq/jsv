OneDriveFile.prototype.saveFile=function(b,d,f,c,l,m){if(!this.isEditable())null!=f&&f();else if(!this.savingFile)if(this.getTitle()==b){var t=mxUtils.bind(this,function(){try{this.savingFileTime=new Date;this.setShadowModified(!1);this.savingFile=!0;var y=m||this.constructor!=OneDriveFile||"manual"!=DrawioFile.SYNC&&"auto"!=DrawioFile.SYNC?null:this.getCurrentEtag(),B=this.meta;null!=this.sync&&this.sync.fileSaving();this.ui.oneDrive.saveFile(this,mxUtils.bind(this,function(z,A){this.setModified(this.getShadowModified());
this.savingFile=!1;this.meta=z;this.fileSaved(A,B,mxUtils.bind(this,function(){this.contentChanged();null!=f&&f()}),c)}),mxUtils.bind(this,function(z,A){try{this.savingFile=!1,this.isConflict(A)?(this.inConflictState=!0,null!=this.sync?(this.savingFile=!0,this.sync.fileConflict(null,mxUtils.bind(this,function(){window.setTimeout(mxUtils.bind(this,function(){this.updateFileData();t()}),100+500*Math.random())}),mxUtils.bind(this,function(){this.savingFile=!1;null!=c&&c()}))):null!=c&&c()):null!=c&&
c(z)}catch(J){if(this.savingFile=!1,null!=c)c(J);else throw J;}}),y)}catch(z){if(this.savingFile=!1,null!=c)c(z);else throw z;}});t()}else this.savingFileTime=new Date,this.setShadowModified(!1),this.savingFile=!0,this.ui.oneDrive.insertFile(b,this.getData(),mxUtils.bind(this,function(y){this.setModified(this.getShadowModified());this.savingFile=!1;null!=f&&f();this.ui.fileLoaded(y)}),mxUtils.bind(this,function(){this.savingFile=!1;null!=c&&c()}))};