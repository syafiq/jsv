E.getCellAt(Na.getGraphX(),Na.getGraphY())||Y.cell;E.graphHandler.selectCellForEvent(Sa,Na)}Oa=0};Ha.reset=function(){Oa=0};t.push(Ha)})(G);for(G=0;G<za.length;G++)mxUtils.bind(this,function(Ma){var Ha=E.view.getState(za[Ma]),Fa=E.getCellGeometry(za[Ma]),Ga=null!=Fa.alternateBounds?Fa.alternateBounds:Fa;null==Ha&&(Ha=new mxCellState(E.view,za[Ma],E.getCellStyle(za[Ma])),Ha.x=Y.x+Fa.x*L,Ha.y=Y.y+Fa.y*L,Ha.width=Ga.width*L,Ha.height=Ga.height*L,Ha.updateCachedBounds());Fa=Ma<za.length-1?za[Ma+1]:null;