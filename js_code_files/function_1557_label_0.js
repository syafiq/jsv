1].nextSibling)}c=null!=c?c:e.firstChild.nextSibling.nextSibling;g=e.lastChild;var n=g.previousSibling;e.insertBefore(g,c);e.insertBefore(n,g)};EditorUi.prototype.loadLibrary=function(c,e){var g=mxUtils.parseXml(c.getData());if("mxlibrary"==g.documentElement.nodeName){var n=JSON.parse(mxUtils.getTextContent(g.documentElement));this.libraryLoaded(c,n,g.documentElement.getAttribute("title"),e)}else throw{message:mxResources.get("notALibraryFile")};};EditorUi.prototype.getLibraryStorageHint=function(c){return""};