Q.appendChild(Q.resizeSensor);"static"==p(Q,"position")&&(Q.style.position="relative");var f=Q.resizeSensor.childNodes[0],g=f.childNodes[0],v=Q.resizeSensor.childNodes[1],x=function(){g.style.width="100000px";g.style.height="100000px";f.scrollLeft=1E5;f.scrollTop=1E5;v.scrollLeft=1E5;v.scrollTop=1E5};x();var A=!1,J=function(){Q.resizedAttached&&(A&&(Q.resizedAttached.call(),A=!1),b(J))};b(J);var H,O,F,ea;d=function(){if((F=Q.offsetWidth)!=H||(ea=Q.offsetHeight)!=O)A=!0,H=F,O=ea;x()};var ja=function(ia,
aa,qa){ia.attachEvent?ia.attachEvent("on"+aa,qa):ia.addEventListener(aa,qa)};ja(f,"scroll",d);ja(v,"scroll",d)}var M=function(){GraphViewer.resizeSensorEnabled&&l()},R=Object.prototype.toString.call(k),G="[object Array]"===R||"[object NodeList]"===R||"[object HTMLCollection]"===R||"undefined"!==typeof jQuery&&k instanceof jQuery||"undefined"!==typeof Elements&&k instanceof Elements;if(G){R=0;for(var L=k.length;R<L;R++)D(k[R],M)}else D(k,M);this.detach=function(){if(G)for(var Q=0,d=k.length;Q<d;Q++)e.detach(k[Q]);