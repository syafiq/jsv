this.updateGraphXml(Editor.parseDiagramNode(this.diagrams[this.currentPage])))};this.selectPageById=function(u){u=this.getIndexById(u);var x=0<=u;x&&this.selectPage(u);return x};F=mxUtils.bind(this,function(){if(null==this.xmlNode||"mxfile"!=this.xmlNode.nodeName)this.diagrams=[];this.xmlNode!=R&&(this.diagrams=this.xmlNode.getElementsByTagName("diagram"),R=this.xmlNode)});var d=this.graph.setBackgroundImage;this.graph.setBackgroundImage=function(u){if(null!=u&&Graph.isPageLink(u.src)){var x=u.src,