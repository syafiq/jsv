EditorUi.prototype.open=function(){try{null!=window.opener&&null!=window.opener.openFile&&window.opener.openFile.setConsumer(mxUtils.bind(this,function(b,e){try{var k=mxUtils.parseXml(b);this.editor.setGraphXml(k.documentElement);this.editor.setModified(!1);this.editor.undoManager.clear();null!=e&&(this.editor.setFilename(e),this.updateDocumentTitle())}catch(l){mxUtils.alert(mxResources.get("invalidOrMissingFile")+": "+l.message)}}))}catch(b){}this.editor.graph.view.validate();this.editor.graph.sizeDidChange();
this.editor.fireEvent(new mxEventObject("resetGraphView"))};EditorUi.prototype.showPopupMenu=function(b,e,k,l){this.editor.graph.popupMenuHandler.hideMenu();var C=new mxPopupMenu(b);C.div.className+=" geMenubarMenu";C.smartSeparators=!0;C.showDisabled=!0;C.autoExpand=!0;C.hideMenu=mxUtils.bind(this,function(){mxPopupMenu.prototype.hideMenu.apply(C,arguments);C.destroy()});C.popup(e,k,null,l);this.setCurrentMenu(C)};