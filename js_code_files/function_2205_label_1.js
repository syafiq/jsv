function(d,f,c,l,m,t,y,B,z){t.length>=this.maxFileSize?z({message:mxResources.get("drawingTooLarge")+" ("+this.ui.formatFileSize(t.length)+" / 1 MB)"}):(c={path:l,branch:decodeURIComponent(c),message:m,content:t},null!=y&&(c.sha=y),d=new mxXmlRequest(this.baseUrl+"/repos/"+d+"/"+f+"/contents/"+l,JSON.stringify(c),"PUT"),this.executeRequest(d,mxUtils.bind(this,function(A){B(A)}),mxUtils.bind(this,function(A){404==A.code&&(A.helpLink=this.baseHostUrl+"/settings/connections/applications/"+this.clientId,
A.code=null);z(A)})))};GitHubClient.prototype.checkExists=function(d,f,c){var l=d.split("/"),m=l[0],t=l[1],y=l[2];d=l.slice(3,l.length).join("/");this.getSha(m,t,d,y,mxUtils.bind(this,function(B){if(f){var z=this.ui.spinner.pause();this.ui.confirm(mxResources.get("replaceIt",[d]),function(){z();c(!0,B)},function(){z();c(!1)})}else this.ui.spinner.stop(),this.ui.showError(mxResources.get("error"),mxResources.get("fileExists"),mxResources.get("ok"),function(){c(!1)})}),mxUtils.bind(this,function(B){c(!0)}),