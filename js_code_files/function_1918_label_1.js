c.style.width="18px",c.style.flexShrink="",this.menubarContainer.parentNode.insertBefore(c,this.menubarContainer)))};EditorUi.prototype.createMenu=function(c,e,f,n){f=null!=f?f:"geToolbarButton";var p=this.menus.get(c);n=this.menubar.addMenu(mxResources.get(c),p.funct,null,n);n.className=f;n.style.display="inline-block";n.style.cursor="pointer";n.style.height="24px";n.setAttribute("title",mxResources.get(c));this.menus.menuCreated(p,n,f);null!=e&&(n.style.backgroundImage="url("+e+")",n.style.backgroundPosition=
"center center",n.style.backgroundRepeat="no-repeat",n.style.backgroundSize="100% 100%",n.style.width="24px",n.innerText="");return n};EditorUi.prototype.createToolbarButton=function(c,e,f,n){n=null!=n?n:24;var p=document.createElement("a");p.className="geToolbarButton geAdaptiveAsset";p.setAttribute("title",e);p.style.backgroundImage="url("+c+")";p.style.backgroundPosition="center center";p.style.backgroundRepeat="no-repeat";p.style.backgroundSize="100% 100%";p.style.display="inline-block";p.style.cursor=