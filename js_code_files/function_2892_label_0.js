l&&(401===t.getStatus()?c?f({message:mxResources.get("accessDenied")}):(this.logout(),this.authenticate(mxUtils.bind(this,function(){this.updateUser(e,f,!0)}),f)):200>t.getStatus()||300<=t.getStatus()?f({message:mxResources.get("accessDenied")}):(this.setUser(this.createUser(JSON.parse(t.getText()))),e()))}),f)};GitHubClient.prototype.createUser=function(e){return new DrawioUser(e.id,e.email,e.name)};GitHubClient.prototype.authenticate=function(e,f){(new mxXmlRequest(this.redirectUri+"?getState=1",
null,"GET")).send(mxUtils.bind(this,function(c){200<=c.getStatus()&&299>=c.getStatus()?this.authenticateStep2(c.getText(),e,f):null!=f&&f(c)}),f)};GitHubClient.prototype.authenticateStep2=function(e,f,c){if(null==window.onGitHubCallback){var l=mxUtils.bind(this,function(){var m=!0;null!=this.getPersistentToken(!0)?(new mxXmlRequest(this.redirectUri+"?state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname+"&token="+e),null,"GET")).send(mxUtils.bind(this,function(t){200<=