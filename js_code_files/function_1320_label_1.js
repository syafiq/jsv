E){var S=mxUtils.trim(mxUtils.getTextContent(q)),ba=null;0<S.length?(q=Graph.decompress(S,null,E),null!=q&&0<q.length&&(ba=mxUtils.parseXml(q).documentElement)):(q=mxUtils.getChildNodes(q),0<q.length&&(ba=mxUtils.createXmlDocument(),ba.appendChild(ba.importNode(q[0],!0)),ba=ba.documentElement));return ba};Editor.getDiagramNodeXml=function(q){var E=mxUtils.getTextContent(q),S=null;0<E.length?S=Graph.decompress(E):null!=q.firstChild&&(S=mxUtils.getXml(q.firstChild));return S};Editor.extractGraphModelFromPdf=