(this.menus.tagsWindow.destroy(),this.menus.tagsWindow=null),null!=this.menus.findWindow&&(this.menus.findWindow.destroy(),this.menus.findWindow=null),null!=this.menus.findReplaceWindow&&(this.menus.findReplaceWindow.destroy(),this.menus.findReplaceWindow=null),null!=this.menus.commentsWindow&&(this.menus.commentsWindow.destroy(),this.menus.commentsWindow=null))};EditorUi.prototype.switchThemeConstants=function(d){var g=this.editor.graph;g.defaultEdgeLength=Graph.prototype.defaultEdgeLength;g.defaultGridEnabled=
Graph.prototype.defaultGridEnabled;g.defaultPageVisible=Graph.prototype.defaultPageVisible;null!=this.menus&&(this.menus.autoPopup="simple"!=d&&"sketch"!=d);"simple"==d||"sketch"==d?(mxWindow.prototype.closeImage=Graph.createSvgImage(18,10,'<path d="M 5 1 L 13 9 M 13 1 L 5 9" stroke="#C0C0C0" stroke-width="2"/>').src,mxWindow.prototype.minimizeImage=Graph.createSvgImage(14,10,'<path d="M 3 7 L 7 3 L 11 7" stroke="#C0C0C0" stroke-width="2" fill="none"/>').src,mxWindow.prototype.normalizeImage=Graph.createSvgImage(14,
10,'<path d="M 3 3 L 7 7 L 11 3" stroke="#C0C0C0" stroke-width="2" fill="none"/>').src,Editor.fitWindowBorders=new mxRectangle(60,30,30,30),g.defaultEdgeLength=120,null==urlParams.grid&&(g.defaultGridEnabled=!1),null==urlParams.pv&&(g.defaultPageVisible=!1)):(mxWindow.prototype.closeImage=mxClient.imageBasePath+"/close.gif",mxWindow.prototype.minimizeImage=mxClient.imageBasePath+"/minimize.gif",mxWindow.prototype.normalizeImage=mxClient.imageBasePath+"/normalize.gif",Editor.fitWindowBorders=null)};