wa.push({img:fa.getAttribute("img"),libs:fa.getAttribute("libs"),clibs:fa.getAttribute("clibs"),title:fa.getAttribute("title")}),fa=fa.nextSibling;p(wa)}});var ma=function(fa,ja,na){ka.style.display="";la.stop();V=!1;if(W)W=!1;else if(ja)da.innerText=ja;else{na=na||{};ja=0;for(var va in na)ja+=na[va].length;0==fa.length&&0==ja?da.innerText=mxResources.get("noDiagrams"):T(fa,!1,R,0==ja?null:na)}};K(S);var Da=null;mxEvent.addListener(Ca,"keyup",M);mxEvent.addListener(Ca,"search",M);mxEvent.addListener(Ca,
"input",M);mxEvent.addListener(Oa,"click",function(fa){H(!1,!1)});J&&mxEvent.addListener(Ia,"click",function(fa){H(!1,!0)});e&&mxEvent.addListener(P.querySelector(".geTempDlgLinkToDiagramBtn"),"click",function(fa){H(!0)});mxEvent.addListener(P.querySelector(".geTempDlgCancelBtn"),"click",function(){null!=f&&f();k||b.hideDialog(!0)})};TemplatesDialog.tagsList={};