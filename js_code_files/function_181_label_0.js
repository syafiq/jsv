EditorUi.prototype.initCanvas=function(){var b=this.editor.graph;b.timerAutoScroll=!0;b.getPagePadding=function(){return new mxPoint(Math.max(0,Math.round((b.container.offsetWidth-34)/b.view.scale)),Math.max(0,Math.round((b.container.offsetHeight-34)/b.view.scale)))};b.view.getBackgroundPageBounds=function(){var Y=this.graph.getPageLayout(),p=this.graph.getPageSize();return new mxRectangle(this.scale*(this.translate.x+Y.x*p.width),this.scale*(this.translate.y+Y.y*p.height),this.scale*Y.width*p.width,