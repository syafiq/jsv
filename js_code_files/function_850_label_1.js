this.getId()+"/comments"},mxUtils.bind(this,function(l){for(var m=[],t=0;t<l.items.length;t++){var y=f(this,l.items[t]);null!=y&&m.push(y)}b(m)}),d)};DriveFile.prototype.addComment=function(b,d,f){b={content:b.content};this.ui.drive.executeRequest({url:"/files/"+this.getId()+"/comments",method:"POST",params:b},mxUtils.bind(this,function(c){d(c.commentId)}),f)};DriveFile.prototype.canReplyToReplies=function(){return!1};DriveFile.prototype.canComment=function(){return this.desc.canComment};