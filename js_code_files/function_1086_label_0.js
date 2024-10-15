Graph.prototype.isCellVisible=function(p){return M.apply(this,arguments)&&!this.isAllTagsHidden(this.getTagsForCell(p))};Graph.prototype.setHiddenTags=function(p){this.hiddenTags=p;this.fireEvent(new mxEventObject("hiddenTagsChanged"))};Graph.prototype.toggleHiddenTag=function(p){var B=mxUtils.indexOf(this.hiddenTags,p);0>B?this.hiddenTags.push(p):0<=B&&this.hiddenTags.splice(B,1);this.fireEvent(new mxEventObject("hiddenTagsChanged"))};Graph.prototype.isAllTagsHidden=function(p){if(null==p||0==p.length||
0==this.hiddenTags.length)return!1;p=p.split(" ");if(p.length>this.hiddenTags.length)return!1;for(var B=0;B<p.length;B++)if(0>mxUtils.indexOf(this.hiddenTags,p[B]))return!1;return!0};Graph.prototype.getCellsForTags=function(p,B,L,Q){var S=[];if(null!=p){B=null!=B?B:this.model.getDescendants(this.model.getRoot());for(var R=0,T={},W=0;W<p.length;W++)0<p[W].length&&(T[p[W]]=!0,R++);for(W=0;W<B.length;W++)if(L&&this.model.getParent(B[W])==this.model.root||this.model.isVertex(B[W])||this.model.isEdge(B[W])){var X=