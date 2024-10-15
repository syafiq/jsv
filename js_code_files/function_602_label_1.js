e.style.textAlign="right";var g=mxUtils.button(mxResources.get("help"),function(){b.openLink("https://www.diagrams.net/doc/faq/plugins")});g.className="geBtn";b.isOffline()&&!mxClient.IS_CHROMEAPP&&(g.style.display="none");e.appendChild(g);b.editor.cancelFirst?(c||e.appendChild(A),e.appendChild(z),e.appendChild(J)):(e.appendChild(z),e.appendChild(J),c||e.appendChild(A));m.appendChild(e);this.container=m},CropImageDialog=function(b,d,f,c){function l(){var T=u.checked,p=v.checked,x=g.geometry,G=B.width,
K=B.height,N=(300-G)/2,I=(300-K)/2;x.x<N?(x.width-=N-x.x,x.x=N):x.x+x.width>N+G&&(x.width=N+G-x.x,x.x=Math.min(x.x,N+G));x.y<I?(x.height-=I-x.y,x.y=I):x.y+x.height>I+K&&(x.height=I+K-x.y,x.y=Math.min(x.y,I+K));var M=(x.x-N)/G*100;G=100-(x.x+x.width-N)/G*100;N=(x.y-I)/K*100;x=100-(x.y+x.height-I)/K*100;return"inset("+mxUtils.format(N)+"% "+mxUtils.format(G)+"% "+mxUtils.format(x)+"% "+mxUtils.format(M)+"%"+(T?" round "+e+"%":p?" round 50%":"")+")"}function m(T){null!=A&&(!0!==T&&(A.model.setGeometry(g,
J.clone()),e=5,C.value=e),A.model.setStyle(g,k+l()),A.selectAll(),E.style.visibility=u.checked?"visible":"hidden")}var t=document.createElement("div"),y=document.createElement("div");y.style.height="300px";y.style.width="300px";y.style.display="inline-flex";y.style.justifyContent="center";y.style.alignItems="center";y.style.position="absolute";var B=document.createElement("img");B.onload=function(){function T(){A.model.setStyle(g,k+l())}A=new Graph(z);A.autoExtend=!1;A.autoScroll=!1;A.setGridEnabled(!1);
A.setEnabled(!0);A.setPanning(!1);A.setConnectable(!1);A.getRubberband().setEnabled(!1);A.graphHandler.allowLivePreview=!1;var p=A.createVertexHandler;A.createVertexHandler=function(){var U=p.apply(this,arguments);U.livePreview=!1;return U};if(null!=f)try{if("inset"==f.substring(0,5)){var x=g.geometry,G=B.width,K=B.height,N=(300-G)/2,I=(300-K)/2,M=f.match(/\(([^)]+)\)/)[1].split(/[ ,]+/),Q=parseFloat(M[0]),P=parseFloat(M[1]),V=parseFloat(M[2]),W=parseFloat(M[3]);isFinite(Q)&&isFinite(P)&&isFinite(V)&&
isFinite(W)?(x.x=W/100*G+N,x.y=Q/100*K+I,x.width=(100-P)/100*G+N-x.x,x.height=(100-V)/100*K+I-x.y,"round"==M[4]?"50%"==M[5]?v.setAttribute("checked","checked"):(e=parseInt(M[5]),C.value=e,u.setAttribute("checked","checked"),E.style.visibility="visible"):n.setAttribute("checked","checked")):f=null}else f=null}catch(U){}g.style=k+(f?f:l());g.vertex=!0;A.addCell(g,null,null,null,null);A.selectAll();A.addListener(mxEvent.CELLS_MOVED,T);A.addListener(mxEvent.CELLS_RESIZED,T);var q=A.graphHandler.mouseUp,
D=A.graphHandler.mouseDown;A.graphHandler.mouseUp=function(){q.apply(this,arguments);z.style.backgroundColor="#fff9"};A.graphHandler.mouseDown=function(){D.apply(this,arguments);z.style.backgroundColor=""};A.dblClick=function(){};var L=A.getSelectionModel().changeSelection;A.getSelectionModel().changeSelection=function(){L.call(this,[g],[g])}};B.onerror=function(){B.onload=null;B.src=Editor.errorImage};B.setAttribute("src",d);B.style.maxWidth="300px";B.style.maxHeight="300px";y.appendChild(B);t.appendChild(y);
var z=document.createElement("div");z.style.width="300px";z.style.height="300px";z.style.overflow="hidden";z.style.backgroundColor="#fff9";t.appendChild(z);var A=null,J=new mxGeometry(100,100,100,100),e=5,g=new mxCell("",J.clone(),""),k="shape=image;fillColor=none;rotatable=0;cloneable=0;deletable=0;image="+d.replace(";base64","")+";clipPath=",n=document.createElement("input");n.setAttribute("type","radio");n.setAttribute("id","croppingRect");n.setAttribute("name","croppingShape");n.setAttribute("checked",
"checked");n.style.margin="5px";t.appendChild(n);d=document.createElement("label");d.setAttribute("for","croppingRect");mxUtils.write(d,mxResources.get("rectangle"));t.appendChild(d);var u=document.createElement("input");u.setAttribute("type","radio");u.setAttribute("id","croppingRounded");u.setAttribute("name","croppingShape");u.style.margin="5px";t.appendChild(u);d=document.createElement("label");d.setAttribute("for","croppingRounded");mxUtils.write(d,mxResources.get("rounded"));t.appendChild(d);
var v=document.createElement("input");v.setAttribute("type","radio");v.setAttribute("id","croppingEllipse");v.setAttribute("name","croppingShape");v.style.margin="5px";t.appendChild(v);d=document.createElement("label");d.setAttribute("for","croppingEllipse");mxUtils.write(d,mxResources.get("ellipse"));t.appendChild(d);mxEvent.addListener(n,"change",m);mxEvent.addListener(u,"change",m);mxEvent.addListener(v,"change",m);var E=document.createElement("div");E.style.textAlign="center";E.style.visibility=
"hidden";var C=document.createElement("input");C.setAttribute("type","range");C.setAttribute("min","1");C.setAttribute("max","49");C.setAttribute("value",e);C.setAttribute("title",mxResources.get("arcSize"));E.appendChild(C);t.appendChild(E);mxEvent.addListener(C,"change",function(){e=this.value;m(!0)});d=mxUtils.button(mxResources.get("cancel"),function(){b.hideDialog()});d.className="geBtn";y=mxUtils.button(mxResources.get("apply"),function(){c(l(),g.geometry.width,g.geometry.height);b.hideDialog()});
y.className="geBtn gePrimaryBtn";var H=mxUtils.button(mxResources.get("reset"),function(){c(null,B.width,B.height);b.hideDialog()});H.className="geBtn";var F=document.createElement("div");F.style.marginTop="10px";F.style.textAlign="right";b.editor.cancelFirst?(F.appendChild(d),F.appendChild(H),F.appendChild(y)):(F.appendChild(H),F.appendChild(y),F.appendChild(d));t.appendChild(F);this.container=t},EditGeometryDialog=function(b,d){var f=b.editor.graph,c=1==d.length?f.getCellGeometry(d[0]):null,l=document.createElement("div"),