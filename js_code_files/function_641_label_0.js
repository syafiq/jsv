mxGraph.prototype.getCellsForUngroup;Graph.prototype.getCellsForUngroup=function(h){h=e.apply(this,arguments);for(var n=[],u=0;u<h.length;u++)this.isTable(h[u])||this.isTableRow(h[u])||this.isTableCell(h[u])||n.push(h[u]);return n};Graph.prototype.updateCssTransform=function(){var h=this.view.getDrawPane();if(null!=h)if(h=h.parentNode,this.useCssTransforms){var n=h.getAttribute("transform");h.setAttribute("transformOrigin","0 0");var u=Math.round(100*this.currentScale)/100;h.setAttribute("transform",
"scale("+u+","+u+")translate("+Math.round(100*this.currentTranslate.x)/100+","+Math.round(100*this.currentTranslate.y)/100+")");n!=h.getAttribute("transform")&&this.fireEvent(new mxEventObject("cssTransformChanged"),"transform",h.getAttribute("transform"))}else h.removeAttribute("transformOrigin"),h.removeAttribute("transform")};var g=mxGraphView.prototype.validateBackgroundPage;mxGraphView.prototype.validateBackgroundPage=function(){var h=this.graph.useCssTransforms,n=this.scale,u=this.translate;