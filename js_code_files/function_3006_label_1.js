if(O){f.saveLevel=6;try{f.isConflict(R)?this.executeRequest({url:"/files/"+f.getId()+"?supportsAllDrives=true&fields="+this.catchupFields},mxUtils.bind(this,function(X){f.saveLevel=7;try{if(null!=X&&X.etag==V)if(J<this.staleEtagMaxRetries){J++;var Z=2*J*this.coolOff*(1+.1*(Math.random()-.5));window.setTimeout(q,Z);"1"==urlParams.test&&EditorUi.debug("DriveClient: Stale Etag Detected","retry",J,"delay",Z)}else{q(!0);try{EditorUi.logEvent({category:"STALE-ETAG-SAVE-FILE-"+f.getHash(),action:"rev_"+
f.desc.headRevisionId+"-mod_"+f.desc.modifiedDate+"-size_"+f.getSize()+"-mime_"+f.desc.mimeType+(this.ui.editor.autosave?"":"-nosave")+(f.isAutosave()?"":"-noauto")+(f.changeListenerEnabled?"":"-nolisten")+(f.inConflictState?"-conflict":"")+(f.invalidChecksum?"-invalid":""),label:(null!=this.user?"user_"+this.user.id:"nouser")+(null!=f.sync?"-client_"+f.sync.clientId:"-nosync")})}catch(ba){}}else"1"==urlParams.test&&X.headRevisionId==v&&EditorUi.debug("DriveClient: Remote Etag Changed","local",V,
"remote",X.etag,"rev",f.desc.headRevisionId,"response",[X],"file",[f]),e(R,X)}catch(ba){g(ba)}}),mxUtils.bind(this,function(){e(R)})):e(R)}catch(X){g(X)}}}))}catch(R){g(R)}}),q=mxUtils.bind(this,function(L){f.saveLevel=9;if(L||null==V)W(L);else{var U=!0,O=null;try{O=window.setTimeout(mxUtils.bind(this,function(){U=!1;e({code:App.ERROR_TIMEOUT})}),3*this.ui.timeout)}catch(S){}this.executeRequest({url:"/files/"+f.getId()+"?supportsAllDrives=true&fields="+this.catchupFields},mxUtils.bind(this,function(S){window.clearTimeout(O);
if(U){f.saveLevel=10;try{null!=S&&S.headRevisionId==v?("1"==urlParams.test&&V!=S.etag&&EditorUi.debug("DriveClient: Preflight Etag Update","from",V,"to",S.etag,"rev",f.desc.headRevisionId,"response",[S],"file",[f]),V=S.etag,W(L)):e({error:{code:412}},S)}catch(R){g(R)}}}),mxUtils.bind(this,function(S){window.clearTimeout(O);U&&(f.saveLevel=11,e(S))}))}});if(E&&null==p){f.saveLevel=8;var D=new Image;D.onload=mxUtils.bind(this,function(){try{var L=this.thumbnailWidth/D.width,U=document.createElement("canvas");
U.width=this.thumbnailWidth;U.height=Math.floor(D.height*L);U.getContext("2d").drawImage(D,0,0,U.width,U.height);var O=U.toDataURL();O=O.substring(O.indexOf(",")+1).replace(/\+/g,"-").replace(/\//g,"_");F.thumbnail={image:O,mimeType:"image/png"};q(!1)}catch(S){try{q(!1)}catch(R){g(R)}}});D.src="data:image/png;base64,"+Q}else q(!1)}catch(L){g(L)}});if(E){var M=this.ui.getPngFileProperties(this.ui.fileNode);this.ui.getEmbeddedPng(mxUtils.bind(this,function(Q){I(Q,!0)}),e,this.ui.getCurrentFile()!=f?
K:null,M.scale,M.border)}else I(K,!1)}catch(Q){g(Q)}});try{f.saveLevel=2,(y||E||f.constructor==DriveLibrary||!this.enableThumbnails||"0"==urlParams.thumb||null!=F.mimeType&&"application/vnd.jgraph.mxfile"!=F.mimeType.substring(0,29)||!this.ui.getThumbnail(this.thumbnailWidth,mxUtils.bind(this,function(p){try{var x=null;try{null!=p&&(x=p.toDataURL("image/png")),null!=x&&(x=x.length>this.maxThumbnailSize?null:x.substring(x.indexOf(",")+1).replace(/\+/g,"-").replace(/\//g,"_"))}catch(G){x=null}T(x,"image/png")}catch(G){g(G)}})))&&
T(null,null,f.constructor!=DriveLibrary)}catch(p){g(p)}}else this.ui.editor.graph.reset(),e({message:mxResources.get("readOnly")})}catch(p){g(p)}};DriveClient.prototype.insertFile=function(f,c,l,m,t,y,B){y=null!=y?y:this.xmlMimeType;f={mimeType:y,title:f};null!=l&&(f.parents=[{kind:"drive#fileLink",id:l}]);this.executeRequest(this.createUploadRequest(null,f,c,!1,B),mxUtils.bind(this,function(z){y==this.libraryMimeType?m(new DriveLibrary(this.ui,c,z)):0==z?null!=t&&t({message:mxResources.get("errorSavingFile")}):