function(){b.spinner.stop();c(null);b.showError(mxResources.get("error"),mxResources.get("fileNotFound"),mxResources.get("ok"))}):(b.hideDialog(),c(F,null,null,d,g,k)):(F=b.convertDataUri(F),I=null==I?120:I,G=null==G?100:G,b.hideDialog(),c(F,I,G,d,g,k))},x=function(F,I){if(null!=F){var G=l?null:z.getModel().getGeometry(z.getSelectionCell());null!=G?n(F,G.width,G.height,I):n(F,null,null,I)}else b.hideDialog(),c(null)};this.init=function(){J.focus();if(Graph.fileSupport){J.setAttribute("placeholder",