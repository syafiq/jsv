null,"Moving a file between accounts is not supported yet.")}):this.writeFile(this.getItemURL(e),JSON.stringify({parentReference:f}),"PATCH","application/json",c,l)};OneDriveClient.prototype.insertLibrary=function(e,f,c,l,m){this.insertFile(e,f,c,l,!0,m)};OneDriveClient.prototype.insertFile=function(e,f,c,l,m,t){this.isValidFilename(e)?(m=null!=m?m:!1,this.checkExists(t,e,!0,mxUtils.bind(this,function(y){if(y){y="/me/drive/root";null!=t&&(y=this.getItemURL(t,!0));var C=mxUtils.bind(this,function(z){m?