g)}),c,this.ui.getCurrentFile()!=d?d.getData():null,e.scale,e.border)}else A(d.meta.sha,Base64.encode(d.getData()))});l?this.getSha(t,y,z,B,mxUtils.bind(this,function(e){d.meta.sha=e;J()}),c):J()};GitHubClient.prototype.pickLibrary=function(d){this.pickFile(d)};GitHubClient.prototype.pickFolder=function(d){this.showGitHubDialog(!1,d)};GitHubClient.prototype.pickFile=function(d){d=null!=d?d:mxUtils.bind(this,function(f){this.ui.loadFile("H"+encodeURIComponent(f))});this.showGitHubDialog(!0,d)};GitHubClient.prototype.showGitHubDialog=