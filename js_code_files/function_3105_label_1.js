function(){return this.getTagsForCells(this.model.getDescendants(this.model.getRoot()))};Graph.prototype.getCommonTagsForCells=function(q){for(var D=null,L=[],U=0;U<q.length;U++){var O=this.getTagsForCell(q[U]);L=[];if(0<O.length){O=O.split(" ");for(var S={},R=0;R<O.length;R++)if(null==D||null!=D[O[R]])S[O[R]]=!0,L.push(O[R]);D=S}else return[]}return L};Graph.prototype.getTagsForCells=function(q){for(var D=[],L={},U=0;U<q.length;U++){var O=this.getTagsForCell(q[U]);if(0<O.length){O=O.split(" ");for(var S=
0;S<O.length;S++)null==L[O[S]]&&(L[O[S]]=!0,D.push(O[S]))}}return D};Graph.prototype.getTagsForCell=function(q){return this.getAttributeForCell(q,"tags","")};Graph.prototype.addTagsForCells=function(q,D){if(0<q.length&&0<D.length){this.model.beginUpdate();try{for(var L=0;L<q.length;L++){for(var U=this.getTagsForCell(q[L]),O=U.split(" "),S=!1,R=0;R<D.length;R++){var X=mxUtils.trim(D[R]);""!=X&&0>mxUtils.indexOf(O,X)&&(U=0<U.length?U+" "+X:X,S=!0)}S&&this.setAttributeForCell(q[L],"tags",U)}}finally{this.model.endUpdate()}}};