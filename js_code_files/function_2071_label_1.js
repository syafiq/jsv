null!=A.viewState.backgroundImage.originalSrc&&(H=new mxCodec(mxUtils.createXmlDocument()),H=H.encode(new mxGraphModel(A.root)),this.editor.graph.saveViewState(A.viewState,H,null,v),J=J.cloneNode(!1),mxUtils.setTextContent(J,Graph.compressNode(H))));d(J)}return x};EditorUi.prototype.anonymizeString=function(d,f){for(var g=[],v=0;v<d.length;v++){var x=d.charAt(v);0<=EditorUi.ignoredAnonymizedChars.indexOf(x)?g.push(x):isNaN(parseInt(x))?x.toLowerCase()!=x?g.push(String.fromCharCode(65+Math.round(25*
Math.random()))):x.toUpperCase()!=x?g.push(String.fromCharCode(97+Math.round(25*Math.random()))):/\s/.test(x)?g.push(" "):g.push("?"):g.push(f?"0":Math.round(9*Math.random()))}return g.join("")};EditorUi.prototype.anonymizePatch=function(d){if(null!=d[EditorUi.DIFF_INSERT])for(var f=0;f<d[EditorUi.DIFF_INSERT].length;f++)try{var g=mxUtils.parseXml(d[EditorUi.DIFF_INSERT][f].data).documentElement.cloneNode(!1);null!=g.getAttribute("name")&&g.setAttribute("name",this.anonymizeString(g.getAttribute("name")));