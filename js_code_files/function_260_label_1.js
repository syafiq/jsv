arguments);this.refreshBackgroundImage()};Graph.prototype.refreshBackgroundImage=function(){null!=this.backgroundImage&&null!=this.backgroundImage.originalSrc&&(this.setBackgroundImage(this.backgroundImage),this.view.validateBackgroundImage())};var N=Graph.prototype.loadStylesheet;Graph.prototype.loadStylesheet=function(){N.apply(this,arguments);this.currentStyle="default-style2"};Graph.prototype.handleCustomLink=function(q){"data:action/json,"==q.substring(0,17)&&(q=JSON.parse(q.substring(17)),null!=
q.actions&&this.executeCustomActions(q.actions))};Graph.prototype.executeCustomActions=function(q,D){if(this.executingCustomActions)this.stoppingCustomActions=!0,null!=this.pendingWaitThread&&window.clearTimeout(this.pendingWaitThread),null!=this.pendingExecuteNextAction&&this.pendingExecuteNextAction(),this.fireEvent(new mxEventObject("stopExecutingCustomActions"));else{this.executingCustomActions=!0;var L=!1,U=0,O=0,S=mxUtils.bind(this,function(){L||(L=!0,this.model.beginUpdate())}),R=mxUtils.bind(this,