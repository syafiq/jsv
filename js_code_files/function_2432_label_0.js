function(){null!=this.hint&&(this.hint.parentNode.removeChild(this.hint),this.hint=null)};var G=mxStackLayout.prototype.resizeCell;mxStackLayout.prototype.resizeCell=function(y,L){G.apply(this,arguments);var O=this.graph.getCellStyle(y);if(null==O.childLayout){var U=this.graph.model.getParent(y),aa=null!=U?this.graph.getCellGeometry(U):null;if(null!=aa&&(O=this.graph.getCellStyle(U),"stackLayout"==O.childLayout)){var ea=parseFloat(mxUtils.getValue(O,"stackBorder",mxStackLayout.prototype.border));
O="1"==mxUtils.getValue(O,"horizontalStack","1");var na=this.graph.getActualStartSize(U);aa=aa.clone();O?aa.height=L.height+na.y+na.height+2*ea:aa.width=L.width+na.x+na.width+2*ea;this.graph.model.setGeometry(U,aa)}}};var ia=mxSelectionCellsHandler.prototype.getHandledSelectionCells;mxSelectionCellsHandler.prototype.getHandledSelectionCells=function(){function y(va){O.get(va)||(O.put(va,!0),aa.push(va))}for(var L=ia.apply(this,arguments),O=new mxDictionary,U=this.graph.model,aa=[],ea=0;ea<L.length;ea++){var na=