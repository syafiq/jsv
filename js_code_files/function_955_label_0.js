0;g<this.pages.length;g++)this.updatePageRoot(this.pages[g]),this.addBasenamesForCell(this.pages[g].root,d);else this.addBasenamesForCell(this.editor.graph.model.getRoot(),d);g=[];for(var k in d)g.push(k);return g};EditorUi.prototype.addBasenamesForCell=function(d,g){function k(D){if(null!=D){var F=D.lastIndexOf(".");0<F&&(D=D.substring(F+1,D.length));null==g[D]&&(g[D]=!0)}}var n=this.editor.graph,x=n.getCellStyle(d);k(mxStencilRegistry.getBasenameForStencil(x[mxConstants.STYLE_SHAPE]));n.model.isEdge(d)&&