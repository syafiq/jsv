function(){this.authenticate(this.emptyFn,this.emptyFn,!0)}),900*d))};OneDriveClient.prototype.authenticate=function(d,f,c){if(this.isExtAuth)window.parent.oneDriveAuth(mxUtils.bind(this,function(l){this.updateAuthInfo(l,!0,null==this.endpointHint,d,f)}),f,null!=window.urlParams&&"1"==urlParams.odAuthCancellable);else(new mxXmlRequest(this.redirectUri+"?getState=1",null,"GET")).send(mxUtils.bind(this,function(l){200<=l.getStatus()&&299>=l.getStatus()?this.authenticateStep2(l.getText(),d,f,c):null!=
f&&f(l)}),f)};OneDriveClient.prototype.updateAuthInfo=function(d,f,c,l,m){c&&this.setUser(null);b=d.access_token;delete d.access_token;d.expiresOn=Date.now()+1E3*d.expires_in;this.tokenExpiresOn=d.expiresOn;d.remember=f;this.setPersistentToken(JSON.stringify(d),!f);this.resetTokenRefresh(d.expires_in);c?this.getAccountTypeAndEndpoint(mxUtils.bind(this,function(){l()}),m):l()};OneDriveClient.prototype.authenticateStep2=function(d,f,c,l){if(null==window.onOneDriveCallback){var m=mxUtils.bind(this,function(){var t=