function(d){return 1!=d};EditorUi.prototype.getEditBlankXml=function(){return this.getFileData(!0)};EditorUi.prototype.exportFile=function(d,f,g,u,x,A){};EditorUi.prototype.pickFolder=function(d,f,g){f(null)};EditorUi.prototype.exportSvg=function(d,f,g,u,x,A,H,P,M,G,ia,ja,ha,ba){if(this.spinner.spin(document.body,mxResources.get("export")))try{var oa=this.editor.graph.isSelectionEmpty();g=null!=g?g:oa;var sa=f?null:this.editor.graph.background;sa==mxConstants.NONE&&(sa=null);null==sa&&0==f&&(sa=ia?