J.clone()),e=5,C.value=e),A.model.setStyle(g,k+l()),A.selectAll(),E.style.visibility=u.checked?"visible":"hidden")}var t=document.createElement("div"),y=document.createElement("div");y.style.height="300px";y.style.width="300px";y.style.display="inline-flex";y.style.justifyContent="center";y.style.alignItems="center";y.style.position="absolute";var B=document.createElement("img");B.onload=function(){function T(){A.model.setStyle(g,k+l())}A=new Graph(z);A.autoExtend=!1;A.autoScroll=!1;A.setGridEnabled(!1);
A.setEnabled(!0);A.setPanning(!1);A.setConnectable(!1);A.getRubberband().setEnabled(!1);A.graphHandler.allowLivePreview=!1;var p=A.createVertexHandler;A.createVertexHandler=function(){var U=p.apply(this,arguments);U.livePreview=!1;return U};if(null!=f)try{if("inset"==f.substring(0,5)){var x=g.geometry,G=B.width,K=B.height,N=(300-G)/2,I=(300-K)/2,M=f.match(/\(([^)]+)\)/)[1].split(/[ ,]+/),Q=parseFloat(M[0]),P=parseFloat(M[1]),V=parseFloat(M[2]),W=parseFloat(M[3]);isFinite(Q)&&isFinite(P)&&isFinite(V)&&
isFinite(W)?(x.x=W/100*G+N,x.y=Q/100*K+I,x.width=(100-P)/100*G+N-x.x,x.height=(100-V)/100*K+I-x.y,"round"==M[4]?"50%"==M[5]?v.setAttribute("checked","checked"):(e=parseInt(M[5]),C.value=e,u.setAttribute("checked","checked"),E.style.visibility="visible"):n.setAttribute("checked","checked")):f=null}else f=null}catch(U){}g.style=k+(f?f:l());g.vertex=!0;A.addCell(g,null,null,null,null);A.selectAll();A.addListener(mxEvent.CELLS_MOVED,T);A.addListener(mxEvent.CELLS_RESIZED,T);var q=A.graphHandler.mouseUp,
D=A.graphHandler.mouseDown;A.graphHandler.mouseUp=function(){q.apply(this,arguments);z.style.backgroundColor="#fff9"};A.graphHandler.mouseDown=function(){D.apply(this,arguments);z.style.backgroundColor=""};A.dblClick=function(){};var L=A.getSelectionModel().changeSelection;A.getSelectionModel().changeSelection=function(){L.call(this,[g],[g])}};B.onerror=function(){B.onload=null;B.src=Editor.errorImage};B.setAttribute("src",d);B.style.maxWidth="300px";B.style.maxHeight="300px";y.appendChild(B);t.appendChild(y);