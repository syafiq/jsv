RemoteLibrary.prototype.saveAs=function(b,f,k){};RemoteLibrary.prototype.updateFileData=function(){};RemoteLibrary.prototype.open=function(){};UrlLibrary=function(b,f,k){StorageFile.call(this,b,f,k);b=k;f=b.lastIndexOf("/");0<=f&&(b=b.substring(f+1));this.fname=b};mxUtils.extend(UrlLibrary,StorageFile);UrlLibrary.prototype.getHash=function(){return"U"+encodeURIComponent(this.title)};UrlLibrary.prototype.getTitle=function(){return this.fname};UrlLibrary.prototype.isAutosave=function(){return!1};UrlLibrary.prototype.isEditable=function(b,f,k){return!1};UrlLibrary.prototype.saveAs=function(b,f,k){};UrlLibrary.prototype.open=function(){};EmbedFile=function(b,f,k){DrawioFile.call(this,b,f);this.desc=k||{};this.mode=App.MODE_EMBED};mxUtils.extend(EmbedFile,DrawioFile);EmbedFile.prototype.getMode=function(){return this.mode};EmbedFile.prototype.getTitle=function(){return this.desc.title||""};/*