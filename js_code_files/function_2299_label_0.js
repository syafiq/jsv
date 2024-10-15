mxGraphView.prototype.updateFloatingTerminalPoint=function(r,x,B,C){if(null==x||null==r||"1"!=x.style.snapToPoint&&"1"!=r.style.snapToPoint)n.apply(this,arguments);else{x=this.getTerminalPort(r,x,C);var F=this.getNextPoint(r,B,C),H=this.graph.isOrthogonal(r),E=mxUtils.toRadians(Number(x.style[mxConstants.STYLE_ROTATION]||"0")),N=new mxPoint(x.getCenterX(),x.getCenterY());if(0!=E){var Q=Math.cos(-E),S=Math.sin(-E);F=mxUtils.getRotatedPoint(F,Q,S,N)}Q=parseFloat(r.style[mxConstants.STYLE_PERIMETER_SPACING]||
0);Q+=parseFloat(r.style[C?mxConstants.STYLE_SOURCE_PERIMETER_SPACING:mxConstants.STYLE_TARGET_PERIMETER_SPACING]||0);F=this.getPerimeterPoint(x,F,0==E&&H,Q);0!=E&&(Q=Math.cos(E),S=Math.sin(E),F=mxUtils.getRotatedPoint(F,Q,S,N));r.setAbsoluteTerminalPoint(this.snapToAnchorPoint(r,x,B,C,F),C)}};mxGraphView.prototype.snapToAnchorPoint=function(r,x,B,C,F){if(null!=x&&null!=r){r=this.graph.getAllConnectionConstraints(x);C=B=null;if(null!=r)for(var H=0;H<r.length;H++){var E=this.graph.getConnectionPoint(x,