Graph.createSvgNode=function(b,e,k,l,B){var q=mxUtils.createXmlDocument(),D=null!=q.createElementNS?q.createElementNS(mxConstants.NS_SVG,"svg"):q.createElement("svg");null!=B&&(null!=D.style?D.style.backgroundColor=B:D.setAttribute("style","background-color:"+B));null==q.createElementNS?(D.setAttribute("xmlns",mxConstants.NS_SVG),D.setAttribute("xmlns:xlink",mxConstants.NS_XLINK)):D.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink",mxConstants.NS_XLINK);D.setAttribute("version","1.1");
D.setAttribute("width",k+"px");D.setAttribute("height",l+"px");D.setAttribute("viewBox",b+" "+e+" "+k+" "+l);q.appendChild(D);return D};Graph.htmlToPng=function(b,e,k,l){var B=document.createElement("canvas");B.width=e;B.height=k;var q=document.createElement("img");q.onload=mxUtils.bind(this,function(){B.getContext("2d").drawImage(q,0,0);l(B.toDataURL())});q.src="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>em{color:red;}</style><em>I</em> lick <span>cheese</span></div></foreignObject></svg>')};