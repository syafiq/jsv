DrawioFile.prototype.getAnonymizedXmlForPages=function(b){var e=new mxCodec(mxUtils.createXmlDocument()),k=e.document.createElement("mxfile");if(null!=b)for(var l=0;l<b.length;l++){var B=e.encode(new mxGraphModel(b[l].root));"1"!=urlParams.dev&&(B=this.ui.anonymizeNode(B,!0));B.setAttribute("id",b[l].getId());b[l].viewState&&this.ui.editor.graph.saveViewState(b[l].viewState,B,!0);k.appendChild(B)}return mxUtils.getPrettyXml(k)};