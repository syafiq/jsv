Graph.prototype.createGroupCell=function(){var y=mxGraph.prototype.createGroupCell.apply(this,arguments);y.setStyle("group");return y};Graph.prototype.isExtendParentsOnAdd=function(y){var N=mxGraph.prototype.isExtendParentsOnAdd.apply(this,arguments);if(N&&null!=y&&null!=this.layoutManager){var P=this.model.getParent(y);null!=P&&(P=this.layoutManager.getLayout(P),null!=P&&P.constructor==mxStackLayout&&(N=!1))}return N};Graph.prototype.getPreferredSizeForCell=function(y){var N=mxGraph.prototype.getPreferredSizeForCell.apply(this,