"</div>"};mxGraphView.prototype.redrawEnumerationState=function(p){var B="1"==mxUtils.getValue(p.style,"enumerate",0);B&&null==p.secondLabel?(p.secondLabel=new mxText("",new mxRectangle,mxConstants.ALIGN_LEFT,mxConstants.ALIGN_BOTTOM),p.secondLabel.size=12,p.secondLabel.state=p,p.secondLabel.dialect=mxConstants.DIALECT_STRICTHTML,this.graph.cellRenderer.initializeLabel(p,p.secondLabel)):B||null==p.secondLabel||(p.secondLabel.destroy(),p.secondLabel=null);B=p.secondLabel;if(null!=B){var L=p.view.scale,
Q=this.createEnumerationValue(p);p=this.graph.model.isVertex(p.cell)?new mxRectangle(p.x+p.width-4*L,p.y+4*L,0,0):mxRectangle.fromPoint(p.view.getPoint(p));B.bounds.equals(p)&&B.value==Q&&B.scale==L||(B.bounds=p,B.value=Q,B.scale=L,B.redraw())}};var v=mxGraphView.prototype.validateBackgroundPage;mxGraphView.prototype.validateBackgroundPage=function(){v.apply(this,arguments);if(mxClient.IS_GC&&null!=this.getDrawPane()){var p=this.getDrawPane().parentNode;!this.graph.mathEnabled||mxClient.NO_FO||null!=