x/O.view.scale),ia=Math.floor(ea.height*x/O.view.scale);if(F.length<=MAX_REQUEST_SIZE&&ja*ia<MAX_AREA)if(d.hideDialog(),"png"!=g&&"jpg"!=g&&"jpeg"!=g||!d.isExportToCanvas()){var aa={globalVars:O.getExportVariables()};H&&(aa.grid={size:O.gridSize,steps:O.view.gridSteps,color:O.view.gridColor});d.saveRequest(f,g,function(qa,sa){return new mxXmlRequest(EXPORT_URL,"format="+g+"&base64="+(sa||"0")+(null!=qa?"&filename="+encodeURIComponent(qa):"")+"&extras="+encodeURIComponent(JSON.stringify(aa))+(0<J?
"&dpi="+J:"")+"&bg="+(null!=v?v:"none")+"&w="+ja+"&h="+ia+"&border="+A+"&xml="+encodeURIComponent(F))})}else"png"==g?d.exportImage(x,null==v||"none"==v,!0,!1,!1,A,!0,!1,null,H,J):d.exportImage(x,!1,!0,!1,!1,A,!0,!1,"jpeg",H);else mxUtils.alert(mxResources.get("drawingTooLarge"))}});EditorUi.prototype.getDiagramTextContent=function(){this.editor.graph.setEnabled(!1);var d=this.editor.graph,f="";if(null!=this.pages)for(var g=0;g<this.pages.length;g++){var v=d;this.currentPage!=this.pages[g]&&(v=this.createTemporaryGraph(d.getStylesheet()),