Graph.prototype.createLayersDialog=function(a,b){var f=document.createElement("div");f.style.position="absolute";for(var e=this.getModel(),g=e.getChildCount(e.root),d=0;d<g;d++)mxUtils.bind(this,function(h){function n(){e.isVisible(h)?(r.setAttribute("src",Editor.visibleImage),mxUtils.setOpacity(m,75)):(r.setAttribute("src",Editor.hiddenImage),mxUtils.setOpacity(m,25))}var u=this.convertValueToString(h)||mxResources.get("background")||"Background",m=document.createElement("div");m.style.overflow=