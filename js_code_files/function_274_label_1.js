A};var n=Graph.prototype.isExtendParent;Graph.prototype.isExtendParent=function(t){var z=this.model.getParent(t);if(null!=z){var A=this.getCurrentCellStyle(z);if(null!=A.expand)return"0"!=A.expand}return n.apply(this,arguments)&&(null==z||!this.isTable(z))};var v=Graph.prototype.splitEdge;Graph.prototype.splitEdge=function(t,z,A,E,G,L,Y,ha){null==ha&&(ha=this.model.getParent(t),this.isTable(ha)||this.isTableRow(ha))&&(ha=this.getCellAt(L,Y,null,!0,!1));A=null;this.model.beginUpdate();try{A=v.apply(this,