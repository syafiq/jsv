Graph.prototype.toggleHiddenTag=function(q){var D=mxUtils.indexOf(this.hiddenTags,q);0>D?this.hiddenTags.push(q):0<=D&&this.hiddenTags.splice(D,1);this.fireEvent(new mxEventObject("hiddenTagsChanged"))};Graph.prototype.isAllTagsHidden=function(q){if(null==q||0==q.length||0==this.hiddenTags.length)return!1;q=q.split(" ");if(q.length>this.hiddenTags.length)return!1;for(var D=0;D<q.length;D++)if(0>mxUtils.indexOf(this.hiddenTags,q[D]))return!1;return!0};Graph.prototype.getCellsForTags=function(q,D,L,
U){var O=[];if(null!=q){D=null!=D?D:this.model.getDescendants(this.model.getRoot());for(var S=0,R={},X=0;X<q.length;X++)0<q[X].length&&(R[q[X]]=!0,S++);for(X=0;X<D.length;X++)if(L&&this.model.getParent(D[X])==this.model.root||this.model.isVertex(D[X])||this.model.isEdge(D[X])){var Z=this.getTagsForCell(D[X]),ba=!1;if(0<Z.length&&(Z=Z.split(" "),Z.length>=q.length)){for(var aa=ba=0;aa<Z.length&&ba<S;aa++)null!=R[Z[aa]]&&ba++;ba=ba==S}ba&&(1!=U||this.isCellVisible(D[X]))&&O.push(D[X])}}return O};Graph.prototype.getAllTags=