f?A=new mxHierarchicalLayout(m,mxConstants.DIRECTION_WEST):"circle"==f?A=new mxCircleLayout(m):(A=new mxFastOrganicLayout(m,!1),A.forceConstant=80);if(null!=A){var J=function(n,u){m.getModel().beginUpdate();try{null!=n&&n(),A.execute(m.getDefaultParent(),z)}catch(v){throw v;}finally{n=new mxMorphing(m),n.addListener(mxEvent.DONE,mxUtils.bind(this,function(){m.getModel().endUpdate();null!=u&&u()})),n.startAnimation()}},e=mxEdgeHandler.prototype.connect;mxEdgeHandler.prototype.connect=function(n,u,
v,E,C){e.apply(this,arguments);J()};m.resizeCell=function(){mxGraph.prototype.resizeCell.apply(this,arguments);J()};m.connectionHandler.addListener(mxEvent.CONNECT,function(){J()})}var g=mxUtils.button(mxResources.get("close"),function(){b.confirm(mxResources.get("areYouSure"),function(){null!=l.parentNode&&(m.destroy(),l.parentNode.removeChild(l));b.hideDialog()})});g.className="geBtn";b.editor.cancelFirst&&c.appendChild(g);var k=mxUtils.button(mxResources.get("insert"),function(n){m.clearCellOverlays();