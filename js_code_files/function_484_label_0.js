EditorUi.prototype.getImageForPage=function(b,e,f){f=null!=f?f:this.editor.graph;var c=f.getGlobalVariable,l=this.createTemporaryGraph(f.getStylesheet());l.defaultPageBackgroundColor=f.defaultPageBackgroundColor;l.shapeBackgroundColor=f.shapeBackgroundColor;l.shapeForegroundColor=f.shapeForegroundColor;var m=this.getPageIndex(null!=e?e:this.currentPage);l.getGlobalVariable=function(y){return"pagenumber"==y?m+1:"page"==y&&null!=e?e.getName():c.apply(this,arguments)};document.body.appendChild(l.container);
this.updatePageRoot(b);l.model.setRoot(b.root);b=Graph.foreignObjectWarningText;Graph.foreignObjectWarningText="";f=l.getSvg(null,null,null,null,null,null,null,null,null,null,null,!0);var t=l.getGraphBounds();document.body.removeChild(l.container);Graph.foreignObjectWarningText=b;return new mxImage(Editor.createSvgDataUri(mxUtils.getXml(f)),t.width,t.height,t.x,t.y)};