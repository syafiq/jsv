for(d=e.length-1;0<=d;d--){var W=function(X){var Y=new Date(X.modifiedDate),Z=null;if(0<=Y.getTime()){var ea=function(aa){g.stop();t.innerText="";var ba=mxUtils.parseXml(aa),fa=b.editor.extractGraphModel(ba.documentElement,!0);if(null!=fa){var za=function(Aa){null!=Aa&&(Aa=ra(Editor.parseDiagramNode(Aa)));return Aa},ra=function(Aa){var ma=Aa.getAttribute("background");if(null==ma||""==ma||ma==mxConstants.NONE)ma=y.defaultPageBackgroundColor;m.style.backgroundColor=ma;(new mxCodec(Aa.ownerDocument)).decode(Aa,
y.getModel());y.maxFitScale=1;y.fit(8);y.center();return Aa};O.style.display="none";O.innerText="";F=ba;I=aa;z=parseSelectFunction=null;A=0;if("mxfile"==fa.nodeName){ba=fa.getElementsByTagName("diagram");z=[];for(aa=0;aa<ba.length;aa++)z.push(ba[aa]);A=Math.min(C,z.length-1);0<z.length&&za(z[A]);if(1<z.length)for(O.removeAttribute("disabled"),O.style.display="",aa=0;aa<z.length;aa++)ba=document.createElement("option"),mxUtils.write(ba,z[aa].getAttribute("name")||mxResources.get("pageWithNumber",[aa+
1])),ba.setAttribute("value",aa),aa==A&&ba.setAttribute("selected","selected"),O.appendChild(ba);V=function(){try{var Aa=parseInt(O.value);A=C=Aa;za(z[Aa])}catch(ma){O.value=C,b.handleError(ma)}}}else ra(fa);aa=X.lastModifyingUserName;null!=aa&&20<aa.length&&(aa=aa.substring(0,20)+"...");M.innerText="";mxUtils.write(M,(null!=aa?aa+" ":"")+Y.toLocaleDateString()+" "+Y.toLocaleTimeString());M.setAttribute("title",Z.getAttribute("title"));G.removeAttribute("disabled");U.removeAttribute("disabled");q.removeAttribute("disabled");
v.removeAttribute("disabled");null!=k&&k.isRestricted()||(b.editor.graph.isEnabled()&&P.removeAttribute("disabled"),N.removeAttribute("disabled"),B.removeAttribute("disabled"),p.removeAttribute("disabled"));mxUtils.setOpacity(G,60);mxUtils.setOpacity(U,60);mxUtils.setOpacity(q,60);mxUtils.setOpacity(v,60)}else O.style.display="none",O.innerText="",M.innerText="",t.innerText="",mxUtils.write(M,mxResources.get("errorLoadingFile")),mxUtils.write(t,mxResources.get("errorLoadingFile"))};Z=document.createElement("tr");