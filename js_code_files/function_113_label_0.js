O.push(q);n.appendChild(q);var Q=function(ia){ra.style.display="none";aa.style.display="none";ca.style.left="30px";L(ia?-1:1);null==V&&(V=la);ca.scrollTop=0;ca.innerText="";N.spin(ca);var va=function(sa,na,oa){H=0;N.stop();la=sa;oa=oa||{};var Ca=0,da;for(da in oa)Ca+=oa[da].length;if(na)ca.innerText=na;else if(0==sa.length&&0==Ca)ca.innerText=mxResources.get("noDiagrams",null,"No Diagrams Found");else if(ca.innerText="",0<Ca){ra.style.display="";ca.style.left="160px";ra.innerText="";Ea=0;ha={"draw.io":sa};
for(da in oa)ha[da]=oa[da];U()}else D(!0)};ia?d(S.value,va):J(va)};J&&(q=mxUtils.button(mxResources.get("Recent",null,"Recent"),function(){Q()}),n.appendChild(q),O.push(q));if(d){q=document.createElement("span");q.style.marginLeft="10px";q.innerText=mxResources.get("search")+":";n.appendChild(q);var S=document.createElement("input");S.style.marginRight="10px";S.style.marginLeft="10px";S.style.width="220px";mxEvent.addListener(S,"keypress",function(ia){13==ia.keyCode&&Q(!0)});n.appendChild(S);q=mxUtils.button(mxResources.get("search"),