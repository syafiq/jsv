ba.style.cursor="pointer"):(ba.setAttribute("disabled","disabled"),ba.style.cursor="default")},ca.addListener("stateChanged",X),y.addListener("enabledChanged",X),X());return ba}function g(X,Y,Z){Z=document.createElement("div");Z.className="geMenuItem";Z.style.display="inline-block";Z.style.verticalAlign="top";Z.style.marginRight="6px";Z.style.padding="0 4px 0 4px";Z.style.height="30px";Z.style.position="relative";Z.style.top="0px";for(var fa=0;fa<X.length;fa++)null!=X[fa]&&(X[fa].style.margin="0px",
X[fa].style.boxShadow="none",Z.appendChild(X[fa]));null!=Y&&mxUtils.setOpacity(Z,Y);null!=p.statusContainer?B.insertBefore(Z,p.statusContainer):B.appendChild(Z);return Z}function n(){for(var X=B.firstChild;null!=X;){var Y=X.nextSibling;"geMenuItem"!=X.className&&"geItem"!=X.className||X.parentNode.removeChild(X);X=Y}G=B.firstChild;d=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;X=1E3>d;var Z=null;X||(Z=c("diagram"));Y=X?c("diagram",null,Editor.menuImage):null;