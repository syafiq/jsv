EditorUi.prototype.onKeyDown=function(b){var e=this.editor.graph;if(9==b.which&&e.isEnabled()&&!mxEvent.isControlDown(b)){if(e.isEditing())if(mxEvent.isAltDown(b))e.stopEditing(!1);else try{var k=e.cellEditor.isContentEditing()&&e.cellEditor.isTextSelected();if(window.getSelection&&e.cellEditor.isContentEditing()&&!k&&!mxClient.IS_IE&&!mxClient.IS_IE11){var l=window.getSelection(),B=0<l.rangeCount?l.getRangeAt(0).commonAncestorContainer:null;k=null!=B&&("LI"==B.nodeName||null!=B.parentNode&&"LI"==
B.parentNode.nodeName)}k?document.execCommand(mxEvent.isShiftDown(b)?"outdent":"indent",!1,null):mxEvent.isShiftDown(b)?e.stopEditing(!1):e.cellEditor.insertTab(e.cellEditor.isContentEditing()?null:4)}catch(q){}else mxEvent.isAltDown(b)?e.selectParentCell():e.selectCell(!mxEvent.isShiftDown(b));mxEvent.consume(b)}};