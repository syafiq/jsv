GitHubClient.prototype.maxFileSize=1E6;GitHubClient.prototype.authToken="token";GitHubClient.prototype.setToken=function(d){b=d};GitHubClient.prototype.updateUser=function(d,f,c){var l=!0,m=window.setTimeout(mxUtils.bind(this,function(){l=!1;f({code:App.ERROR_TIMEOUT,message:mxResources.get("timeout")})}),this.ui.timeout),t=new mxXmlRequest(this.baseUrl+"/user",null,"GET"),y=this.authToken+" "+b;t.setRequestHeaders=function(B,z){B.setRequestHeader("Authorization",y)};t.send(mxUtils.bind(this,function(){window.clearTimeout(m);