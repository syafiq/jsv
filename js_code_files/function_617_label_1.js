Graph.prototype.getInsertPoint=function(){var y=this.getGridSize(),N=this.container.scrollLeft/this.view.scale-this.view.translate.x,P=this.container.scrollTop/this.view.scale-this.view.translate.y;if(this.pageVisible){var W=this.getPageLayout(),Y=this.getPageSize();N=Math.max(N,W.x*Y.width);P=Math.max(P,W.y*Y.height)}return new mxPoint(this.snap(N+y),this.snap(P+y))};Graph.prototype.getFreeInsertPoint=function(){var y=this.view,N=this.getGraphBounds(),P=this.getInsertPoint(),W=this.snap(Math.round(Math.max(P.x,
N.x/y.scale-y.translate.x+(0==N.width?2*this.gridSize:0))));y=this.snap(Math.round(Math.max(P.y,(N.y+N.height)/y.scale-y.translate.y+2*this.gridSize)));return new mxPoint(W,y)};Graph.prototype.getCenterInsertPoint=function(y){y=null!=y?y:new mxRectangle;return mxUtils.hasScrollbars(this.container)?new mxPoint(this.snap(Math.round((this.container.scrollLeft+this.container.clientWidth/2)/this.view.scale-this.view.translate.x-y.width/2)),this.snap(Math.round((this.container.scrollTop+this.container.clientHeight/