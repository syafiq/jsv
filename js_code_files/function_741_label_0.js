this.state.y+this.state.height+(40>this.state.height?10:0)+2+"px")};var oa=mxVertexHandler.prototype.setHandlesVisible;mxVertexHandler.prototype.setHandlesVisible=function(J){oa.apply(this,arguments);null!=this.moveHandle&&(this.moveHandle.style.display=J?"":"none")};var sa=mxVertexHandler.prototype.destroy;mxVertexHandler.prototype.destroy=function(J,V){sa.apply(this,arguments);null!=this.moveHandle&&(this.moveHandle.parentNode.removeChild(this.moveHandle),this.moveHandle=null)}};if("undefined"!==