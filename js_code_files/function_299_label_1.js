P.push(p);n.appendChild(p);var L=function(ia){sa.style.display="none";Y.style.display="none";ca.style.left="30px";D(ia?-1:1);null==V&&(V=oa);ca.scrollTop=0;ca.innerText="";M.spin(ca);var wa=function(qa,ua,ma){I=0;M.stop();oa=qa;ma=ma||{};var Da=0,fa;for(fa in ma)Da+=ma[fa].length;if(ua)ca.innerText=ua;else if(0==qa.length&&0==Da)ca.innerText=mxResources.get("noDiagrams",null,"No Diagrams Found");else if(ca.innerText="",0<Da){sa.style.display="";ca.style.left="160px";sa.innerText="";Ca=0;ha={"draw.io":qa};
for(fa in ma)ha[fa]=ma[fa];T()}else E(!0)};ia?e(U.value,wa):J(wa)};J&&(p=mxUtils.button(mxResources.get("Recent",null,"Recent"),function(){L()}),n.appendChild(p),P.push(p));if(e){p=document.createElement("span");p.style.marginLeft="10px";p.innerText=mxResources.get("search")+":";n.appendChild(p);var U=document.createElement("input");U.style.marginRight="10px";U.style.marginLeft="10px";U.style.width="220px";mxEvent.addListener(U,"keypress",function(ia){13==ia.keyCode&&L(!0)});n.appendChild(U);p=mxUtils.button(mxResources.get("search"),