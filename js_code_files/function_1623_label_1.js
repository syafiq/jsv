mxCellRenderer.prototype.destroy=function(q){ea.apply(this,arguments);null!=q.secondLabel&&(q.secondLabel.destroy(),q.secondLabel=null)};mxCellRenderer.prototype.getShapesForState=function(q){return[q.shape,q.text,q.secondLabel,q.control]};var ja=mxGraphView.prototype.resetValidationState;mxGraphView.prototype.resetValidationState=function(){ja.apply(this,arguments);this.enumerationState=0};var ia=mxGraphView.prototype.stateValidated;mxGraphView.prototype.stateValidated=function(q){null!=q.shape&&
this.redrawEnumerationState(q);return ia.apply(this,arguments)};mxGraphView.prototype.createEnumerationValue=function(q){q=decodeURIComponent(mxUtils.getValue(q.style,"enumerateValue",""));""==q&&(q=++this.enumerationState);return'<div style="padding:2px;border:1px solid gray;background:yellow;border-radius:2px;">'+mxUtils.htmlEntities(q)+"</div>"};mxGraphView.prototype.redrawEnumerationState=function(q){var E="1"==mxUtils.getValue(q.style,"enumerate",0);E&&null==q.secondLabel?(q.secondLabel=new mxText("",