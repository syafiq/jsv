H=I.height,L=(300-z)/2,E=(300-H)/2;t.x<L?(t.width-=L-t.x,t.x=L):t.x+t.width>L+z&&(t.width=L+z-t.x,t.x=Math.min(t.x,L+z));t.y<E?(t.height-=E-t.y,t.y=E):t.y+t.height>E+H&&(t.height=E+H-t.y,t.y=Math.min(t.y,E+H));var M=(t.x-L)/z*100;z=100-(t.x+t.width-L)/z*100;L=(t.y-E)/H*100;t=100-(t.y+t.height-E)/H*100;return"inset("+mxUtils.format(L)+"% "+mxUtils.format(z)+"% "+mxUtils.format(t)+"% "+mxUtils.format(M)+"%"+(U?" round "+c+"%":m?" round 50%":"")+")"}function v(U){null!=D&&(!0!==U&&(D.model.setGeometry(e,
N.clone()),c=5,B.value=c),D.model.setStyle(e,g+u()),D.selectAll(),y.style.visibility=q.checked?"visible":"hidden")}var A=document.createElement("div"),F=document.createElement("div");F.style.height="300px";F.style.width="300px";F.style.display="inline-flex";F.style.justifyContent="center";F.style.alignItems="center";F.style.position="absolute";var I=document.createElement("img");I.onload=function(){function U(){D.model.setStyle(e,g+u())}D=new Graph(J);D.autoExtend=!1;D.autoScroll=!1;D.setGridEnabled(!1);