mxUtils.bind(this,function(){0===T&&(c=W.full_path,l=U.path,t="",E(null,!0))})));z.appendChild(L)})(q[D])}}));x()}else x(),mxUtils.write(z,mxResources.get("noFiles"));100==Q.length&&(z.appendChild(n),u=function(){z.scrollTop>=z.scrollHeight-z.offsetHeight&&G()},mxEvent.addListener(z,"scroll",u))}),k)}}))});b?this.user?C():this.updateUser(function(){C()},k,!0):this.authenticate(mxUtils.bind(this,function(){this.updateUser(function(){C()},k,!0)}),k)};GitLabClient.prototype.logout=function(){this.ui.editor.loadUrl(this.redirectUri+
"?doLogout=1&state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname));this.clearPersistentToken();this.setUser(null);b=null;this.setToken(null)}})();DrawioComment=function(b,d,f,c,l,m,t){this.file=b;this.id=d;this.content=f;this.modifiedDate=c;this.createdDate=l;this.isResolved=m;this.user=t;this.replies=[]};DrawioComment.prototype.addReplyDirect=function(b){null!=b&&this.replies.push(b)};DrawioComment.prototype.addReply=function(b,d,f,c,l){d()};DrawioComment.prototype.editComment=function(b,d,f){d()};DrawioComment.prototype.deleteComment=function(b,d){b()};DriveComment=function(b,d,f,c,l,m,t,y){DrawioComment.call(this,b,d,f,c,l,m,t);this.pCommentId=y};mxUtils.extend(DriveComment,DrawioComment);DriveComment.prototype.addReply=function(b,d,f,c,l){b={content:b.content};c?b.verb="resolve":l&&(b.verb="reopen");this.file.ui.drive.executeRequest({url:"/files/"+this.file.getId()+"/comments/"+this.id+"/replies",params:b,method:"POST"},mxUtils.bind(this,function(m){d(m.replyId)}),f)};