"6px",v.style.paddingLeft="6px",v.style.height="32px",v.style.left="50%");n.appendChild(k.sidebar.container);n.style.overflow="hidden"}function f(k,n){if(EditorUi.windowed){var u=k.editor.graph;u.popupMenuHandler.hideMenu();null==k.sidebarWindow?(n=Math.min(u.container.clientWidth-10,218),u=Math.min(u.container.clientHeight-40,650),k.sidebarWindow=new WrapperWindow(k,mxResources.get("shapes"),10,56,n-6,u-6,function(v){d(k,v)}),k.sidebarWindow.window.addListener(mxEvent.SHOW,mxUtils.bind(this,function(){k.sidebarWindow.window.fit()})),
k.sidebarWindow.window.minimumSize=new mxRectangle(0,0,90,90),k.sidebarWindow.window.setVisible(!0),isLocalStorage&&k.getLocalData("sidebar",function(v){k.sidebar.showEntries(v,null,!0)}),k.restoreLibraries()):k.sidebarWindow.window.setVisible(null!=n?n:!k.sidebarWindow.window.isVisible())}else null==k.sidebarElt&&(k.sidebarElt=k.createSidebarContainer(),d(k,k.sidebarElt),k.sidebarElt.style.border="none",k.sidebarElt.style.width="210px",k.sidebarElt.style.borderRight="1px solid gray"),u=k.diagramContainer.parentNode,
null!=k.sidebarElt.parentNode?(k.sidebarElt.parentNode.removeChild(k.sidebarElt),u.style.left="0px"):(u.parentNode.appendChild(k.sidebarElt),u.style.left=k.sidebarElt.style.width)}if("1"==urlParams.lightbox||"0"==urlParams.chrome||"undefined"===typeof window.Format||"undefined"===typeof window.Menus)window.uiTheme=null;else{var c=0;try{c=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}catch(k){}Menus.prototype.autoPopup=!1;Editor.checkmarkImage=Graph.createSvgImage(22,