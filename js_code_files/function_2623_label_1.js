d.nodeName)g=d;else if("mxfile"==d.nodeName){var v=d.getElementsByTagName("diagram");if(0<v.length){g=v[0];var x=f.getGlobalVariable;f.getGlobalVariable=function(A){return"page"==A?g.getAttribute("name")||mxResources.get("pageWithNumber",[1]):"pagenumber"==A?1:x.apply(this,arguments)}}}null!=g&&(d=Editor.parseDiagramNode(g))}v=this.editor.graph;try{this.editor.graph=f,this.editor.setGraphXml(d)}catch(A){}finally{this.editor.graph=v}return d};EditorUi.prototype.getPngFileProperties=function(d){var f=
1,g=0;if(null!=d){if(d.hasAttribute("scale")){var v=parseFloat(d.getAttribute("scale"));!isNaN(v)&&0<v&&(f=v)}d.hasAttribute("border")&&(v=parseInt(d.getAttribute("border")),!isNaN(v)&&0<v&&(g=v))}return{scale:f,border:g}};EditorUi.prototype.getEmbeddedPng=function(d,f,g,v,x){try{var A=this.editor.graph,J=null!=A.themes&&"darkTheme"==A.defaultThemeName,H=null;if(null!=g&&0<g.length)A=this.createTemporaryGraph(J?A.getDefaultStylesheet():A.getStylesheet()),document.body.appendChild(A.container),this.decodeNodeIntoGraph(this.editor.extractGraphModel(mxUtils.parseXml(g).documentElement,