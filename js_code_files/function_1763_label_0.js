ba.style.cursor="pointer"):(ba.setAttribute("disabled","disabled"),ba.style.cursor="default")},ca.addListener("stateChanged",X),D.addListener("enabledChanged",X),X());return ba}function k(X,Y,Z){Z=document.createElement("div");Z.className="geMenuItem";Z.style.display="inline-block";Z.style.verticalAlign="top";Z.style.marginRight="6px";Z.style.padding="0 4px 0 4px";Z.style.height="30px";Z.style.position="relative";Z.style.top="0px";for(var ea=0;ea<X.length;ea++)null!=X[ea]&&(X[ea].style.margin="0px",
X[ea].style.boxShadow="none",Z.appendChild(X[ea]));null!=Y&&mxUtils.setOpacity(Z,Y);null!=u.statusContainer?F.insertBefore(Z,u.statusContainer):F.appendChild(Z);return Z}function n(){for(var X=F.firstChild;null!=X;){var Y=X.nextSibling;"geMenuItem"!=X.className&&"geItem"!=X.className||X.parentNode.removeChild(X);X=Y}I=F.firstChild;c=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;X=1E3>c;var Z=null;X||(Z=d("diagram"));Y=X?d("diagram",null,Editor.menuImage):null;