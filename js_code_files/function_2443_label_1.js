function(){function f(ba,aa,ca){var Y=x.menus.get(ba),ea=l.addMenu(mxResources.get(ba),mxUtils.bind(this,function(){Y.funct.apply(this,arguments)}),S);ea.className="geMenuItem";ea.style.display="inline-block";ea.style.boxSizing="border-box";ea.style.top="6px";ea.style.marginRight="6px";ea.style.height="30px";ea.style.paddingTop="6px";ea.style.paddingBottom="6px";ea.style.cursor="pointer";ea.setAttribute("title",mxResources.get(ba));x.menus.menuCreated(Y,ea,"geMenuItem");null!=ca?(ea.style.backgroundImage=
"url("+ca+")",ea.style.backgroundPosition="center center",ea.style.backgroundRepeat="no-repeat",ea.style.backgroundSize="24px 24px",ea.style.width="34px",ea.innerText=""):aa||(ea.style.backgroundImage="url("+mxWindow.prototype.normalizeImage+")",ea.style.backgroundPosition="right 6px center",ea.style.backgroundRepeat="no-repeat",ea.style.paddingRight="22px");return ea}function n(ba,aa,ca,Y,ea,da){var la=document.createElement("a");la.className="geMenuItem";la.style.display="inline-block";la.style.boxSizing=