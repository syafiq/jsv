Math.round(y.y+y.height+Editor.hintOffset)+"px"}};var cb=mxEdgeHandler.prototype.reset;mxEdgeHandler.prototype.reset=function(){cb.apply(this,arguments);null!=this.linkHint&&(this.linkHint.style.visibility="")};var Na=mxEdgeHandler.prototype.destroy;mxEdgeHandler.prototype.destroy=function(){Na.apply(this,arguments);null!=this.linkHint&&(this.linkHint.parentNode.removeChild(this.linkHint),this.linkHint=null);null!=this.changeHandler&&(this.graph.getModel().removeListener(this.changeHandler),this.graph.getSelectionModel().removeListener(this.changeHandler),
this.changeHandler=null)}}();(function(){function b(c,m,v){mxShape.call(this);this.line=c;this.stroke=m;this.strokewidth=null!=v?v:1;this.updateBoundsFromLine()}function e(){mxSwimlane.call(this)}function k(){mxSwimlane.call(this)}function l(){mxCylinder.call(this)}function B(){mxCylinder.call(this)}function q(){mxActor.call(this)}function D(){mxCylinder.call(this)}function N(){mxCylinder.call(this)}function S(){mxCylinder.call(this)}function F(){mxCylinder.call(this)}function K(){mxShape.call(this)}function R(){mxShape.call(this)}