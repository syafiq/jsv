Editor.prototype.isExportToCanvas=function(){return mxClient.IS_CHROMEAPP||this.useCanvasForExport};Editor.prototype.getMaxCanvasScale=function(q,D,L){var U=mxClient.IS_FF?8192:16384;return Math.min(L,Math.min(U/q,U/D))};Editor.prototype.exportToCanvas=function(q,D,L,U,O,S,R,X,Z,ba,aa,ca,Y,da,ea,ka,sa,xa){try{S=null!=S?S:!0;R=null!=R?R:!0;ca=null!=ca?ca:this.graph;Y=null!=Y?Y:0;var ta=Z?null:ca.background;ta==mxConstants.NONE&&(ta=null);null==ta&&(ta=U);null==ta&&0==Z&&(ta=ka?this.graph.defaultPageBackgroundColor:
"#ffffff");this.convertImages(ca.getSvg(null,null,Y,da,null,R,null,null,null,ba,null,ka,sa,xa),mxUtils.bind(this,function(ha){try{var Oa=new Image;Oa.onload=mxUtils.bind(this,function(){try{var Ca=function(){mxClient.IS_SF?window.setTimeout(function(){oa.drawImage(Oa,0,0);q(Fa,ha)},0):(oa.drawImage(Oa,0,0),q(Fa,ha))},Fa=document.createElement("canvas"),la=parseInt(ha.getAttribute("width")),Ja=parseInt(ha.getAttribute("height"));X=null!=X?X:1;null!=D&&(X=S?Math.min(1,Math.min(3*D/(4*Ja),D/la)):D/la);
X=this.getMaxCanvasScale(la,Ja,X);la=Math.ceil(X*la);Ja=Math.ceil(X*Ja);Fa.setAttribute("width",la);Fa.setAttribute("height",Ja);var oa=Fa.getContext("2d");null!=ta&&(oa.beginPath(),oa.rect(0,0,la,Ja),oa.fillStyle=ta,oa.fill());1!=X&&oa.scale(X,X);if(ea){var Ba=ca.view,Aa=Ba.scale;Ba.scale=1;var La=btoa(unescape(encodeURIComponent(Ba.createSvgGrid(Ba.gridColor))));Ba.scale=Aa;La="data:image/svg+xml;base64,"+La;var ia=ca.gridSize*Ba.gridSteps*X,wa=ca.getGraphBounds(),qa=Ba.translate.x*Aa,ua=Ba.translate.y*
Aa,ma=qa+(wa.x-qa)/Aa-Y,Da=ua+(wa.y-ua)/Aa-Y,fa=new Image;fa.onload=function(){try{for(var ja=-Math.round(ia-mxUtils.mod((qa-ma)*X,ia)),na=-Math.round(ia-mxUtils.mod((ua-Da)*X,ia));ja<la;ja+=ia)for(var va=na;va<Ja;va+=ia)oa.drawImage(fa,ja/X,va/X);Ca()}catch(ya){null!=O&&O(ya)}};fa.onerror=function(ja){null!=O&&O(ja)};fa.src=La}else Ca()}catch(ja){null!=O&&O(ja)}});Oa.onerror=function(Ca){null!=O&&O(Ca)};ba&&this.graph.addSvgShadow(ha);this.graph.mathEnabled&&this.addMathCss(ha);var Ia=mxUtils.bind(this,
function(){try{null!=this.resolvedFontCss&&this.addFontCss(ha,this.resolvedFontCss),Oa.src=Editor.createSvgDataUri(mxUtils.getXml(ha))}catch(Ca){null!=O&&O(Ca)}});this.embedExtFonts(mxUtils.bind(this,function(Ca){try{null!=Ca&&this.addFontCss(ha,Ca),this.loadFonts(Ia)}catch(Fa){null!=O&&O(Fa)}}))}catch(Ca){null!=O&&O(Ca)}}),L,aa)}catch(ha){null!=O&&O(ha)}};Editor.crcTable=[];for(var l=0;256>l;l++)for(var m=l,t=0;8>t;t++)m=1==(m&1)?3988292384^m>>>1:m>>>1,Editor.crcTable[l]=m;Editor.updateCRC=function(q,