DropboxFile.prototype.getRevisions=function(b,e){var f=this.ui.dropbox.client.filesListRevisions({path:this.stat.path_lower,limit:100});f.then(mxUtils.bind(this,function(c){try{for(var l=[],m=c.entries.length-1;0<=m;m--)mxUtils.bind(this,function(t){l.push({modifiedDate:t.client_modified,fileSize:t.size,getXml:mxUtils.bind(this,function(y,C){this.ui.dropbox.readFile({path:this.stat.path_lower,rev:t.rev},y,C)}),getUrl:mxUtils.bind(this,function(y){return this.ui.getUrl(window.location.pathname+"?rev="+
t.rev+"&chrome=0&nav=1&layers=1&edit=_blank"+(null!=y?"&page="+y:""))+window.location.hash})})})(c.entries[m]);b(l)}catch(t){e(t)}}));f["catch"](function(c){e(c)})};DropboxFile.prototype.getLatestVersion=function(b,e){this.ui.dropbox.getFile(this.getId(),b,e)};DropboxFile.prototype.updateDescriptor=function(b){this.stat=b.stat};DropboxFile.prototype.save=function(b,e,f,c,l){this.doSave(this.getTitle(),b,e,f,c,l)};DropboxFile.prototype.saveAs=function(b,e,f){this.doSave(b,!1,e,f)};