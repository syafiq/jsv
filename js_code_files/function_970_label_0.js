mxGraphHandler.prototype.getGuideStates=function(){for(var t=Ba.apply(this,arguments),z=[],A=0;A<t.length;A++)"1"!=mxUtils.getValue(t[A].style,"part","0")&&z.push(t[A]);return z};var qa=mxVertexHandler.prototype.getSelectionBounds;mxVertexHandler.prototype.getSelectionBounds=function(t){var z=this.graph.getModel(),A=z.getParent(t.cell),D=this.graph.getCellGeometry(t.cell);return z.isEdge(A)&&null!=D&&D.relative&&2>t.width&&2>t.height&&null!=t.text&&null!=t.text.boundingBox?(z=t.text.unrotatedBoundingBox||
t.text.boundingBox,new mxRectangle(Math.round(z.x),Math.round(z.y),Math.round(z.width),Math.round(z.height))):qa.apply(this,arguments)};var Ea=mxVertexHandler.prototype.mouseDown;mxVertexHandler.prototype.mouseDown=function(t,z){var A=this.graph.getModel(),D=A.getParent(this.state.cell),G=this.graph.getCellGeometry(this.state.cell);(this.getHandleForEvent(z)==mxEvent.ROTATION_HANDLE||!A.isEdge(D)||null==G||!G.relative||null==this.state||2<=this.state.width||2<=this.state.height)&&Ea.apply(this,arguments)};