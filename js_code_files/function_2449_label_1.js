0;m<P.length;m++){var z=u.getCellGeometry(P[m]);null!=z&&z.translate(-U.x,-U.y)}x.appendChild(this.sidebar.createVertexTemplateFromCells(P,U.width,U.height,X||"",!0,null,!1));P={xml:Graph.compress(mxUtils.getXml(this.editor.graph.encodeCells(P))),w:U.width,h:U.height};null!=X&&(P.title=X);e.push(P);M(V);null!=q&&null!=q.parentNode&&0<e.length&&(q.parentNode.removeChild(q),q=null)}),L=mxUtils.bind(this,function(P){if(u.isSelectionEmpty())u.getRubberband().isActive()?(u.getRubberband().execute(P),u.getRubberband().reset()):