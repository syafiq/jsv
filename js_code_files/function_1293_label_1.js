ea=this.getEmbeddedSvg(ea,f,v,null,H,O,ja);return ea};EditorUi.prototype.getXmlFileData=function(d,f,g,v){d=null!=d?d:!0;f=null!=f?f:!1;g=null!=g?g:!Editor.compressXml;var x=this.editor.getGraphXml(d,v);if(d&&null!=this.fileNode&&null!=this.currentPage)if(d=function(O){var F=O.getElementsByTagName("mxGraphModel");F=0<F.length?F[0]:null;null==F&&g?(F=mxUtils.trim(mxUtils.getTextContent(O)),O=O.cloneNode(!1),0<F.length&&(F=Graph.decompress(F),null!=F&&0<F.length&&O.appendChild(mxUtils.parseXml(F).documentElement))):
null==F||g?O=O.cloneNode(!0):(O=O.cloneNode(!1),mxUtils.setTextContent(O,Graph.compressNode(F)));x.appendChild(O)},EditorUi.removeChildNodes(this.currentPage.node),mxUtils.setTextContent(this.currentPage.node,Graph.compressNode(x)),x=this.fileNode.cloneNode(!1),f)d(this.currentPage.node);else for(f=0;f<this.pages.length;f++){var A=this.pages[f],J=A.node;if(A!=this.currentPage)if(A.needsUpdate){var H=new mxCodec(mxUtils.createXmlDocument());H=H.encode(new mxGraphModel(A.root));this.editor.graph.saveViewState(A.viewState,