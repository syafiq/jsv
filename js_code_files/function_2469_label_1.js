"";ba=null;Na()});Y.style.display=fa.length<=na?"none":""}function x(fa,ja,na){function va(Ra,Ua){var Ha=mxResources.get(Ra);null==Ha&&(Ha=Ra.substring(0,1).toUpperCase()+Ra.substring(1));Ra=Ha+" ("+Ua.length+")";var Ta=Ha=mxUtils.htmlEntities(Ha);15<Ha.length&&(Ha=Ha.substring(0,15)+"&hellip;");return{lbl:Ha+" ("+Ua.length+")",fullLbl:Ra,lblOnly:Ta}}function ya(Ra,Ua,Ha,Ta,Sa){mxEvent.addListener(Ha,"click",function(){q!=Ha&&(null!=q?(q.style.fontWeight="normal",q.style.textDecoration="none"):(ta.style.display=
"none",xa.style.minHeight="100%"),q=Ha,q.style.fontWeight="bold",q.style.textDecoration="underline",sa.scrollTop=0,V&&(W=!0),ea.innerHTML=Ua,ka.style.display="none",T(Sa?ja[Ra]:Ta?La[Ra][Ta]:fa[Ra],Sa?!1:!0))})}var Ea=P.querySelector(".geTemplatesList");if(0<na){na=document.createElement("div");na.style.cssText="font-weight: bold;background: #f9f9f9;padding: 5px 0 5px 0;text-align: center;margin-top: 10px;";mxUtils.write(na,mxResources.get("custom"));Ea.appendChild(na);for(var za in ja){na=document.createElement("div");
var ra=ja[za];ra=va(za,ra);na.className="geTemplateCatLink";na.setAttribute("title",ra.fullLbl);na.innerHTML=ra.lbl;Ea.appendChild(na);ya(za,ra.lblOnly,na,null,!0)}na=document.createElement("div");na.style.cssText="font-weight: bold;background: #f9f9f9;padding: 5px 0 5px 0;text-align: center;margin-top: 10px;";mxUtils.write(na,"draw.io");Ea.appendChild(na)}for(za in fa){var pa=La[za],Na=na=document.createElement(pa?"ul":"div");ra=fa[za];ra=va(za,ra);if(null!=pa){var Qa=document.createElement("li"),
Va=document.createElement("div");Va.className="geTempTreeCaret geTemplateCatLink geTemplateDrawioCatLink";Va.style.padding="0";Va.setAttribute("title",ra.fullLbl);Va.innerHTML=ra.lbl;Na=Va;Qa.appendChild(Va);var Ga=document.createElement("ul");Ga.className="geTempTreeNested";Ga.style.visibility="hidden";for(var Ka in pa){var Ma=document.createElement("li"),Pa=va(Ka,pa[Ka]);Ma.setAttribute("title",Pa.fullLbl);Ma.innerHTML=Pa.lbl;Ma.className="geTemplateCatLink";Ma.style.padding="0";Ma.style.margin=
"0";ya(za,Pa.lblOnly,Ma,Ka);Ga.appendChild(Ma)}Qa.appendChild(Ga);na.className="geTempTree";na.appendChild(Qa);(function(Ra,Ua){mxEvent.addListener(Ua,"click",function(){for(var Ha=Ra.querySelectorAll("li"),Ta=0;Ta<Ha.length;Ta++)Ha[Ta].style.margin="";Ra.style.visibility="visible";Ra.classList.toggle("geTempTreeActive");Ra.classList.toggle("geTempTreeNested")&&setTimeout(function(){for(var Sa=0;Sa<Ha.length;Sa++)Ha[Sa].style.margin="0";Ra.style.visibility="hidden"},250);Ua.classList.toggle("geTempTreeCaret-down")})})(Ga,
Va)}else na.className="geTemplateCatLink geTemplateDrawioCatLink",na.setAttribute("title",ra.fullLbl),na.innerHTML=ra.lbl;Ea.appendChild(na);ya(za,ra.lblOnly,Na)}}function G(){mxUtils.get(c,function(fa){if(!oa){oa=!0;fa=fa.getXml().documentElement.firstChild;for(var ja={};null!=fa;){if("undefined"!==typeof fa.getAttribute)if("clibs"==fa.nodeName){for(var na=fa.getAttribute("name"),va=fa.getElementsByTagName("add"),ya=[],Ea=0;Ea<va.length;Ea++)ya.push(encodeURIComponent(mxUtils.getTextContent(va[Ea])));