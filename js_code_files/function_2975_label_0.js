"/embed2.js?")+d:"1"==urlParams.dev?"https://test.draw.io/js/viewer-static.min.js":window.DRAWIO_VIEWER_URL?window.DRAWIO_VIEWER_URL:EditorUi.lightboxHost+"/js/viewer-static.min.js")+'">\x3c/script>')};EditorUi.prototype.showHtmlDialog=function(d,g,k,n){var x=document.createElement("div");x.style.whiteSpace="nowrap";var u=document.createElement("h3");mxUtils.write(u,mxResources.get("html"));u.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px";x.appendChild(u);var D=document.createElement("div");
D.style.cssText="border-bottom:1px solid lightGray;padding-bottom:8px;margin-bottom:12px;";var F=document.createElement("input");F.style.cssText="margin-right:8px;margin-top:8px;margin-bottom:8px;";F.setAttribute("value","url");F.setAttribute("type","radio");F.setAttribute("name","type-embedhtmldialog");u=F.cloneNode(!0);u.setAttribute("value","copy");D.appendChild(u);var I=document.createElement("span");mxUtils.write(I,mxResources.get("includeCopyOfMyDiagram"));D.appendChild(I);mxUtils.br(D);D.appendChild(F);
I=document.createElement("span");mxUtils.write(I,mxResources.get("publicDiagramUrl"));D.appendChild(I);var G=this.getCurrentFile();null==k&&null!=G&&G.constructor==window.DriveFile&&(I=document.createElement("a"),I.style.paddingLeft="12px",I.style.color="gray",I.style.cursor="pointer",mxUtils.write(I,mxResources.get("share")),D.appendChild(I),mxEvent.addListener(I,"click",mxUtils.bind(this,function(){this.hideDialog();this.drive.showPermissions(G.getId())})));u.setAttribute("checked","checked");null==
k&&F.setAttribute("disabled","disabled");x.appendChild(D);var U=this.addLinkSection(x),q=this.addCheckbox(x,mxResources.get("zoom"),!0,null,!0);mxUtils.write(x,":");var v=document.createElement("input");v.setAttribute("type","text");v.style.marginRight="16px";v.style.width="60px";v.style.marginLeft="4px";v.style.marginRight="12px";v.value="100%";x.appendChild(v);var E=this.addCheckbox(x,mxResources.get("fit"),!0);D=null!=this.pages&&1<this.pages.length;var K=K=this.addCheckbox(x,mxResources.get("allPages"),
D,!D),M=this.addCheckbox(x,mxResources.get("layers"),!0),H=this.addCheckbox(x,mxResources.get("tags"),!0),N=this.addCheckbox(x,mxResources.get("lightbox"),!0),P=null;D=380;if(EditorUi.enableHtmlEditOption){P=this.addEditButton(x,N);var O=P.getEditInput();O.style.marginBottom="16px";D+=50;mxEvent.addListener(N,"change",function(){N.checked?O.removeAttribute("disabled"):O.setAttribute("disabled","disabled");O.checked&&N.checked?P.getEditSelect().removeAttribute("disabled"):P.getEditSelect().setAttribute("disabled",
"disabled")})}d=new CustomDialog(this,x,mxUtils.bind(this,function(){n(F.checked?k:null,q.checked,v.value,U.getTarget(),U.getColor(),E.checked,K.checked,M.checked,H.checked,N.checked,null!=P?P.getLink():null)}),null,d,g);this.showDialog(d.container,340,D,!0,!0);u.focus()};EditorUi.prototype.showPublishLinkDialog=function(d,g,k,n,x,u,D,F){var I=document.createElement("div");I.style.whiteSpace="nowrap";var G=document.createElement("h3");mxUtils.write(G,d||mxResources.get("publish"));G.style.cssText=