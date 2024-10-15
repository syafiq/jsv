Graph.prototype.getInsertPoint=function(){var t=this.getGridSize(),z=this.container.scrollLeft/this.view.scale-this.view.translate.x,A=this.container.scrollTop/this.view.scale-this.view.translate.y;if(this.pageVisible){var D=this.getPageLayout(),G=this.getPageSize();z=Math.max(z,D.x*G.width);A=Math.max(A,D.y*G.height)}return new mxPoint(this.snap(z+t),this.snap(A+t))};Graph.prototype.getFreeInsertPoint=function(){var t=this.view,z=this.getGraphBounds(),A=this.getInsertPoint(),D=this.snap(Math.round(Math.max(A.x,
z.x/t.scale-t.translate.x+(0==z.width?2*this.gridSize:0))));t=this.snap(Math.round(Math.max(A.y,(z.y+z.height)/t.scale-t.translate.y+2*this.gridSize)));return new mxPoint(D,t)};Graph.prototype.getCenterInsertPoint=function(t){t=null!=t?t:new mxRectangle;return mxUtils.hasScrollbars(this.container)?new mxPoint(this.snap(Math.round((this.container.scrollLeft+this.container.clientWidth/2)/this.view.scale-this.view.translate.x-t.width/2)),this.snap(Math.round((this.container.scrollTop+this.container.clientHeight/