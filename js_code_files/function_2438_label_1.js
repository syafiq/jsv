E};var S=this.getInsertPoint;this.getInsertPoint=function(){return null!=E?this.getPointForEvent(E):S.apply(this,arguments)};var ba=this.layoutManager.getLayout;this.layoutManager.getLayout=function(U){var ca=this.graph.getCellStyle(U);if(null!=ca&&"rack"==ca.childLayout){var da=new mxStackLayout(this.graph,!1);da.gridSize=null!=ca.rackUnitSize?parseFloat(ca.rackUnitSize):"undefined"!==typeof mxRackContainer?mxRackContainer.unitSize:20;da.marginLeft=ca.marginLeft||0;da.marginRight=ca.marginRight||