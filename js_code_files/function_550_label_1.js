v?(L.moveTo(ia.x+O.y*H,ia.y-O.x*H),L.lineTo(ia.x-O.y*H,ia.y+O.x*H),L.moveTo(ea.x-O.y*H,ea.y+O.x*H),L.lineTo(ea.x+O.y*H,ea.y-O.x*H),L.moveTo(ea.x,ea.y)):"arc"==v?(H*=1.3,L.curveTo(ia.x-O.y*H,ia.y+O.x*H,ea.x-O.y*H,ea.y+O.x*H,ea.x,ea.y)):(L.moveTo(ea.x,ea.y),x=!0),H=[ea],ia=!0))}else O=null;ia||(H.push(ja),A=ja)}this.addPoints(L,H,d,f,!1,null,x);L.stroke()}};var D=mxGraphView.prototype.getFixedTerminalPoint;mxGraphView.prototype.getFixedTerminalPoint=function(L,Q,d,f){return null!=Q&&"centerPerimeter"==
Q.style[mxConstants.STYLE_PERIMETER]?new mxPoint(Q.getCenterX(),Q.getCenterY()):D.apply(this,arguments)};var M=mxGraphView.prototype.updateFloatingTerminalPoint;mxGraphView.prototype.updateFloatingTerminalPoint=function(L,Q,d,f){if(null==Q||null==L||"1"!=Q.style.snapToPoint&&"1"!=L.style.snapToPoint)M.apply(this,arguments);else{Q=this.getTerminalPort(L,Q,f);var g=this.getNextPoint(L,d,f),v=this.graph.isOrthogonal(L),x=mxUtils.toRadians(Number(Q.style[mxConstants.STYLE_ROTATION]||"0")),A=new mxPoint(Q.getCenterX(),