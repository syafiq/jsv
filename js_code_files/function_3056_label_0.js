d.hasAttribute("dx")||d.hasAttribute("dy"))x.view.translate=new mxPoint(parseFloat(d.getAttribute("dx")||0),parseFloat(d.getAttribute("dy")||0))}else"fit"==d.nodeName&&(H=d.hasAttribute("max-scale")?parseFloat(d.getAttribute("max-scale")):1);d=d.nextSibling}}finally{A.endUpdate()}null!=H&&this.chromelessResize&&this.chromelessResize(!0,H)}return g};EditorUi.prototype.getCopyFilename=function(d,f){var g=null!=d&&null!=d.getTitle()?d.getTitle():this.defaultFilename;d="";var u=g.lastIndexOf(".");0<=
u&&(d=g.substring(u),g=g.substring(0,u));if(f){f=g;var x=new Date;g=x.getFullYear();u=x.getMonth()+1;var A=x.getDate(),H=x.getHours(),P=x.getMinutes();x=x.getSeconds();g=f+(" "+(g+"-"+u+"-"+A+"-"+H+"-"+P+"-"+x))}return g=mxResources.get("copyOf",[g])+d};EditorUi.prototype.fileLoaded=function(d,f){var g=this.getCurrentFile();this.fileEditable=this.fileLoadedError=null;this.setCurrentFile(null);var u=!1;this.hideDialog();null!=g&&(EditorUi.debug("File.closed",[g]),g.removeListener(this.descriptorChangedListener),