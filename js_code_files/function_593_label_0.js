18*C.childNodes.length+"px")}),E=mxUtils.bind(this,function(P,T,V,l){P=t.cloneCells(mxUtils.sortCells(t.model.getTopmostCells(P)));for(var x=0;x<P.length;x++){var K=t.getCellGeometry(P[x]);null!=K&&K.translate(-T.x,-T.y)}B.appendChild(this.sidebar.createVertexTemplateFromCells(P,T.width,T.height,l||"",!0,null,!1));P={xml:Graph.compress(mxUtils.getXml(this.editor.graph.encodeCells(P))),w:T.width,h:T.height};null!=l&&(P.title=l);e.push(P);L(V);null!=p&&null!=p.parentNode&&0<e.length&&(p.parentNode.removeChild(p),