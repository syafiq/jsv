"html","0"))return mxCellEditorGetInitialValue.apply(this,arguments);var A=this.graph.getEditingValue(t.cell,z);"1"==mxUtils.getValue(t.style,"nl2Br","1")&&(A=A.replace(/\n/g,"<br/>"));return A=this.graph.sanitizeHtml(A,!0)};mxCellEditorGetCurrentValue=mxCellEditor.prototype.getCurrentValue;mxCellEditor.prototype.getCurrentValue=function(t){if("0"==mxUtils.getValue(t.style,"html","0"))return mxCellEditorGetCurrentValue.apply(this,arguments);var z=this.graph.sanitizeHtml(this.textarea.innerHTML,!0);
return z="1"==mxUtils.getValue(t.style,"nl2Br","1")?z.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>"):z.replace(/\r\n/g,"").replace(/\n/g,"")};var S=mxCellEditor.prototype.stopEditing;mxCellEditor.prototype.stopEditing=function(t){this.codeViewMode&&this.toggleViewMode();S.apply(this,arguments);this.focusContainer()};mxCellEditor.prototype.focusContainer=function(){try{this.graph.container.focus()}catch(t){}};var R=mxCellEditor.prototype.applyValue;mxCellEditor.prototype.applyValue=function(t,z){this.graph.getModel().beginUpdate();