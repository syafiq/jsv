this.pages[g].getName()+" "+u.getIndexableText()+" "}else f=d.getIndexableText();this.editor.graph.setEnabled(!0);return f};EditorUi.prototype.showRemotelyStoredLibrary=function(d){var f={},g=document.createElement("div");g.style.whiteSpace="nowrap";var u=document.createElement("h3");mxUtils.write(u,mxUtils.htmlEntities(d));u.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px";g.appendChild(u);var x=document.createElement("div");x.style.cssText="border:1px solid lightGray;overflow: auto;height:300px";
x.innerHTML='<div style="text-align:center;padding:8px;"><img src="'+IMAGE_PATH+'/spin.gif"></div>';var A={};try{var H=mxSettings.getCustomLibraries();for(d=0;d<H.length;d++){var P=H[d];if("R"==P.substring(0,1)){var M=JSON.parse(decodeURIComponent(P.substring(1)));A[M[0]]={id:M[0],title:M[1],downloadUrl:M[2]}}}}catch(G){}this.remoteInvoke("getCustomLibraries",null,null,function(G){x.innerText="";if(0==G.length)x.innerHTML='<div style="text-align:center;padding-top:20px;color:gray;">'+mxUtils.htmlEntities(mxResources.get("noLibraries"))+
"</div>";else for(var ia=0;ia<G.length;ia++){var ja=G[ia];A[ja.id]&&(f[ja.id]=ja);var ha=this.addCheckbox(x,ja.title,A[ja.id]);(function(ba,oa){mxEvent.addListener(oa,"change",function(){this.checked?f[ba.id]=ba:delete f[ba.id]})})(ja,ha)}},mxUtils.bind(this,function(G){x.innerText="";var ia=document.createElement("div");ia.style.padding="8px";ia.style.textAlign="center";mxUtils.write(ia,mxResources.get("error")+": ");mxUtils.write(ia,null!=G&&null!=G.message?G.message:mxResources.get("unknownError"));
x.appendChild(ia)}));g.appendChild(x);g=new CustomDialog(this,g,mxUtils.bind(this,function(){this.spinner.spin(document.body,mxResources.get("loading"));var G=0,ia;for(ia in f)null==A[ia]&&(G++,mxUtils.bind(this,function(ja){this.remoteInvoke("getFileContent",[ja.downloadUrl],null,mxUtils.bind(this,function(ha){G--;0==G&&this.spinner.stop();try{this.loadLibrary(new RemoteLibrary(this,ha,ja))}catch(ba){this.handleError(ba,mxResources.get("errorLoadingFile"))}}),mxUtils.bind(this,function(){G--;0==
G&&this.spinner.stop();this.handleError(null,mxResources.get("errorLoadingFile"))}))})(f[ia]));for(ia in A)f[ia]||this.closeLibrary(new RemoteLibrary(this,null,A[ia]));0==G&&this.spinner.stop()}),null,null,"https://www.diagrams.net/doc/faq/custom-libraries-confluence-cloud");this.showDialog(g.container,340,390,!0,!0,null,null,null,null,!0)};EditorUi.prototype.remoteInvokableFns={getDiagramTextContent:{isAsync:!1},getLocalStorageFile:{isAsync:!1,allowedDomains:["app.diagrams.net"]},getLocalStorageFileNames:{isAsync:!1,