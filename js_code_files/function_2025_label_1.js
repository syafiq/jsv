new mxRectangle((mb.x+vb.x)*y,(mb.y+vb.y)*y,mb.width*y,mb.height*y);mxUtils.intersects(Ea,Na)&&cb.image(mb.x+vb.x,mb.y+vb.y,mb.width,mb.height,mb.src,!0)}cb.scale(W);cb.textEnabled=ma;xa=null!=xa?xa:this.createSvgImageExport();var Bb=xa.drawCellState,Xa=xa.getLinkForCellState;xa.getLinkForCellState=function(Za,fb){var hb=Xa.apply(this,arguments);return null==hb||Za.view.graph.isCustomLink(hb)?null:hb};xa.getLinkTargetForCellState=function(Za,fb){return Za.view.graph.getLinkTargetForCell(Za.cell)};