f.viewState.scale=1;f.viewState.scrollLeft=null;f.viewState.scrollTop=null;f.viewState.currentRoot=null;f.viewState.defaultParent=null;f.setName(d);f=this.insertPage(f,mxUtils.indexOf(this.pages,b)+1)}}catch(B){this.handleError(B)}return f};EditorUi.prototype.initDiagramNode=function(b){var d=(new mxCodec(mxUtils.createXmlDocument())).encode(new mxGraphModel(b.root));this.editor.graph.saveViewState(b.viewState,d);mxUtils.setTextContent(b.node,Graph.compressNode(d))};