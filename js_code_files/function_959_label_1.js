m)for(t=0;t<m.length;t++)m[t].node.style.visibility=c?"visible":"hidden"};var f=mxGuide.prototype.destroy;mxGuide.prototype.destroy=function(){f.call(this);var c=this.guidesArrVer,l=this.guidesArrHor;if(null!=c){for(var m=0;m<c.length;m++)c[m].destroy();this.guidesArrVer=null}if(null!=l){for(m=0;m<l.length;m++)l[m].destroy();this.guidesArrHor=null}}})();function mxRuler(b,d,f,c){function l(){var C=b.diagramContainer;J.style.top=C.offsetTop-B+"px";J.style.left=C.offsetLeft-B+"px";J.style.width=(f?0:C.offsetWidth)+B+"px";J.style.height=(f?C.offsetHeight:0)+B+"px"}function m(C,H,F){if(null!=t)return C;var T;return function(){var p=this,x=arguments,G=F&&!T;clearTimeout(T);T=setTimeout(function(){T=null;F||C.apply(p,x)},H);G&&C.apply(p,x)}}var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,
y=window.cancelAnimationFrame||window.mozCancelAnimationFrame,B=this.RULER_THICKNESS,z=this;this.unit=d;var A=Editor.isDarkMode()?{bkgClr:"#202020",outBkgClr:Editor.darkColor,cornerClr:Editor.darkColor,strokeClr:"#505759",fontClr:"#BBBBBB",guideClr:"#0088cf"}:{bkgClr:"#ffffff",outBkgClr:"#e8e9ed",cornerClr:"#fbfbfb",strokeClr:"#dadce0",fontClr:"#BBBBBB",guideClr:"#0000BB"},J=document.createElement("div");J.style.position="absolute";this.updateStyle=mxUtils.bind(this,function(){A=Editor.isDarkMode()?
{bkgClr:"#202020",outBkgClr:Editor.darkColor,cornerClr:Editor.darkColor,strokeClr:"#505759",fontClr:"#BBBBBB",guideClr:"#0088cf"}:{bkgClr:"#ffffff",outBkgClr:"#e8e9ed",cornerClr:"#fbfbfb",strokeClr:"#dadce0",fontClr:"#BBBBBB",guideClr:"#0000BB"};J.style.background=A.bkgClr;J.style[f?"borderRight":"borderBottom"]="0.5px solid "+A.strokeClr;J.style.borderLeft="0.5px solid "+A.strokeClr});this.updateStyle();document.body.appendChild(J);mxEvent.disableContextMenu(J);this.editorUiRefresh=b.refresh;b.refresh=
function(C){z.editorUiRefresh.apply(b,arguments);l()};l();var e=document.createElement("canvas");e.width=J.offsetWidth;e.height=J.offsetHeight;J.style.overflow="hidden";e.style.position="relative";J.appendChild(e);var g=e.getContext("2d");this.ui=b;var k=b.editor.graph;this.graph=k;this.container=J;this.canvas=e;var n=function(C,H,F,T,p){C=Math.round(C);H=Math.round(H);F=Math.round(F);T=Math.round(T);g.beginPath();g.moveTo(C+.5,H+.5);g.lineTo(F+.5,T+.5);g.stroke();p&&(f?(g.save(),g.translate(C,H),
g.rotate(-Math.PI/2),g.fillText(p,0,0),g.restore()):g.fillText(p,C,H))},u=function(){g.clearRect(0,0,e.width,e.height);g.beginPath();g.lineWidth=.7;g.strokeStyle=A.strokeClr;g.setLineDash([]);g.font="9px Arial";g.textAlign="center";var C=k.view.scale,H=k.view.getBackgroundPageBounds(),F=k.view.translate,T=k.pageVisible;F=T?B+(f?H.y-k.container.scrollTop:H.x-k.container.scrollLeft):B+(f?F.y*C-k.container.scrollTop:F.x*C-k.container.scrollLeft);var p=0;T&&(p=k.getPageLayout(),p=f?p.y*k.pageFormat.height:
p.x*k.pageFormat.width);var x;switch(z.unit){case mxConstants.POINTS:var G=x=10;var K=[3,5,5,5,5,10,5,5,5,5];break;case mxConstants.MILLIMETERS:x=10;G=mxConstants.PIXELS_PER_MM;K=[5,3,3,3,3,6,3,3,3,3];break;case mxConstants.METERS:x=20;G=mxConstants.PIXELS_PER_MM;K=[5,3,3,3,3,6,3,3,3,3,10,3,3,3,3,6,3,3,3,3];break;case mxConstants.INCHES:x=.5>=C||4<=C?8:16,G=mxConstants.PIXELS_PER_INCH/x,K=[5,3,5,3,7,3,5,3,7,3,5,3,7,3,5,3]}var N=G;2<=C?N=G/(2*Math.floor(C/2)):.5>=C&&(N=G*Math.floor(1/C/2)*(z.unit==
mxConstants.MILLIMETERS?2:1));G=null;H=T?Math.min(F+(f?H.height:H.width),f?e.height:e.width):f?e.height:e.width;if(T)if(g.fillStyle=A.outBkgClr,f){var I=F-B;0<I&&g.fillRect(0,B,B,I);H<e.height&&g.fillRect(0,H,B,e.height)}else I=F-B,0<I&&g.fillRect(B,0,I,B),H<e.width&&g.fillRect(H,0,e.width,B);g.fillStyle=A.fontClr;for(T=T?F:F%(N*C);T<=H;T+=N*C)if(I=Math.round((T-F)/C/N),!(T<B||I==G)){G=I;var M=null;0==I%x&&(M=z.formatText(p+I*N)+"");f?n(B-K[Math.abs(I)%x],T,B,T,M):n(T,B-K[Math.abs(I)%x],T,B,M)}g.lineWidth=
1;n(f?0:B,f?B:0,B,B);g.fillStyle=A.cornerClr;g.fillRect(0,0,B,B)},v=-1,E=function(){null!=t?(null!=y&&y(v),v=t(u)):u()};this.drawRuler=E;this.sizeListener=d=m(function(){var C=k.container;f?(C=C.offsetHeight+B,e.height!=C&&(e.height=C,J.style.height=C+"px",E())):(C=C.offsetWidth+B,e.width!=C&&(e.width=C,J.style.width=C+"px",E()))},10);this.pageListener=function(){E()};this.scrollListener=c=m(function(){var C=f?k.container.scrollTop:k.container.scrollLeft;z.lastScroll!=C&&(z.lastScroll=C,E())},10);
this.unitListener=function(C,H){z.setUnit(H.getProperty("unit"))};k.addListener(mxEvent.SIZE,d);k.container.addEventListener("scroll",c);k.view.addListener("unitChanged",this.unitListener);b.addListener("pageViewChanged",this.pageListener);b.addListener("pageScaleChanged",this.pageListener);b.addListener("pageFormatChanged",this.pageListener);this.setStyle=function(C){A=C;J.style.background=A.bkgClr;u()};this.origGuideMove=mxGuide.prototype.move;mxGuide.prototype.move=function(C,H,F,T){if(f&&4<C.height||
!f&&4<C.width){if(null!=z.guidePart)try{g.putImageData(z.guidePart.imgData1,z.guidePart.x1,z.guidePart.y1),g.putImageData(z.guidePart.imgData2,z.guidePart.x2,z.guidePart.y2),g.putImageData(z.guidePart.imgData3,z.guidePart.x3,z.guidePart.y3)}catch(W){}var p=z.origGuideMove.apply(this,arguments);try{g.lineWidth=.5;g.strokeStyle=A.guideClr;g.setLineDash([2]);if(f){var x=C.y+p.y+B-this.graph.container.scrollTop;var G=0;var K=x+C.height/2;var N=B/2;var I=x+C.height;var M=0;var Q=g.getImageData(G,x-1,B,
3);n(G,x,B,x);x--;var P=g.getImageData(N,K-1,B,3);n(N,K,B,K);K--;var V=g.getImageData(M,I-1,B,3);n(M,I,B,I);I--}else x=0,G=C.x+p.x+B-this.graph.container.scrollLeft,K=B/2,N=G+C.width/2,I=0,M=G+C.width,Q=g.getImageData(G-1,x,3,B),n(G,x,G,B),G--,P=g.getImageData(N-1,K,3,B),n(N,K,N,B),N--,V=g.getImageData(M-1,I,3,B),n(M,I,M,B),M--;if(null==z.guidePart||z.guidePart.x1!=G||z.guidePart.y1!=x)z.guidePart={imgData1:Q,x1:G,y1:x,imgData2:P,x2:N,y2:K,imgData3:V,x3:M,y3:I}}catch(W){}}else p=z.origGuideMove.apply(this,
arguments);return p};this.origGuideDestroy=mxGuide.prototype.destroy;mxGuide.prototype.destroy=function(){var C=z.origGuideDestroy.apply(this,arguments);if(null!=z.guidePart)try{g.putImageData(z.guidePart.imgData1,z.guidePart.x1,z.guidePart.y1),g.putImageData(z.guidePart.imgData2,z.guidePart.x2,z.guidePart.y2),g.putImageData(z.guidePart.imgData3,z.guidePart.x3,z.guidePart.y3),z.guidePart=null}catch(H){}return C}}mxRuler.prototype.RULER_THICKNESS=14;mxRuler.prototype.unit=mxConstants.POINTS;