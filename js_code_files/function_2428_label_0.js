Menus.prototype.addPopupMenuCellEditItems=function(a,b,f,e){if(this.isShowCellEditItems()){var g=this.editorUi.editor.graph,d=g.view.getState(b);this.addMenuItems(a,["-","editStyle","editData","editLink"],e,f);g.getModel().isVertex(b)&&null!=mxUtils.getValue(d.style,mxConstants.STYLE_IMAGE,null)&&(a.addSeparator(),this.addMenuItem(a,"image",e,f).firstChild.nextSibling.innerHTML=mxResources.get("editImage")+"...",this.addMenuItem(a,"crop",e,f));(g.getModel().isVertex(b)&&0==g.getModel().getChildCount(b)||
g.isContainer(b))&&this.addMenuItem(a,"editConnectionPoints",e,f)}};Menus.prototype.addPopupMenuSelectionItems=function(a,b,f){this.editorUi.editor.graph.isSelectionEmpty()&&this.addMenuItems(a,["-","selectVertices","selectEdges","selectAll"],null,f)};