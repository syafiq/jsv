function(d){d=Math.floor((new Date-d)/1E3);var f=Math.floor(d/31536E3);if(1<f)return f+" "+mxResources.get("years");f=Math.floor(d/2592E3);if(1<f)return f+" "+mxResources.get("months");f=Math.floor(d/86400);if(1<f)return f+" "+mxResources.get("days");f=Math.floor(d/3600);if(1<f)return f+" "+mxResources.get("hours");f=Math.floor(d/60);return 1<f?f+" "+mxResources.get("minutes"):1==f?f+" "+mxResources.get("minute"):null};EditorUi.prototype.decodeNodeIntoGraph=function(d,f){if(null!=d){var g=null;if("diagram"==
d.nodeName)g=d;else if("mxfile"==d.nodeName){var u=d.getElementsByTagName("diagram");if(0<u.length){g=u[0];var x=f.getGlobalVariable;f.getGlobalVariable=function(A){return"page"==A?g.getAttribute("name")||mxResources.get("pageWithNumber",[1]):"pagenumber"==A?1:x.apply(this,arguments)}}}null!=g&&(d=Editor.parseDiagramNode(g))}u=this.editor.graph;try{this.editor.graph=f,this.editor.setGraphXml(d)}catch(A){}finally{this.editor.graph=u}return d};EditorUi.prototype.getPngFileProperties=function(d){var f=