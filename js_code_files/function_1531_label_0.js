message:this.getErrorMessage(e,mxResources.get("error")+" "+e.getStatus())})}),mxUtils.bind(this,function(d){window.clearTimeout(A);z&&c(d)}))}),y=mxUtils.bind(this,function(C){null==this.user?this.updateUser(function(){y(!0)},c,C):t(C)});null==b?this.authenticate(function(){y(!0)},c):y(!1)};GitHubClient.prototype.getLibrary=function(e,f,c){this.getFile(e,f,c,!0)};GitHubClient.prototype.getSha=function(e,f,c,l,m,t,y){var C="&t="+(new Date).getTime();e=new mxXmlRequest(this.baseUrl+"/repos/"+e+"/"+
f+"/contents/"+c+"?ref="+l+C,null,"HEAD");this.executeRequest(e,mxUtils.bind(this,function(z){try{m(z.request.getResponseHeader("Etag").match(/"([^"]+)"/)[1])}catch(A){t(A)}}),t,null,y)};GitHubClient.prototype.getFile=function(e,f,c,l,m){l=null!=l?l:!1;var t=e.split("/"),y=t[0],C=t[1],z=t[2];e=t.slice(3,t.length).join("/");t=/\.png$/i.test(e);if(!m&&(/\.v(dx|sdx?)$/i.test(e)||/\.gliffy$/i.test(e)||/\.pdf$/i.test(e)||!this.ui.useCanvasForExport&&t))if(null!=b){m=this.baseUrl+"/repos/"+y+"/"+C+"/contents/"+