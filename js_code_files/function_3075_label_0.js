return{x:g,y:f,tx:d.x,ty:d.y}};EditorUi.prototype.restoreScrollState=function(d){var f=this.editor.graph.view.scale,g=this.editor.graph.view.translate,u=mxUtils.getOffset(this.diagramContainer);this.diagramContainer.scrollLeft=d.x+u.x+(g.x-d.tx)*f;this.diagramContainer.scrollTop=d.y+u.y+(g.y-d.ty)*f};EditorUi.prototype.setInlineFullscreen=function(d){if(Editor.inlineFullscreen!=d){var f=this.saveScrollState();Editor.inlineFullscreen=d;this.fireEvent(new mxEventObject("inlineFullscreenChanged"));this.fitWindows();