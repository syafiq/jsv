var ExportDialog=function(a){function b(){var P=r.value,Y=P.lastIndexOf(".");r.value=0<Y?P.substring(0,Y+1)+x.value:P+"."+x.value;"xml"===x.value?(B.setAttribute("disabled","true"),C.setAttribute("disabled","true"),F.setAttribute("disabled","true"),R.setAttribute("disabled","true")):(B.removeAttribute("disabled"),C.removeAttribute("disabled"),F.removeAttribute("disabled"),R.removeAttribute("disabled"));"png"===x.value||"svg"===x.value||"pdf"===x.value?Q.removeAttribute("disabled"):Q.setAttribute("disabled",
"disabled");"png"===x.value||"jpg"===x.value||"pdf"===x.value?S.removeAttribute("disabled"):S.setAttribute("disabled","disabled");"png"===x.value?(H.removeAttribute("disabled"),E.removeAttribute("disabled")):(H.setAttribute("disabled","disabled"),E.setAttribute("disabled","disabled"))}function f(){C.style.backgroundColor=C.value*F.value>MAX_AREA||0>=C.value?"red":"";F.style.backgroundColor=C.value*F.value>MAX_AREA||0>=F.value?"red":""}var e=a.editor.graph,g=e.getGraphBounds(),d=e.view.scale,h=Math.ceil(g.width/
d),n=Math.ceil(g.height/d);d=document.createElement("table");var u=document.createElement("tbody");d.setAttribute("cellpadding",mxClient.IS_SF?"0":"2");g=document.createElement("tr");var m=document.createElement("td");m.style.fontSize="10pt";m.style.width="100px";mxUtils.write(m,mxResources.get("filename")+":");g.appendChild(m);var r=document.createElement("input");r.setAttribute("value",a.editor.getOrCreateFilename());r.style.width="180px";m=document.createElement("td");m.appendChild(r);g.appendChild(m);
u.appendChild(g);g=document.createElement("tr");m=document.createElement("td");m.style.fontSize="10pt";mxUtils.write(m,mxResources.get("format")+":");g.appendChild(m);var x=document.createElement("select");x.style.width="180px";m=document.createElement("option");m.setAttribute("value","png");mxUtils.write(m,mxResources.get("formatPng"));x.appendChild(m);m=document.createElement("option");ExportDialog.showGifOption&&(m.setAttribute("value","gif"),mxUtils.write(m,mxResources.get("formatGif")),x.appendChild(m));
m=document.createElement("option");m.setAttribute("value","jpg");mxUtils.write(m,mxResources.get("formatJpg"));x.appendChild(m);a.printPdfExport||(m=document.createElement("option"),m.setAttribute("value","pdf"),mxUtils.write(m,mxResources.get("formatPdf")),x.appendChild(m));m=document.createElement("option");m.setAttribute("value","svg");mxUtils.write(m,mxResources.get("formatSvg"));x.appendChild(m);ExportDialog.showXmlOption&&(m=document.createElement("option"),m.setAttribute("value","xml"),mxUtils.write(m,
mxResources.get("formatXml")),x.appendChild(m));m=document.createElement("td");m.appendChild(x);g.appendChild(m);u.appendChild(g);g=document.createElement("tr");m=document.createElement("td");m.style.fontSize="10pt";mxUtils.write(m,mxResources.get("zoom")+" (%):");g.appendChild(m);var B=document.createElement("input");B.setAttribute("type","number");B.setAttribute("value","100");B.style.width="180px";m=document.createElement("td");m.appendChild(B);g.appendChild(m);u.appendChild(g);g=document.createElement("tr");
m=document.createElement("td");m.style.fontSize="10pt";mxUtils.write(m,mxResources.get("width")+":");g.appendChild(m);var C=document.createElement("input");C.setAttribute("value",h);C.style.width="180px";m=document.createElement("td");m.appendChild(C);g.appendChild(m);u.appendChild(g);g=document.createElement("tr");m=document.createElement("td");m.style.fontSize="10pt";mxUtils.write(m,mxResources.get("height")+":");g.appendChild(m);var F=document.createElement("input");F.setAttribute("value",n);F.style.width=
"180px";m=document.createElement("td");m.appendChild(F);g.appendChild(m);u.appendChild(g);g=document.createElement("tr");m=document.createElement("td");m.style.fontSize="10pt";mxUtils.write(m,mxResources.get("dpi")+":");g.appendChild(m);var H=document.createElement("select");H.style.width="180px";m=document.createElement("option");m.setAttribute("value","100");mxUtils.write(m,"100dpi");H.appendChild(m);m=document.createElement("option");m.setAttribute("value","200");mxUtils.write(m,"200dpi");H.appendChild(m);
m=document.createElement("option");m.setAttribute("value","300");mxUtils.write(m,"300dpi");H.appendChild(m);m=document.createElement("option");m.setAttribute("value","400");mxUtils.write(m,"400dpi");H.appendChild(m);m=document.createElement("option");m.setAttribute("value","custom");mxUtils.write(m,mxResources.get("custom"));H.appendChild(m);var E=document.createElement("input");E.style.width="180px";E.style.display="none";E.setAttribute("value","100");E.setAttribute("type","number");E.setAttribute("min",
"50");E.setAttribute("step","50");var N=!1;mxEvent.addListener(H,"change",function(){"custom"==this.value?(this.style.display="none",E.style.display="",E.focus()):(E.value=this.value,N||(B.value=this.value))});mxEvent.addListener(E,"change",function(){var P=parseInt(E.value);isNaN(P)||0>=P?E.style.backgroundColor="red":(E.style.backgroundColor="",N||(B.value=P))});m=document.createElement("td");m.appendChild(H);m.appendChild(E);g.appendChild(m);u.appendChild(g);g=document.createElement("tr");m=document.createElement("td");
m.style.fontSize="10pt";mxUtils.write(m,mxResources.get("background")+":");g.appendChild(m);var Q=document.createElement("input");Q.setAttribute("type","checkbox");Q.checked=null==e.background||e.background==mxConstants.NONE;m=document.createElement("td");m.appendChild(Q);mxUtils.write(m,mxResources.get("transparent"));g.appendChild(m);u.appendChild(g);g=document.createElement("tr");m=document.createElement("td");m.style.fontSize="10pt";mxUtils.write(m,mxResources.get("grid")+":");g.appendChild(m);
var S=document.createElement("input");S.setAttribute("type","checkbox");S.checked=!1;m=document.createElement("td");m.appendChild(S);g.appendChild(m);u.appendChild(g);g=document.createElement("tr");m=document.createElement("td");m.style.fontSize="10pt";mxUtils.write(m,mxResources.get("borderWidth")+":");g.appendChild(m);var R=document.createElement("input");R.setAttribute("type","number");R.setAttribute("value",ExportDialog.lastBorderValue);R.style.width="180px";m=document.createElement("td");m.appendChild(R);
g.appendChild(m);u.appendChild(g);d.appendChild(u);mxEvent.addListener(x,"change",b);b();mxEvent.addListener(B,"change",function(){N=!0;var P=Math.max(0,parseFloat(B.value)||100)/100;B.value=parseFloat((100*P).toFixed(2));0<h?(C.value=Math.floor(h*P),F.value=Math.floor(n*P)):(B.value="100",C.value=h,F.value=n);f()});mxEvent.addListener(C,"change",function(){var P=parseInt(C.value)/h;0<P?(B.value=parseFloat((100*P).toFixed(2)),F.value=Math.floor(n*P)):(B.value="100",C.value=h,F.value=n);f()});mxEvent.addListener(F,
"change",function(){var P=parseInt(F.value)/n;0<P?(B.value=parseFloat((100*P).toFixed(2)),C.value=Math.floor(h*P)):(B.value="100",C.value=h,F.value=n);f()});g=document.createElement("tr");m=document.createElement("td");m.setAttribute("align","right");m.style.paddingTop="22px";m.colSpan=2;var ba=mxUtils.button(mxResources.get("export"),mxUtils.bind(this,function(){if(0>=parseInt(B.value))mxUtils.alert(mxResources.get("drawingEmpty"));else{var P=r.value,Y=x.value,ka=Math.max(0,parseFloat(B.value)||
100)/100,fa=Math.max(0,parseInt(R.value)),ra=e.background,L=Math.max(1,parseInt(E.value));if(("svg"==Y||"png"==Y||"pdf"==Y)&&Q.checked)ra=null;else if(null==ra||ra==mxConstants.NONE)ra="#ffffff";ExportDialog.lastBorderValue=fa;ExportDialog.exportFile(a,P,Y,ra,ka,fa,L,S.checked)}}));ba.className="geBtn gePrimaryBtn";var T=mxUtils.button(mxResources.get("cancel"),function(){a.hideDialog()});T.className="geBtn";a.editor.cancelFirst?(m.appendChild(T),m.appendChild(ba)):(m.appendChild(ba),m.appendChild(T));
g.appendChild(m);u.appendChild(g);d.appendChild(u);this.container=d};ExportDialog.lastBorderValue=0;ExportDialog.showGifOption=!0;ExportDialog.showXmlOption=!0;