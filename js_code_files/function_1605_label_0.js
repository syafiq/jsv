0;e<this.pages.length;e++)this.updatePageRoot(this.pages[e]),this.addBasenamesForCell(this.pages[e].root,c);else this.addBasenamesForCell(this.editor.graph.model.getRoot(),c);e=[];for(var g in c)e.push(g);return e};EditorUi.prototype.addBasenamesForCell=function(c,e){function g(y){if(null!=y){var B=y.lastIndexOf(".");0<B&&(y=y.substring(B+1,y.length));null==e[y]&&(e[y]=!0)}}var n=this.editor.graph,q=n.getCellStyle(c);g(mxStencilRegistry.getBasenameForStencil(q[mxConstants.STYLE_SHAPE]));n.model.isEdge(c)&&
(g(mxMarker.getPackageForType(q[mxConstants.STYLE_STARTARROW])),g(mxMarker.getPackageForType(q[mxConstants.STYLE_ENDARROW])));q=n.model.getChildCount(c);for(var p=0;p<q;p++)this.addBasenamesForCell(n.model.getChildAt(c,p),e)};EditorUi.prototype.setGraphEnabled=function(c){this.diagramContainer.style.visibility=c?"":"hidden";this.formatContainer.style.visibility=c?"":"hidden";this.sidebarContainer.style.display=c?"":"none";this.hsplit.style.display=c&&"simple"!=Editor.currentTheme&&"sketch"!=Editor.currentTheme&&