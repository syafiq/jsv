this.synchronizeFile(f,c)}))};DrawioFile.prototype.getErrorMessage=function(b){var d=null!=b?null!=b.error?b.error.message:b.message:null;null==d&&null!=b&&b.code==App.ERROR_TIMEOUT&&(d=mxResources.get("timeout"));return d};DrawioFile.prototype.isOverdue=function(){return null!=this.ageStart&&Date.now()-this.ageStart.getTime()>=this.ui.warnInterval};