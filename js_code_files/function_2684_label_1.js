EditorUi.lightboxHost+"/js/viewer-static.min.js")+'">\x3c/script>')};EditorUi.prototype.showHtmlDialog=function(c,e,f,n){var p=document.createElement("div");p.style.whiteSpace="nowrap";var q=document.createElement("h3");mxUtils.write(q,mxResources.get("html"));q.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px";p.appendChild(q);var y=document.createElement("div");y.style.cssText="border-bottom:1px solid lightGray;padding-bottom:8px;margin-bottom:12px;";var x=document.createElement("input");
x.style.cssText="margin-right:8px;margin-top:8px;margin-bottom:8px;";x.setAttribute("value","url");x.setAttribute("type","radio");x.setAttribute("name","type-embedhtmldialog");q=x.cloneNode(!0);q.setAttribute("value","copy");y.appendChild(q);var E=document.createElement("span");mxUtils.write(E,mxResources.get("includeCopyOfMyDiagram"));y.appendChild(E);mxUtils.br(y);y.appendChild(x);E=document.createElement("span");mxUtils.write(E,mxResources.get("publicDiagramUrl"));y.appendChild(E);var A=this.getCurrentFile();
null==f&&null!=A&&A.constructor==window.DriveFile&&(E=document.createElement("a"),E.style.paddingLeft="12px",E.style.color="gray",E.style.cursor="pointer",mxUtils.write(E,mxResources.get("share")),y.appendChild(E),mxEvent.addListener(E,"click",mxUtils.bind(this,function(){this.hideDialog();this.drive.showPermissions(A.getId())})));q.setAttribute("checked","checked");null==f&&x.setAttribute("disabled","disabled");p.appendChild(y);var S=this.addLinkSection(p),l=this.addCheckbox(p,mxResources.get("zoom"),
!0,null,!0);mxUtils.write(p,":");var u=document.createElement("input");u.setAttribute("type","text");u.style.marginRight="16px";u.style.width="60px";u.style.marginLeft="4px";u.style.marginRight="12px";u.value="100%";p.appendChild(u);var C=this.addCheckbox(p,mxResources.get("fit"),!0);y=null!=this.pages&&1<this.pages.length;var J=J=this.addCheckbox(p,mxResources.get("allPages"),y,!y),M=this.addCheckbox(p,mxResources.get("layers"),!0),F=this.addCheckbox(p,mxResources.get("tags"),!0),L=this.addCheckbox(p,
mxResources.get("lightbox"),!0),P=null;y=380;if(EditorUi.enableHtmlEditOption){P=this.addEditButton(p,L);var U=P.getEditInput();U.style.marginBottom="16px";y+=50;mxEvent.addListener(L,"change",function(){L.checked?U.removeAttribute("disabled"):U.setAttribute("disabled","disabled");U.checked&&L.checked?P.getEditSelect().removeAttribute("disabled"):P.getEditSelect().setAttribute("disabled","disabled")})}c=new CustomDialog(this,p,mxUtils.bind(this,function(){n(x.checked?f:null,l.checked,u.value,S.getTarget(),
S.getColor(),C.checked,J.checked,M.checked,F.checked,L.checked,null!=P?P.getLink():null)}),null,c,e);this.showDialog(c.container,340,y,!0,!0);q.focus()};EditorUi.prototype.showPublishLinkDialog=function(c,e,f,n,p,q,y,x){var E=document.createElement("div");E.style.whiteSpace="nowrap";var A=document.createElement("h3");mxUtils.write(A,c||mxResources.get("link"));A.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px";E.appendChild(A);var S=this.getCurrentFile();c=0;if(null==