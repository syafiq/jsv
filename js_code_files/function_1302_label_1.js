DrawioFilePuller.prototype.start=function(b){var d=mxUtils.bind(this,function(){this.sync.lastModified=this.file.getLastModifiedDate();this.sync.updateStatus()});this.intId=setInterval(mxUtils.bind(this,function(){this.file.getLatestVersionId(mxUtils.bind(this,function(f){f!=this.file.getCurrentRevisionId()?this.file.getLatestVersion(mxUtils.bind(this,function(c){this.file.mergeFile(c,d)}),mxUtils.bind(this,function(){})):d()}),mxUtils.bind(this,function(){}))}),b);this._isConnected=!0};