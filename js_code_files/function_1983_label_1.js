this.pages[k].getName()+" "+n.getIndexableText()+" "}else g=e.getIndexableText();this.editor.graph.setEnabled(!0);return g};EditorUi.prototype.showRemotelyStoredLibrary=function(e){var g={},k=document.createElement("div");k.style.whiteSpace="nowrap";var n=document.createElement("h3");mxUtils.write(n,mxUtils.htmlEntities(e));n.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px";k.appendChild(n);var u=document.createElement("div");u.style.cssText="border:1px solid lightGray;overflow: auto;height:300px";
u.innerHTML='<div style="text-align:center;padding:8px;"><img src="'+IMAGE_PATH+'/spin.gif"></div>';var v={};try{var E=mxSettings.getCustomLibraries();for(e=0;e<E.length;e++){var C=E[e];if("R"==C.substring(0,1)){var H=JSON.parse(decodeURIComponent(C.substring(1)));v[H[0]]={id:H[0],title:H[1],downloadUrl:H[2]}}}}catch(F){}this.remoteInvoke("getCustomLibraries",null,null,function(F){u.innerText="";if(0==F.length)u.innerHTML='<div style="text-align:center;padding-top:20px;color:gray;">'+mxUtils.htmlEntities(mxResources.get("noLibraries"))+
"</div>";else for(var T=0;T<F.length;T++){var p=F[T];v[p.id]&&(g[p.id]=p);var x=this.addCheckbox(u,p.title,v[p.id]);(function(G,K){mxEvent.addListener(K,"change",function(){this.checked?g[G.id]=G:delete g[G.id]})})(p,x)}},mxUtils.bind(this,function(F){u.innerText="";var T=document.createElement("div");T.style.padding="8px";T.style.textAlign="center";mxUtils.write(T,mxResources.get("error")+": ");mxUtils.write(T,null!=F&&null!=F.message?F.message:mxResources.get("unknownError"));u.appendChild(T)}));
k.appendChild(u);k=new CustomDialog(this,k,mxUtils.bind(this,function(){this.spinner.spin(document.body,mxResources.get("loading"));var F=0,T;for(T in g)null==v[T]&&(F++,mxUtils.bind(this,function(p){this.remoteInvoke("getFileContent",[p.downloadUrl],null,mxUtils.bind(this,function(x){F--;0==F&&this.spinner.stop();try{this.loadLibrary(new RemoteLibrary(this,x,p))}catch(G){this.handleError(G,mxResources.get("errorLoadingFile"))}}),mxUtils.bind(this,function(){F--;0==F&&this.spinner.stop();this.handleError(null,
mxResources.get("errorLoadingFile"))}))})(g[T]));for(T in v)g[T]||this.closeLibrary(new RemoteLibrary(this,null,v[T]));0==F&&this.spinner.stop()}),null,null,"https://www.diagrams.net/doc/faq/custom-libraries-confluence-cloud");this.showDialog(k.container,340,390,!0,!0,null,null,null,null,!0)};EditorUi.prototype.remoteInvokableFns={getDiagramTextContent:{isAsync:!1},getLocalStorageFile:{isAsync:!1,allowedDomains:["app.diagrams.net"]},getLocalStorageFileNames:{isAsync:!1,allowedDomains:["app.diagrams.net"]},