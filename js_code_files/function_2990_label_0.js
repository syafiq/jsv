this.isTransparentState(aa)){for(var ea=!0,na=0;na<this.model.getChildCount(aa.cell)&&ea;na++)L.get(this.model.getChildAt(aa.cell,na))||(ea=!1);ea&&y.push(aa.cell)}}mxGraph.prototype.cellsRemoved.apply(this,arguments)};Graph.prototype.removeCellsAfterUngroup=function(y){for(var L=[],O=0;O<y.length;O++)this.isCellDeletable(y[O])&&this.isTransparentState(this.view.getState(y[O]))&&L.push(y[O]);y=L;mxGraph.prototype.removeCellsAfterUngroup.apply(this,arguments)};Graph.prototype.setLinkForCell=function(y,
L){this.setAttributeForCell(y,"link",L)};Graph.prototype.setTooltipForCell=function(y,L){var O="tooltip";Graph.translateDiagram&&null!=Graph.diagramLanguage&&mxUtils.isNode(y.value)&&y.value.hasAttribute("tooltip_"+Graph.diagramLanguage)&&(O="tooltip_"+Graph.diagramLanguage);this.setAttributeForCell(y,O,L)};Graph.prototype.getAttributeForCell=function(y,L,O){y=null!=y.value&&"object"===typeof y.value?y.value.getAttribute(L):null;return null!=y?y:O};Graph.prototype.setAttributeForCell=function(y,L,