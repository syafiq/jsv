G.x-(null!=A?A.origin.x:0),D.geometry.y=Math.round(z/this.view.scale)-G.y-(null!=A?A.origin.y:0),D.style+="autosize=1;";this.getModel().beginUpdate();try{this.addCells([D],null!=A?A.cell:null),this.fireEvent(new mxEventObject("textInserted","cells",[D])),this.autoSizeCell(D)}finally{this.getModel().endUpdate()}return D};Graph.prototype.addClickHandler=function(t,z,A){var D=mxUtils.bind(this,function(){var ca=this.container.getElementsByTagName("a");if(null!=ca)for(var ia=0;ia<ca.length;ia++){var ta=