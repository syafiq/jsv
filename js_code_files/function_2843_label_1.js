G[M]&&(G[M]=(G[M]||0)+1,x++),K.push(I))}l.setCellStyles(mxConstants.STYLE_IMAGE,null,K);console.log("Removed",x,"image(s) from",K.length,"cell(s): ",[K,G])}finally{l.model.endUpdate()}}));c.actions.addAction("testInspect",mxUtils.bind(this,function(){console.log(c,l.getModel())}));c.actions.addAction("testXmlImageExport",mxUtils.bind(this,function(){var p=new mxImageExport,x=l.getGraphBounds(),G=l.view.scale,K=mxUtils.createXmlDocument(),N=K.createElement("output");K.appendChild(N);K=new mxXmlCanvas2D(N);