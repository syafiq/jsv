null==$a||cb||(eb=Math.min(eb,$a.width-Graph.minTableColumnWidth))};Ea.execute=function(db){if(0!=eb)W.setTableColumnWidth(this.state.cell,eb,cb);else if(!P.blockDelayedSelection){var rb=W.getCellAt(db.getGraphX(),db.getGraphY())||ma.cell;W.graphHandler.selectCellForEvent(rb,db)}eb=0};Ea.positionChanged=function(){};Ea.reset=function(){eb=0};y.push(Ea)})(Y)}}return null!=y?y.reverse():null};var Z=mxVertexHandler.prototype.setHandlesVisible;mxVertexHandler.prototype.setHandlesVisible=function(y){Z.apply(this,