0;na<ja.length;na++)ja[na].style.display=fa}function T(fa,ja,na,va,ya){ya||(da.innerText="",C(),X=fa,Z=va);var Ea=null;if(na){Ea=document.createElement("table");Ea.className="geTempDlgDiagramsListGrid";var za=document.createElement("tr"),ra=document.createElement("th");ra.style.width="50%";ra.innerText=mxResources.get("diagram");za.appendChild(ra);ra=document.createElement("th");ra.style.width="25%";ra.innerText=mxResources.get("changedBy");za.appendChild(ra);ra=document.createElement("th");ra.style.width=
"25%";ra.innerText=mxResources.get("lastModifiedOn");za.appendChild(ra);Ea.appendChild(za);da.appendChild(Ea)}for(za=0;za<fa.length;za++){fa[za].isExternal=!ja;var pa=fa[za].url,Na=(ra=mxUtils.htmlEntities(ja?mxResources.get(fa[za].title,null,fa[za].title):fa[za].title))||fa[za].url,Qa=fa[za].imgUrl,Va=fa[za].changedBy||"",Ga="";fa[za].lastModifiedOn&&(Ga=b.timeSince(new Date(fa[za].lastModifiedOn)),null==Ga&&(Ga=mxResources.get("lessThanAMinute")),Ga=mxResources.get("timeAgo",[Ga],"{1} ago"));Qa||
(Qa=TEMPLATE_PATH+"/"+pa.substring(0,pa.length-4)+".png");pa=na?50:15;null!=ra&&ra.length>pa&&(ra=ra.substring(0,pa)+"&hellip;");if(na){var Ka=document.createElement("tr");Qa=document.createElement("td");var Ma=document.createElement("img");Ma.src="/images/icon-search.svg";Ma.className="geTempDlgDiagramListPreviewBtn";Ma.setAttribute("title",mxResources.get("preview"));ya||Qa.appendChild(Ma);Na=document.createElement("span");Na.className="geTempDlgDiagramTitle";Na.innerHTML=ra;Qa.appendChild(Na);
Ka.appendChild(Qa);Qa=document.createElement("td");Qa.innerText=Va;Ka.appendChild(Qa);Qa=document.createElement("td");Qa.innerText=Ga;Ka.appendChild(Qa);Ea.appendChild(Ka);null==L&&(F(ja),C(Ka,"geTempDlgDiagramsListGridActive",fa[za]));(function(Ha,Ta,Sa){mxEvent.addListener(Ka,"click",function(){L!=Ta&&(F(ja),C(Ta,"geTempDlgDiagramsListGridActive",Ha))});mxEvent.addListener(Ka,"dblclick",H);mxEvent.addListener(Ma,"click",function(Wa){E(Ha,Ta,Sa,Wa)})})(fa[za],Ka,Ma)}else{var Pa=document.createElement("div");
Pa.className="geTempDlgDiagramTile";Pa.setAttribute("title",Na);null==L&&(F(ja),C(Pa,"geTempDlgDiagramTileActive",fa[za]));Va=document.createElement("div");Va.className="geTempDlgDiagramTileImg geTempDlgDiagramTileImgLoading";var Ra=document.createElement("img");Ra.style.display="none";(function(Ha,Ta,Sa){Ra.onload=function(){Ta.className="geTempDlgDiagramTileImg";Ha.style.display=""};Ra.onerror=function(){this.src!=Sa?this.src=Sa:Ta.className="geTempDlgDiagramTileImg geTempDlgDiagramTileImgError"}})(Ra,
Va,Qa?Qa.replace(".drawio.xml","").replace(".drawio","").replace(".xml",""):"");Ra.src=Qa;Va.appendChild(Ra);Pa.appendChild(Va);Va=document.createElement("div");Va.className="geTempDlgDiagramTileLbl";Va.innerHTML=null!=ra?ra:"";Pa.appendChild(Va);Ma=document.createElement("img");Ma.src="/images/icon-search.svg";Ma.className="geTempDlgDiagramPreviewBtn";Ma.setAttribute("title",mxResources.get("preview"));ya||Pa.appendChild(Ma);(function(Ha,Ta,Sa){mxEvent.addListener(Pa,"click",function(){L!=Ta&&(F(ja),
C(Ta,"geTempDlgDiagramTileActive",Ha))});mxEvent.addListener(Pa,"dblclick",H);mxEvent.addListener(Ma,"click",function(Wa){E(Ha,Ta,Sa,Wa)})})(fa[za],Pa,Ma);da.appendChild(Pa)}}for(var Ua in va)fa=va[Ua],0<fa.length&&(ya=document.createElement("div"),ya.className="geTempDlgImportCat",ya.innerText=mxResources.get(Ua,null,Ua),da.appendChild(ya),T(fa,ja,na,null,!0))}function p(fa,ja){ha.innerText="";C();var na=Math.floor(ha.offsetWidth/150)-1;ja=!ja&&fa.length>na?na:fa.length;for(var va=0;va<ja;va++){var ya=