Math.floor((new Date-e)/1E3);var g=Math.floor(e/31536E3);if(1<g)return g+" "+mxResources.get("years");g=Math.floor(e/2592E3);if(1<g)return g+" "+mxResources.get("months");g=Math.floor(e/86400);if(1<g)return g+" "+mxResources.get("days");g=Math.floor(e/3600);if(1<g)return g+" "+mxResources.get("hours");g=Math.floor(e/60);return 1<g?g+" "+mxResources.get("minutes"):1==g?g+" "+mxResources.get("minute"):null};EditorUi.prototype.decodeNodeIntoGraph=function(e,g){if(null!=e){var k=null;if("diagram"==e.nodeName)k=
e;else if("mxfile"==e.nodeName){var n=e.getElementsByTagName("diagram");if(0<n.length){k=n[0];var u=g.getGlobalVariable;g.getGlobalVariable=function(v){return"page"==v?k.getAttribute("name")||mxResources.get("pageWithNumber",[1]):"pagenumber"==v?1:u.apply(this,arguments)}}}null!=k&&(e=Editor.parseDiagramNode(k))}n=this.editor.graph;try{this.editor.graph=g,this.editor.setGraphXml(e)}catch(v){}finally{this.editor.graph=n}return e};EditorUi.prototype.getPngFileProperties=function(e){var g=1,k=0;if(null!=