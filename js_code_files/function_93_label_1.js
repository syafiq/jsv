new Date(X.modifiedDate),ba=null;if(0<=Z.getTime()){var aa=function(Y){g.stop();t.innerText="";var da=mxUtils.parseXml(Y),ea=b.editor.extractGraphModel(da.documentElement,!0);if(null!=ea){var ka=function(xa){null!=xa&&(xa=sa(Editor.parseDiagramNode(xa)));return xa},sa=function(xa){var ta=xa.getAttribute("background");if(null==ta||""==ta||ta==mxConstants.NONE)ta=y.defaultPageBackgroundColor;m.style.backgroundColor=ta;(new mxCodec(xa.ownerDocument)).decode(xa,y.getModel());y.maxFitScale=1;y.fit(8);
y.center();return xa};P.style.display="none";P.innerText="";C=da;H=Y;z=parseSelectFunction=null;A=0;if("mxfile"==ea.nodeName){da=ea.getElementsByTagName("diagram");z=[];for(Y=0;Y<da.length;Y++)z.push(da[Y]);A=Math.min(B,z.length-1);0<z.length&&ka(z[A]);if(1<z.length)for(P.removeAttribute("disabled"),P.style.display="",Y=0;Y<z.length;Y++)da=document.createElement("option"),mxUtils.write(da,z[Y].getAttribute("name")||mxResources.get("pageWithNumber",[Y+1])),da.setAttribute("value",Y),Y==A&&da.setAttribute("selected",
"selected"),P.appendChild(da);V=function(){try{var xa=parseInt(P.value);A=B=xa;ka(z[xa])}catch(ta){P.value=B,b.handleError(ta)}}}else sa(ea);Y=X.lastModifyingUserName;null!=Y&&20<Y.length&&(Y=Y.substring(0,20)+"...");N.innerText="";mxUtils.write(N,(null!=Y?Y+" ":"")+Z.toLocaleDateString()+" "+Z.toLocaleTimeString());N.setAttribute("title",ba.getAttribute("title"));F.removeAttribute("disabled");T.removeAttribute("disabled");p.removeAttribute("disabled");x.removeAttribute("disabled");null!=k&&k.isRestricted()||
(b.editor.graph.isEnabled()&&Q.removeAttribute("disabled"),M.removeAttribute("disabled"),q.removeAttribute("disabled"),W.removeAttribute("disabled"));mxUtils.setOpacity(F,60);mxUtils.setOpacity(T,60);mxUtils.setOpacity(p,60);mxUtils.setOpacity(x,60)}else P.style.display="none",P.innerText="",N.innerText="",t.innerText="",mxUtils.write(N,mxResources.get("errorLoadingFile")),mxUtils.write(t,mxResources.get("errorLoadingFile"))};ba=document.createElement("tr");ba.style.borderBottom="1px solid lightGray";