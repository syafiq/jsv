Editor.prototype.isExportToCanvas=function(){return mxClient.IS_CHROMEAPP||this.useCanvasForExport};Editor.prototype.getMaxCanvasScale=function(m,z,K){var R=mxClient.IS_FF?8192:16384;return Math.min(K,Math.min(R/m,R/z))};Editor.prototype.exportToCanvas=function(m,z,K,R,O,T,Q,W,Z,ba,aa,ca,Y,ea,da,la,sa,xa){try{T=null!=T?T:!0;Q=null!=Q?Q:!0;ca=null!=ca?ca:this.graph;Y=null!=Y?Y:0;var ta=Z?null:ca.background;ta==mxConstants.NONE&&(ta=null);null==ta&&(ta=R);null==ta&&0==Z&&(ta=la?this.graph.defaultPageBackgroundColor:
"#ffffff");this.convertImages(ca.getSvg(null,null,Y,ea,null,Q,null,null,null,ba,null,la,sa,xa),mxUtils.bind(this,function(ha){try{var Qa=new Image;Qa.onload=mxUtils.bind(this,function(){try{var Ea=function(){mxClient.IS_SF?window.setTimeout(function(){va.drawImage(Qa,0,0);m(Ia,ha)},0):(va.drawImage(Qa,0,0),m(Ia,ha))},Ia=document.createElement("canvas"),na=parseInt(ha.getAttribute("width")),Pa=parseInt(ha.getAttribute("height"));W=null!=W?W:1;null!=z&&(W=T?Math.min(1,Math.min(3*z/(4*Pa),z/na)):z/na);
W=this.getMaxCanvasScale(na,Pa,W);na=Math.ceil(W*na);Pa=Math.ceil(W*Pa);Ia.setAttribute("width",na);Ia.setAttribute("height",Pa);var va=Ia.getContext("2d");null!=ta&&(va.beginPath(),va.rect(0,0,na,Pa),va.fillStyle=ta,va.fill());1!=W&&va.scale(W,W);if(da){var Ba=ca.view,Aa=Ba.scale;Ba.scale=1;var Ma=btoa(unescape(encodeURIComponent(Ba.createSvgGrid(Ba.gridColor))));Ba.scale=Aa;Ma="data:image/svg+xml;base64,"+Ma;var ia=ca.gridSize*Ba.gridSteps*W,za=ca.getGraphBounds(),pa=Ba.translate.x*Aa,ua=Ba.translate.y*
Aa,ma=pa+(za.x-pa)/Aa-Y,Ca=ua+(za.y-ua)/Aa-Y,fa=new Image;fa.onload=function(){try{for(var ja=-Math.round(ia-mxUtils.mod((pa-ma)*W,ia)),ka=-Math.round(ia-mxUtils.mod((ua-Ca)*W,ia));ja<na;ja+=ia)for(var ra=ka;ra<Pa;ra+=ia)va.drawImage(fa,ja/W,ra/W);Ea()}catch(wa){null!=O&&O(wa)}};fa.onerror=function(ja){null!=O&&O(ja)};fa.src=Ma}else Ea()}catch(ja){null!=O&&O(ja)}});Qa.onerror=function(Ea){null!=O&&O(Ea)};ba&&this.graph.addSvgShadow(ha);this.graph.mathEnabled&&this.addMathCss(ha);var La=mxUtils.bind(this,
function(){try{null!=this.resolvedFontCss&&this.addFontCss(ha,this.resolvedFontCss),Qa.src=Editor.createSvgDataUri(mxUtils.getXml(ha))}catch(Ea){null!=O&&O(Ea)}});this.embedExtFonts(mxUtils.bind(this,function(Ea){try{null!=Ea&&this.addFontCss(ha,Ea),this.loadFonts(La)}catch(Ia){null!=O&&O(Ia)}}))}catch(Ea){null!=O&&O(Ea)}}),K,aa)}catch(ha){null!=O&&O(ha)}};Editor.crcTable=[];for(var t=0;256>t;t++)for(var v=t,B=0;8>B;B++)v=1==(v&1)?3988292384^v>>>1:v>>>1,Editor.crcTable[t]=v;Editor.updateCRC=function(m,