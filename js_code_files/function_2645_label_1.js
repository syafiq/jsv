R.push(M[G]);M=R}return M};var b=mxGraph.prototype.scrollRectToVisible;Graph.prototype.scrollRectToVisible=function(D){if(this.useCssTransforms){var M=this.currentScale,R=this.currentTranslate;D=new mxRectangle((D.x+2*R.x)*M-R.x,(D.y+2*R.y)*M-R.y,D.width*M,D.height*M)}b.apply(this,arguments)};mxCellHighlight.prototype.getStrokeWidth=function(D){D=this.strokeWidth;this.graph.useCssTransforms&&(D/=this.graph.currentScale);return D};mxGraphView.prototype.getGraphBounds=function(){var D=this.graphBounds;