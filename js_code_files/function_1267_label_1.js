ArrangePanel.prototype.addTable=function(a){var b=this.editorUi,f=b.editor.graph,e=b.getSelectionState();a.style.paddingTop="6px";a.style.paddingBottom="10px";var g=document.createElement("div");g.style.marginTop="0px";g.style.marginBottom="6px";g.style.fontWeight="bold";mxUtils.write(g,mxResources.get("table"));a.appendChild(g);g=document.createElement("div");g.style.position="relative";g.style.paddingLeft="0px";g.style.borderWidth="0px";g.style.width="220px";g.className="geToolbarContainer";var d=
e.vertices[0];1<f.getSelectionCount()&&(f.isTableCell(d)&&(d=f.model.getParent(d)),f.isTableRow(d)&&(d=f.model.getParent(d)));var h=e.table||e.row||e.cell,n=f.isStack(d)||f.isStackChild(d),v=h;n&&(h="0"==(f.isStack(d)?e.style:f.getCellStyle(f.model.getParent(d))).horizontalStack,v=!h);var m=[];v&&(m=m.concat([b.toolbar.addButton("geSprite-insertcolumnbefore",mxResources.get("insertColumnBefore"),mxUtils.bind(this,function(){try{n?f.insertLane(d,!0):f.insertTableColumn(d,!0)}catch(r){b.handleError(r)}}),
g),b.toolbar.addButton("geSprite-insertcolumnafter",mxResources.get("insertColumnAfter"),mxUtils.bind(this,function(){try{n?f.insertLane(d,!1):f.insertTableColumn(d,!1)}catch(r){b.handleError(r)}}),g),b.toolbar.addButton("geSprite-deletecolumn",mxResources.get("deleteColumn"),mxUtils.bind(this,function(){try{n?f.deleteLane(d):f.deleteTableColumn(d)}catch(r){b.handleError(r)}}),g)]));h&&(m=m.concat([b.toolbar.addButton("geSprite-insertrowbefore",mxResources.get("insertRowBefore"),mxUtils.bind(this,
function(){try{n?f.insertLane(d,!0):f.insertTableRow(d,!0)}catch(r){b.handleError(r)}}),g),b.toolbar.addButton("geSprite-insertrowafter",mxResources.get("insertRowAfter"),mxUtils.bind(this,function(){try{n?f.insertLane(d,!1):f.insertTableRow(d,!1)}catch(r){b.handleError(r)}}),g),b.toolbar.addButton("geSprite-deleterow",mxResources.get("deleteRow"),mxUtils.bind(this,function(){try{n?f.deleteLane(d):f.deleteTableRow(d)}catch(r){b.handleError(r)}}),g)]));if(0<m.length){this.styleButtons(m);a.appendChild(g);
3<m.length&&(m[2].style.marginRight="10px");v=0;if(null!=e.mergeCell)v+=this.addActions(a,["mergeCells"]);else if(1<e.style.colspan||1<e.style.rowspan)v+=this.addActions(a,["unmergeCells"]);0<v&&(g.style.paddingBottom="2px")}else a.style.display="none";return a};ArrangePanel.prototype.addLayerOps=function(a){this.addActions(a,["toFront","toBack"]);this.addActions(a,["bringForward","sendBackward"]);return a};