Math.round(t.y+t.height+Editor.hintOffset)+"px"}};var cb=mxEdgeHandler.prototype.reset;mxEdgeHandler.prototype.reset=function(){cb.apply(this,arguments);null!=this.linkHint&&(this.linkHint.style.visibility="")};var ca=mxEdgeHandler.prototype.destroy;mxEdgeHandler.prototype.destroy=function(){ca.apply(this,arguments);null!=this.linkHint&&(this.linkHint.parentNode.removeChild(this.linkHint),this.linkHint=null);null!=this.changeHandler&&(this.graph.getModel().removeListener(this.changeHandler),this.graph.getSelectionModel().removeListener(this.changeHandler),