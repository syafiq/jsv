Editor.addBoxImage;if(null!=u.hoverIcons){var K=u.hoverIcons.update;u.hoverIcons.update=function(){D.freehand.isDrawing()||K.apply(this,arguments)}}if(null!=D.freehand){var M=D.freehand.createStyle;D.freehand.createStyle=function(X){return M.apply(this,arguments)+"sketch=0;"}}u.editor.addListener("statusChanged",mxUtils.bind(this,function(){u.setStatusText(u.editor.getStatus())}));u.setStatusText(u.editor.getStatus());var H=u.menus.get("viewZoom");if(null!=H){var N=function(X){if(mxEvent.isAltDown(X))u.hideCurrentMenu(),
u.actions.get("customZoom").funct(),mxEvent.consume(X);else if("geItem"!=mxEvent.getSource(X).className||mxEvent.isShiftDown(X))u.hideCurrentMenu(),u.actions.get("smartFit").funct(),mxEvent.consume(X)},P=u.actions.get("zoomIn"),O=u.actions.get("zoomOut"),V=u.actions.get("resetView"),p=u.actions.get("undo"),B=u.actions.get("redo"),L=g("",p.funct,null,mxResources.get("undo")+" ("+p.shortcut+")",p,Editor.undoImage),Q=g("",B.funct,null,mxResources.get("redo")+" ("+B.shortcut+")",B,Editor.redoImage),S=