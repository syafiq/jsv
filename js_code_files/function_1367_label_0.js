function(e,f){try{var c=JSON.parse(e.getText());null!=c&&null!=c.message&&(f=c.message)}catch(l){}return f};GitHubClient.prototype.showAuthorizeDialog=function(e,f){this.ui.showError(mxResources.get("accessDenied"),mxResources.get("authorizationRequired"),mxResources.get("help"),mxUtils.bind(this,function(){this.ui.openLink("https://www.diagrams.net/blog/single-repository-diagrams")}),e,mxResources.get("authorize"),mxUtils.bind(this,function(){this.ui.openLink("test.draw.io"==window.location.hostname?
"https://github.com/apps/diagrams-net-app-test":"https://github.com/apps/draw-io-app")}),mxResources.get("cancel"),f,480,null,!1)};GitHubClient.prototype.executeRequest=function(e,f,c,l,m){var t=mxUtils.bind(this,function(C){var z=!0,A=window.setTimeout(mxUtils.bind(this,function(){z=!1;c({code:App.ERROR_TIMEOUT,retry:y})}),this.ui.timeout),J=this.authToken+" "+b;e.setRequestHeaders=function(d,g){d.setRequestHeader("Authorization",J)};e.send(mxUtils.bind(this,function(){window.clearTimeout(A);var d=