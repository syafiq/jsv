!0,!0);for(A=0;A<Y.length;A++)if(this.graph.isCellMovable(Y[A])){var ha=this.graph.view.getState(Y[A]),ea=this.graph.getCellGeometry(Y[A]);null!=ha&&null!=ea&&(ea=ea.clone(),ea.translate(t,L),this.graph.model.setGeometry(Y[A],ea))}}finally{this.graph.model.endUpdate()}}else Y=new mxRectangle(this.x,this.y,this.width,this.height),this.graph.selectRegion(Y,z.getEvent());z.consume()}}};mxRubberband.prototype.mouseMove=function(t,z){if(!z.isConsumed()&&null!=this.first){var A=mxUtils.getScrollOrigin(this.graph.container);
t=mxUtils.getOffset(this.graph.container);A.x-=t.x;A.y-=t.y;t=z.getX()+A.x;A=z.getY()+A.y;var E=this.first.x-t,G=this.first.y-A,L=this.graph.tolerance;if(null!=this.div||Math.abs(E)>L||Math.abs(G)>L)null==this.div&&(this.div=this.createShape()),mxUtils.clearSelection(),this.update(t,A),this.isSpaceEvent(z)?(t=this.x+this.width,A=this.y+this.height,E=this.graph.view.scale,mxEvent.isAltDown(z.getEvent())||(this.width=this.graph.snap(this.width/E)*E,this.height=this.graph.snap(this.height/E)*E,this.graph.isGridEnabled()||
(this.width<this.graph.tolerance&&(this.width=0),this.height<this.graph.tolerance&&(this.height=0)),this.x<this.first.x&&(this.x=t-this.width),this.y<this.first.y&&(this.y=A-this.height)),this.div.style.borderStyle="dashed",this.div.style.backgroundColor="white",this.div.style.left=this.x+"px",this.div.style.top=this.y+"px",this.div.style.width=Math.max(0,this.width)+"px",this.div.style.height=this.graph.container.clientHeight+"px",this.div.style.borderWidth=0>=this.width?"0px 1px 0px 0px":"0px 1px 0px 1px",
null==this.secondDiv&&(this.secondDiv=this.div.cloneNode(!0),this.div.parentNode.appendChild(this.secondDiv)),this.secondDiv.style.left=this.x+"px",this.secondDiv.style.top=this.y+"px",this.secondDiv.style.width=this.graph.container.clientWidth+"px",this.secondDiv.style.height=Math.max(0,this.height)+"px",this.secondDiv.style.borderWidth=0>=this.height?"1px 0px 0px 0px":"1px 0px 1px 0px"):(this.div.style.backgroundColor="",this.div.style.borderWidth="",this.div.style.borderStyle="",null!=this.secondDiv&&
(this.secondDiv.parentNode.removeChild(this.secondDiv),this.secondDiv=null)),z.consume()}};var W=mxRubberband.prototype.reset;mxRubberband.prototype.reset=function(){null!=this.secondDiv&&(this.secondDiv.parentNode.removeChild(this.secondDiv),this.secondDiv=null);W.apply(this,arguments)};var da=(new Date).getTime(),sa=0,ta=mxEdgeHandler.prototype.updatePreviewState;mxEdgeHandler.prototype.updatePreviewState=function(t,z,A,E){ta.apply(this,arguments);A!=this.currentTerminalState?(da=(new Date).getTime(),