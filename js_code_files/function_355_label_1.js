this.hint.innerHTML=b(t,A)+", "+b(z,A);this.hint.style.left=this.pBounds.x+this.currentDx+Math.round((this.pBounds.width-this.hint.clientWidth)/2)+"px";this.hint.style.top=this.pBounds.y+this.currentDy+this.pBounds.height+Editor.hintOffset+"px"}};mxGraphHandler.prototype.removeHint=function(){null!=this.hint&&(this.hint.parentNode.removeChild(this.hint),this.hint=null)};var ba=mxStackLayout.prototype.resizeCell;mxStackLayout.prototype.resizeCell=function(t,z){ba.apply(this,arguments);var A=this.graph.getCellStyle(t);
if(null==A.childLayout){var E=this.graph.model.getParent(t),G=null!=E?this.graph.getCellGeometry(E):null;if(null!=G&&(A=this.graph.getCellStyle(E),"stackLayout"==A.childLayout)){var L=parseFloat(mxUtils.getValue(A,"stackBorder",mxStackLayout.prototype.border));A="1"==mxUtils.getValue(A,"horizontalStack","1");var Y=this.graph.getActualStartSize(E);G=G.clone();A?G.height=z.height+Y.y+Y.height+2*L:G.width=z.width+Y.x+Y.width+2*L;this.graph.model.setGeometry(E,G)}}};var S=mxSelectionCellsHandler.prototype.getHandledSelectionCells;