DriveFile.prototype.getComments=function(b,d){function f(l,m,t){if(m.deleted)return null;t=new DriveComment(l,m.commentId||m.replyId,m.content,m.modifiedDate,m.createdDate,"resolved"==m.status,m.author.isAuthenticatedUser?c:new DrawioUser(m.author.permissionId,m.author.emailAddress,m.author.displayName,m.author.picture.url),t);for(var y=0;null!=m.replies&&y<m.replies.length;y++)t.addReplyDirect(f(l,m.replies[y],m.commentId));return t}var c=this.ui.getCurrentUser();this.ui.drive.executeRequest({url:"/files/"+