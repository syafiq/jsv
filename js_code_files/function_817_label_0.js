0,0,80,30,"ellipse");I(J)}finally{v.getModel().endUpdate()}if("horizontalTree"==k){var D=new mxCompactTreeLayout(v);D.edgeRouting=!1;D.levelDistance=30;A="edgeStyle=elbowEdgeStyle;elbow=horizontal;"}else"verticalTree"==k?(D=new mxCompactTreeLayout(v,!1),D.edgeRouting=!1,D.levelDistance=30,A="edgeStyle=elbowEdgeStyle;elbow=vertical;"):"radialTree"==k?(D=new mxRadialTreeLayout(v,!1),D.edgeRouting=!1,D.levelDistance=80):"verticalFlow"==k?D=new mxHierarchicalLayout(v,mxConstants.DIRECTION_NORTH):"horizontalFlow"==
k?D=new mxHierarchicalLayout(v,mxConstants.DIRECTION_WEST):"circle"==k?D=new mxCircleLayout(v):(D=new mxFastOrganicLayout(v,!1),D.forceConstant=80);if(null!=D){var N=function(n,q){v.getModel().beginUpdate();try{null!=n&&n(),D.execute(v.getDefaultParent(),J)}catch(p){throw p;}finally{n=new mxMorphing(v),n.addListener(mxEvent.DONE,mxUtils.bind(this,function(){v.getModel().endUpdate();null!=q&&q()})),n.startAnimation()}},c=mxEdgeHandler.prototype.connect;mxEdgeHandler.prototype.connect=function(n,q,
p,y,B){c.apply(this,arguments);N()};v.resizeCell=function(){mxGraph.prototype.resizeCell.apply(this,arguments);N()};v.connectionHandler.addListener(mxEvent.CONNECT,function(){N()})}var e=mxUtils.button(mxResources.get("close"),function(){b.confirm(mxResources.get("areYouSure"),function(){null!=u.parentNode&&(v.destroy(),u.parentNode.removeChild(u));b.hideDialog()})});e.className="geBtn";b.editor.cancelFirst&&d.appendChild(e);var g=mxUtils.button(mxResources.get("insert"),function(n){v.clearCellOverlays();