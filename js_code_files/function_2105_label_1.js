e+";"))}}),mxUtils.bind(this,function(){var x=null;H.getModel().beginUpdate();try{x=H.insertVertex(H.getDefaultParent(),null,e,H.snap(g),H.snap(k),1,1,"text;"+(n?"html=1;":"")),H.updateCellSize(x),H.fireEvent(new mxEventObject("textInserted","cells",[x]))}finally{H.getModel().endUpdate()}H.setSelectionCell(x)}))}else{e=Graph.zapGremlins(mxUtils.trim(e));if(this.isCompatibleString(e))return this.importXml(e,g,k,v,null,C);if(0<e.length)if(this.isLucidChartData(e))this.convertLucidChart(e,mxUtils.bind(this,