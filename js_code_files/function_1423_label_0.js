this.init=function(){function v(H){if(null!=H){var N=H.getAttribute("background");if(null==N||""==N||N==mxConstants.NONE)N=Editor.isDarkMode()?"transparent":"#ffffff";x.style.backgroundColor=N;(new mxCodec(H.ownerDocument)).decode(H,u.getModel());u.maxFitScale=1;u.fit(8);u.center()}return H}function E(H){null!=H&&(H=v(Editor.parseDiagramNode(H)));return H}mxEvent.addListener(q,"change",function(H){I=parseInt(q.value);E(G[I]);mxEvent.consume(H)});if("mxfile"==F.nodeName){var K=F.getElementsByTagName("diagram");