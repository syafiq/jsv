mxEvent.addListener(this.formatWindow.window.title,"dblclick",mxUtils.bind(this,function(k){mxEvent.getSource(k)==this.formatWindow.window.title&&this.formatWindow.window.toggleMinimized()}))}};var J=EditorUi.prototype.init;EditorUi.prototype.init=function(){function d(X,Y,Z){var ea=u.menus.get(X),ca=G.addMenu(mxResources.get(X),mxUtils.bind(this,function(){ea.funct.apply(this,arguments)}),I);ca.className="geMenuItem";ca.style.display="inline-block";ca.style.boxSizing="border-box";ca.style.top="6px";
ca.style.marginRight="6px";ca.style.height="30px";ca.style.paddingTop="6px";ca.style.paddingBottom="6px";ca.style.cursor="pointer";ca.setAttribute("title",mxResources.get(X));u.menus.menuCreated(ea,ca,"geMenuItem");null!=Z?(ca.style.backgroundImage="url("+Z+")",ca.style.backgroundPosition="center center",ca.style.backgroundRepeat="no-repeat",ca.style.backgroundSize="24px 24px",ca.style.width="34px",ca.innerText=""):Y||(ca.style.backgroundImage="url("+mxWindow.prototype.normalizeImage+")",ca.style.backgroundPosition=
"right 6px center",ca.style.backgroundRepeat="no-repeat",ca.style.paddingRight="22px");return ca}function g(X,Y,Z,ea,ca,aa){var ba=document.createElement("a");ba.className="geMenuItem";ba.style.display="inline-block";ba.style.boxSizing="border-box";ba.style.height="30px";ba.style.padding="6px";ba.style.position="relative";ba.style.verticalAlign="top";ba.style.top="0px";null!=u.statusContainer?F.insertBefore(ba,u.statusContainer):F.appendChild(ba);null!=aa?(ba.style.backgroundImage="url("+aa+")",ba.style.backgroundPosition=