Graph.prototype.createLayersDialog=function(b,e){var k=document.createElement("div");k.style.position="absolute";for(var l=this.getModel(),B=l.getChildCount(l.root),q=0;q<B;q++)mxUtils.bind(this,function(D){function N(){l.isVisible(D)?(K.setAttribute("src",Editor.visibleImage),mxUtils.setOpacity(F,75)):(K.setAttribute("src",Editor.hiddenImage),mxUtils.setOpacity(F,25))}var S=this.convertValueToString(D)||mxResources.get("background")||"Background",F=document.createElement("div");F.style.overflow=