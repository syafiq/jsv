(new mxXmlRequest(SAVE_URL,"format="+N+"&xml="+encodeURIComponent(I)+"&filename="+encodeURIComponent(b)+(v?"&binary=1":""))).simulate(document,"_blank")}else this.ui.handleError({message:mxResources.get("drawingTooLarge")},mxResources.get("error"),mxUtils.bind(this,function(){mxUtils.popup(I)}));G()}});v?(g=this.ui.getPngFileProperties(this.ui.fileNode),this.ui.getEmbeddedPng(mxUtils.bind(this,function(I){H(I)}),d,this.ui.getCurrentFile()!=this?B:null,g.scale,g.border)):H(B)};