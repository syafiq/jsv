!0,z=window.setTimeout(mxUtils.bind(this,function(){C=!1;c({code:App.ERROR_TIMEOUT})}),this.ui.timeout),A=this.client.filesGetMetadata({path:"/"+e.path.substring(1),include_deleted:!1});A.then(mxUtils.bind(this,function(J){}));A["catch"](function(J){window.clearTimeout(z);C&&null!=J&&409==J.status&&(C=!1,c({message:mxResources.get("fileNotFound")}))});A=this.client.filesDownload(e);A.then(mxUtils.bind(this,function(J){window.clearTimeout(z);if(C){C=!1;try{var d=new FileReader;d.onload=mxUtils.bind(this,