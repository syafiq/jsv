mxGraphView.prototype.validateBackgroundStyles=function(){var h=this.graph,n=null==h.background||h.background==mxConstants.NONE?h.defaultPageBackgroundColor:h.background,v=null!=n&&this.gridColor!=n.toLowerCase()?this.gridColor:"#ffffff",m="none",r="";if(h.isGridEnabled()||h.gridVisible){r=10;mxClient.IS_SVG?(m=unescape(encodeURIComponent(this.createSvgGrid(v))),m=window.btoa?btoa(m):Base64.encode(m,!0),m="url(data:image/svg+xml;base64,"+m+")",r=h.gridSize*this.scale*this.gridSteps):m="url("+this.gridImage+
")";var x=v=0;null!=h.view.backgroundPageShape&&(x=this.getBackgroundPageBounds(),v=1+x.x,x=1+x.y);r=-Math.round(r-mxUtils.mod(this.translate.x*this.scale-v,r))+"px "+-Math.round(r-mxUtils.mod(this.translate.y*this.scale-x,r))+"px"}v=h.view.canvas;null!=v.ownerSVGElement&&(v=v.ownerSVGElement);x=!Editor.isDarkMode()&&("simple"==Editor.currentTheme||Editor.useSimpleBackgroundForSketch&&"sketch"==Editor.currentTheme);null!=h.view.backgroundPageShape?(h.view.backgroundPageShape.node.style.backgroundPosition=
r,h.view.backgroundPageShape.node.style.backgroundImage=m,h.view.backgroundPageShape.node.style.backgroundColor=n,h.view.backgroundPageShape.node.style.borderColor=h.defaultPageBorderColor,h.container.className="geDiagramContainer geDiagramBackdrop",v.style.backgroundImage="none",v.style.backgroundColor="",h.container.style.backgroundColor=x?h.simpleBackgroundColor:""):(h.container.className="geDiagramContainer",v.style.backgroundPosition=r,v.style.backgroundImage=m,!x||null!=h.background&&h.background!=
mxConstants.NONE?v.style.backgroundColor=n:(v.style.backgroundColor=h.simpleBackgroundColor,h.container.style.backgroundColor=""))};mxGraphView.prototype.createSvgGrid=function(h){for(var n=this.graph.gridSize*this.scale;n<this.minGridSize;)n*=2;for(var v=this.gridSteps*n,m=[],r=1;r<this.gridSteps;r++){var x=r*n;m.push("M 0 "+x+" L "+v+" "+x+" M "+x+" 0 L "+x+" "+v)}return'<svg width="'+v+'" height="'+v+'" xmlns="'+mxConstants.NS_SVG+'"><defs><pattern id="grid" width="'+v+'" height="'+v+'" patternUnits="userSpaceOnUse"><path d="'+