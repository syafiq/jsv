u?(K.moveTo(ha.x+M.y*P,ha.y-M.x*P),K.lineTo(ha.x-M.y*P,ha.y+M.x*P),K.moveTo(ia.x-M.y*P,ia.y+M.x*P),K.lineTo(ia.x+M.y*P,ia.y-M.x*P),K.moveTo(ia.x,ia.y)):"arc"==u?(P*=1.3,K.curveTo(ha.x-M.y*P,ha.y+M.x*P,ia.x-M.y*P,ia.y+M.x*P,ia.x,ia.y)):(K.moveTo(ia.x,ia.y),x=!0),P=[ia],ha=!0))}else M=null;ha||(P.push(ja),A=ja)}this.addPoints(K,P,d,f,!1,null,x);K.stroke()}};var D=mxGraphView.prototype.getFixedTerminalPoint;mxGraphView.prototype.getFixedTerminalPoint=function(K,R,d,f){return null!=R&&"centerPerimeter"==
R.style[mxConstants.STYLE_PERIMETER]?new mxPoint(R.getCenterX(),R.getCenterY()):D.apply(this,arguments)};var N=mxGraphView.prototype.updateFloatingTerminalPoint;mxGraphView.prototype.updateFloatingTerminalPoint=function(K,R,d,f){if(null==R||null==K||"1"!=R.style.snapToPoint&&"1"!=K.style.snapToPoint)N.apply(this,arguments);else{R=this.getTerminalPort(K,R,f);var g=this.getNextPoint(K,d,f),u=this.graph.isOrthogonal(K),x=mxUtils.toRadians(Number(R.style[mxConstants.STYLE_ROTATION]||"0")),A=new mxPoint(R.getCenterX(),