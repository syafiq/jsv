DrawioFile.prototype.fileSaved=function(b,d,f,c,l){this.lastSaved=new Date;this.ageStart=null;try{this.stats.saved++;this.invalidChecksum=this.inConflictState=!1;var m=this.ui.getPagesForXml(b);null==this.sync||this.isOptimisticSync()?(this.setShadowPages(m),null!=this.sync&&(this.sync.lastModified=this.getLastModifiedDate(),this.sync.resetUpdateStatusThread(),this.isRealtime()&&this.sync.scheduleCleanup()),null!=f&&f()):this.sync.fileSaved(m,d,f,c,l)}catch(B){this.invalidChecksum=this.inConflictState=
!0;this.descriptorChanged();null!=c&&c(B);try{if(this.errorReportsEnabled)this.sendErrorReport("Error in fileSaved",null,B);else{var t=this.getCurrentUser(),y=null!=t?t.id:"unknown";EditorUi.logError("Error in fileSaved",null,this.getMode()+"."+this.getId(),y,B)}}catch(z){}}EditorUi.debug("DrawioFile.fileSaved",[this],"savedData",[b],"inConflictState",this.inConflictState,"invalidChecksum",this.invalidChecksum)};