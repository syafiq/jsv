else throw z;}}),l)};DriveClient.prototype.isGoogleRealtimeMimeType=function(f){return null!=f&&"application/vnd.jgraph.mxfile."==f.substring(0,30)};DriveClient.prototype.getXmlFile=function(f,c,l,m,t){try{var y={Authorization:"Bearer "+b},B=f.downloadUrl;if(null==B)null!=l&&l({message:mxResources.get("exportOptionsDisabledDetails")});else{var z=0,A=mxUtils.bind(this,function(){this.ui.editor.loadUrl(B,mxUtils.bind(this,function(J){try{if(null==J)l({message:mxResources.get("invalidOrMissingFile")});