var GoogleSitesDialog=function(b,e){function f(){var q=null!=U&&null!=U.getTitle()?U.getTitle():this.defaultFilename;if(I.checked&&""!=d.value){var v="https://www.draw.io/gadget.xml?type=4&diagram="+encodeURIComponent(mxUtils.htmlEntities(d.value));null!=q&&(v+="&title="+encodeURIComponent(q));0<G.length&&(v+="&s="+G);""!=g.value&&"0"!=g.value&&(v+="&border="+g.value);""!=J.value&&(v+="&height="+J.value);v+="&pan="+(k.checked?"1":"0");v+="&zoom="+(n.checked?"1":"0");v+="&fit="+(F.checked?"1":"0");
v+="&resize="+(D.checked?"1":"0");v+="&x0="+Number(A.value);v+="&y0="+C;l.mathEnabled&&(v+="&math=1");u.checked?v+="&edit=_blank":x.checked&&(v+="&edit="+encodeURIComponent(mxUtils.htmlEntities(window.location.href)));z.value=v}else U.constructor==DriveFile||U.constructor==DropboxFile?(v="https://www.draw.io/gadget.xml?embed=0&diagram=",""!=d.value?v+=encodeURIComponent(mxUtils.htmlEntities(d.value))+"&type=3":(v+=U.getHash().substring(1),v=U.constructor==DropboxFile?v+"&type=2":v+"&type=1"),null!=
q&&(v+="&title="+encodeURIComponent(q)),""!=J.value&&(q=parseInt(J.value)+parseInt(A.value),v+="&height="+q),z.value=v):z.value=""}var c=document.createElement("div"),l=b.editor.graph,m=l.getGraphBounds(),t=l.view.scale,y=Math.floor(m.x/t-l.view.translate.x),C=Math.floor(m.y/t-l.view.translate.y);mxUtils.write(c,mxResources.get("googleGadget")+":");mxUtils.br(c);var z=document.createElement("input");z.setAttribute("type","text");z.style.marginBottom="8px";z.style.marginTop="2px";z.style.width="410px";
c.appendChild(z);mxUtils.br(c);this.init=function(){z.focus();mxClient.IS_GC||mxClient.IS_FF||5<=document.documentMode?z.select():document.execCommand("selectAll",!1,null)};mxUtils.write(c,mxResources.get("top")+":");var A=document.createElement("input");A.setAttribute("type","text");A.setAttribute("size","4");A.style.marginRight="16px";A.style.marginLeft="4px";A.value=y;c.appendChild(A);mxUtils.write(c,mxResources.get("height")+":");var J=document.createElement("input");J.setAttribute("type","text");
J.setAttribute("size","4");J.style.marginLeft="4px";J.value=Math.ceil(m.height/t);c.appendChild(J);mxUtils.br(c);m=document.createElement("hr");m.setAttribute("size","1");m.style.marginBottom="16px";m.style.marginTop="16px";c.appendChild(m);mxUtils.write(c,mxResources.get("publicDiagramUrl")+":");mxUtils.br(c);var d=document.createElement("input");d.setAttribute("type","text");d.setAttribute("size","28");d.style.marginBottom="8px";d.style.marginTop="2px";d.style.width="410px";d.value=e||"";c.appendChild(d);
mxUtils.br(c);mxUtils.write(c,mxResources.get("borderWidth")+":");var g=document.createElement("input");g.setAttribute("type","text");g.setAttribute("size","3");g.style.marginBottom="8px";g.style.marginLeft="4px";g.value="0";c.appendChild(g);mxUtils.br(c);var k=document.createElement("input");k.setAttribute("type","checkbox");k.setAttribute("checked","checked");k.defaultChecked=!0;k.style.marginLeft="16px";c.appendChild(k);mxUtils.write(c,mxResources.get("pan")+" ");var n=document.createElement("input");
n.setAttribute("type","checkbox");n.setAttribute("checked","checked");n.defaultChecked=!0;n.style.marginLeft="8px";c.appendChild(n);mxUtils.write(c,mxResources.get("zoom")+" ");var x=document.createElement("input");x.setAttribute("type","checkbox");x.style.marginLeft="8px";x.setAttribute("title",window.location.href);c.appendChild(x);mxUtils.write(c,mxResources.get("edit")+" ");var u=document.createElement("input");u.setAttribute("type","checkbox");u.style.marginLeft="8px";c.appendChild(u);mxUtils.write(c,
mxResources.get("asNew")+" ");mxUtils.br(c);var D=document.createElement("input");D.setAttribute("type","checkbox");D.setAttribute("checked","checked");D.defaultChecked=!0;D.style.marginLeft="16px";c.appendChild(D);mxUtils.write(c,mxResources.get("resize")+" ");var F=document.createElement("input");F.setAttribute("type","checkbox");F.style.marginLeft="8px";c.appendChild(F);mxUtils.write(c,mxResources.get("fit")+" ");var I=document.createElement("input");I.setAttribute("type","checkbox");I.style.marginLeft=
"8px";c.appendChild(I);mxUtils.write(c,mxResources.get("embed")+" ");var G=b.getBasenames().join(";"),U=b.getCurrentFile();mxEvent.addListener(k,"change",f);mxEvent.addListener(n,"change",f);mxEvent.addListener(D,"change",f);mxEvent.addListener(F,"change",f);mxEvent.addListener(x,"change",f);mxEvent.addListener(u,"change",f);mxEvent.addListener(I,"change",f);mxEvent.addListener(J,"change",f);mxEvent.addListener(A,"change",f);mxEvent.addListener(g,"change",f);mxEvent.addListener(d,"change",f);f();
mxEvent.addListener(z,"click",function(){z.focus();mxClient.IS_GC||mxClient.IS_FF||5<=document.documentMode?z.select():document.execCommand("selectAll",!1,null)});e=document.createElement("div");e.style.paddingTop="12px";e.style.textAlign="right";m=mxUtils.button(mxResources.get("close"),function(){b.hideDialog()});m.className="geBtn gePrimaryBtn";e.appendChild(m);c.appendChild(e);this.container=c},CreateGraphDialog=function(b,e,f){var c=document.createElement("div");c.style.textAlign="right";this.init=