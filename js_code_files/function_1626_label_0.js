!0,!0);for(A=0;A<W.length;A++)if(this.graph.isCellMovable(W[A])){var ha=this.graph.view.getState(W[A]),ca=this.graph.getCellGeometry(W[A]);null!=ha&&null!=ca&&(ca=ca.clone(),ca.translate(t,K),this.graph.model.setGeometry(W[A],ca))}}finally{this.graph.model.endUpdate()}}else W=new mxRectangle(this.x,this.y,this.width,this.height),this.graph.selectRegion(W,z.getEvent());z.consume()}}};mxRubberband.prototype.mouseMove=function(t,z){if(!z.isConsumed()&&null!=this.first){var A=mxUtils.getScrollOrigin(this.graph.container);
t=mxUtils.getOffset(this.graph.container);A.x-=t.x;A.y-=t.y;t=z.getX()+A.x;A=z.getY()+A.y;var D=this.first.x-t,G=this.first.y-A,K=this.graph.tolerance;if(null!=this.div||Math.abs(D)>K||Math.abs(G)>K)null==this.div&&(this.div=this.createShape()),mxUtils.clearSelection(),this.update(t,A),this.isSpaceEvent(z)?(t=this.x+this.width,A=this.y+this.height,D=this.graph.view.scale,mxEvent.isAltDown(z.getEvent())||(this.width=this.graph.snap(this.width/D)*D,this.height=this.graph.snap(this.height/D)*D,this.graph.isGridEnabled()||
(this.width<this.graph.tolerance&&(this.width=0),this.height<this.graph.tolerance&&(this.height=0)),this.x<this.first.x&&(this.x=t-this.width),this.y<this.first.y&&(this.y=A-this.height)),this.div.style.borderStyle="dashed",this.div.style.backgroundColor="white",this.div.style.left=this.x+"px",this.div.style.top=this.y+"px",this.div.style.width=Math.max(0,this.width)+"px",this.div.style.height=this.graph.container.clientHeight+"px",this.div.style.borderWidth=0>=this.width?"0px 1px 0px 0px":"0px 1px 0px 1px",
null==this.secondDiv&&(this.secondDiv=this.div.cloneNode(!0),this.div.parentNode.appendChild(this.secondDiv)),this.secondDiv.style.left=this.x+"px",this.secondDiv.style.top=this.y+"px",this.secondDiv.style.width=this.graph.container.clientWidth+"px",this.secondDiv.style.height=Math.max(0,this.height)+"px",this.secondDiv.style.borderWidth=0>=this.height?"1px 0px 0px 0px":"1px 0px 1px 0px"):(this.div.style.backgroundColor="",this.div.style.borderWidth="",this.div.style.borderStyle="",null!=this.secondDiv&&
(this.secondDiv.parentNode.removeChild(this.secondDiv),this.secondDiv=null)),z.consume()}};var X=mxRubberband.prototype.reset;mxRubberband.prototype.reset=function(){null!=this.secondDiv&&(this.secondDiv.parentNode.removeChild(this.secondDiv),this.secondDiv=null);X.apply(this,arguments)};var ea=(new Date).getTime(),sa=0,ua=mxEdgeHandler.prototype.updatePreviewState;mxEdgeHandler.prototype.updatePreviewState=function(t,z,A,D){ua.apply(this,arguments);A!=this.currentTerminalState?(ea=(new Date).getTime(),