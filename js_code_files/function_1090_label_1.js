this.getAbsoluteUrl(ta[za].getAttribute("href"));null!=Ga&&(ta[za].setAttribute("rel",this.linkRelation),ta[za].setAttribute("href",Ga),null!=N&&mxEvent.addGestureListeners(ta[za],null,null,N))}});this.model.addListener(mxEvent.CHANGE,W);W();var Y=this.container.style.cursor,ha=this.getTolerance(),ma=this,xa={currentState:null,currentLink:null,currentTarget:null,highlight:null!=y&&""!=y&&y!=mxConstants.NONE?new mxCellHighlight(ma,y,4):null,startX:0,startY:0,scrollLeft:0,scrollTop:0,updateCurrentState:function(ta){var za=
ta.sourceState;if(null==za||null==ma.getLinkForCell(za.cell))ta=ma.getCellAt(ta.getGraphX(),ta.getGraphY(),null,null,null,function(Ga,Oa,Na){return null==ma.getLinkForCell(Ga.cell)}),za=null==za||ma.model.isAncestor(ta,za.cell)?ma.view.getState(ta):null;za!=this.currentState&&(null!=this.currentState&&this.clear(),this.currentState=za,null!=this.currentState&&this.activate(this.currentState))},mouseDown:function(ta,za){this.startX=za.getGraphX();this.startY=za.getGraphY();this.scrollLeft=ma.container.scrollLeft;