d=new CustomDialog(this,A,mxUtils.bind(this,function(){var ha=parseInt(P.value)/100||1,ba=parseInt(M.value)||0;g(!G.checked,null!=ia?ia.checked:!1,null!=ja?ja.checked:!1,ha,ba)}),null,d,f);this.showDialog(d.container,300,(x?25:0)+(u?125:210),!0,!0)};EditorUi.prototype.showExportDialog=function(d,f,g,u,x,A,H,P,M){H=null!=H?H:Editor.defaultIncludeDiagram;var G=document.createElement("div");G.style.whiteSpace="nowrap";var ia=this.editor.graph,ja="jpeg"==P?220:300,ha=document.createElement("h3");mxUtils.write(ha,
d);ha.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:10px";G.appendChild(ha);mxUtils.write(G,mxResources.get("zoom")+":");var ba=document.createElement("input");ba.setAttribute("type","text");ba.style.marginRight="16px";ba.style.width="60px";ba.style.marginLeft="4px";ba.style.marginRight="12px";ba.value=this.lastExportZoom||"100%";G.appendChild(ba);mxUtils.write(G,mxResources.get("borderWidth")+":");var oa=document.createElement("input");oa.setAttribute("type","text");oa.style.marginRight=
"16px";oa.style.width="60px";oa.style.marginLeft="4px";oa.value=this.lastExportBorder||"0";G.appendChild(oa);mxUtils.br(G);var sa=this.addCheckbox(G,mxResources.get("selectionOnly"),!1,ia.isSelectionEmpty()),J=document.createElement("input");J.style.marginTop="16px";J.style.marginRight="8px";J.style.marginLeft="24px";J.setAttribute("disabled","disabled");J.setAttribute("type","checkbox");var V=document.createElement("select");V.style.marginTop="16px";V.style.marginLeft="8px";d=["selectionOnly","diagram",
"page"];var T={};for(ha=0;ha<d.length;ha++)if(!ia.isSelectionEmpty()||"selectionOnly"!=d[ha]){var ca=document.createElement("option");mxUtils.write(ca,mxResources.get(d[ha]));ca.setAttribute("value",d[ha]);V.appendChild(ca);T[d[ha]]=ca}M?(mxUtils.write(G,mxResources.get("size")+":"),G.appendChild(V),mxUtils.br(G),ja+=26,mxEvent.addListener(V,"change",function(){"selectionOnly"==V.value&&(sa.checked=!0)})):A&&(G.appendChild(J),mxUtils.write(G,mxResources.get("crop")),mxUtils.br(G),ja+=30,mxEvent.addListener(sa,
"change",function(){sa.checked?J.removeAttribute("disabled"):J.setAttribute("disabled","disabled")}));ia.isSelectionEmpty()?M&&(sa.style.display="none",sa.nextSibling.style.display="none",sa.nextSibling.nextSibling.style.display="none",ja-=30):(V.value="diagram",J.setAttribute("checked","checked"),J.defaultChecked=!0,mxEvent.addListener(sa,"change",function(){V.value=sa.checked?"selectionOnly":"diagram"}));var Y=this.addCheckbox(G,mxResources.get("transparentBackground"),!1,null,null,"jpeg"!=P),p=
null;Editor.isDarkMode()&&(p=this.addCheckbox(G,mxResources.get("dark"),!0),ja+=26);var E=this.addCheckbox(G,mxResources.get("shadow"),ia.shadowVisible),Q=null;if("png"==P||"jpeg"==P)Q=this.addCheckbox(G,mxResources.get("grid"),!1,this.isOffline()||!this.canvasSupported,!1,!0),ja+=30;var Z=this.addCheckbox(G,mxResources.get("includeCopyOfMyDiagram"),H,null,null,"jpeg"!=P);Z.style.marginBottom="16px";var W=document.createElement("input");W.style.marginBottom="16px";W.style.marginRight="8px";W.setAttribute("type",
"checkbox");!this.isOffline()&&this.canvasSupported||W.setAttribute("disabled","disabled");var X=document.createElement("select");X.style.maxWidth="260px";X.style.marginLeft="8px";X.style.marginBottom="16px";A=document.createElement("option");A.setAttribute("value","none");mxUtils.write(A,mxResources.get("default"));X.appendChild(A);A=document.createElement("option");A.setAttribute("value","embedFonts");mxUtils.write(A,mxResources.get("embedFonts"));X.appendChild(A);A=document.createElement("option");
A.setAttribute("value","lblToSvg");mxUtils.write(A,mxResources.get("lblToSvg"));this.isOffline()||EditorUi.isElectronApp||X.appendChild(A);mxEvent.addListener(X,"change",mxUtils.bind(this,function(){"lblToSvg"==X.value?(W.checked=!0,W.setAttribute("disabled","disabled"),T.page.style.display="none","page"==V.value&&(V.value="diagram"),E.checked=!1,E.setAttribute("disabled","disabled"),la.style.display="inline-block",da.style.display="none"):"disabled"==W.getAttribute("disabled")&&(W.checked=!1,W.removeAttribute("disabled"),
E.removeAttribute("disabled"),T.page.style.display="",la.style.display="none",da.style.display="")}));f&&(G.appendChild(W),mxUtils.write(G,mxResources.get("embedImages")),mxUtils.br(G),mxUtils.write(G,mxResources.get("txtSettings")+":"),G.appendChild(X),mxUtils.br(G),ja+=60);var da=document.createElement("select");da.style.maxWidth="260px";da.style.marginLeft="8px";f=document.createElement("option");f.setAttribute("value","auto");mxUtils.write(f,mxResources.get("automatic"));da.appendChild(f);f=document.createElement("option");
f.setAttribute("value","blank");mxUtils.write(f,mxResources.get("openInNewWindow"));da.appendChild(f);f=document.createElement("option");f.setAttribute("value","self");mxUtils.write(f,mxResources.get("openInThisWindow"));da.appendChild(f);var la=document.createElement("div");mxUtils.write(la,mxResources.get("LinksLost"));la.style.margin="7px";la.style.display="none";"svg"==P&&(mxUtils.write(G,mxResources.get("links")+":"),G.appendChild(da),G.appendChild(la),mxUtils.br(G),mxUtils.br(G),ja+=50);g=new CustomDialog(this,
G,mxUtils.bind(this,function(){this.lastExportBorder=oa.value;this.lastExportZoom=ba.value;x(ba.value,Y.checked,!sa.checked,E.checked,Z.checked,W.checked,oa.value,J.checked,!1,da.value,null!=Q?Q.checked:null,null!=p?p.checked:null,V.value,"embedFonts"==X.value,"lblToSvg"==X.value)}),null,g,u);this.showDialog(g.container,340,ja,!0,!0,null,null,null,null,!0);ba.focus();mxClient.IS_GC||mxClient.IS_FF||5<=document.documentMode?ba.select():document.execCommand("selectAll",!1,null)};EditorUi.prototype.showEmbedImageDialog=