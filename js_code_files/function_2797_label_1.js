function(){A.apply(this,arguments);var e=this.editor.graph,g=this.getCurrentFile(),k=this.getSelectionState(),n=this.isDiagramActive();this.actions.get("pageSetup").setEnabled(n);this.actions.get("autosave").setEnabled(null!=g&&g.isEditable()&&g.isAutosaveOptional());this.actions.get("guides").setEnabled(n);this.actions.get("editData").setEnabled(e.isEnabled());this.actions.get("shadowVisible").setEnabled(n);this.actions.get("connectionArrows").setEnabled(n);this.actions.get("connectionPoints").setEnabled(n);
this.actions.get("copyStyle").setEnabled(n&&!e.isSelectionEmpty());this.actions.get("pasteStyle").setEnabled(n&&0<k.cells.length);this.actions.get("editGeometry").setEnabled(0<k.vertices.length);this.actions.get("createShape").setEnabled(n);this.actions.get("createRevision").setEnabled(n);this.actions.get("moveToFolder").setEnabled(null!=g);this.actions.get("makeCopy").setEnabled(null!=g&&!g.isRestricted());this.actions.get("editDiagram").setEnabled(n&&(null==g||!g.isRestricted()));this.actions.get("publishLink").setEnabled(null!=
g&&!g.isRestricted());this.actions.get("tags").setEnabled("hidden"!=this.diagramContainer.style.visibility);this.actions.get("layers").setEnabled("hidden"!=this.diagramContainer.style.visibility);this.actions.get("outline").setEnabled("hidden"!=this.diagramContainer.style.visibility);this.actions.get("rename").setEnabled(null!=g&&g.isRenamable()||"1"==urlParams.embed);this.actions.get("close").setEnabled(null!=g);this.menus.get("publish").setEnabled(null!=g&&!g.isRestricted());g=this.actions.get("findReplace");
g.setEnabled("hidden"!=this.diagramContainer.style.visibility);g.label=mxResources.get("find")+(e.isEnabled()?"/"+mxResources.get("replace"):"");e=e.view.getState(e.getSelectionCell());this.actions.get("editShape").setEnabled(n&&null!=e&&null!=e.shape&&null!=e.shape.stencil)};var J=EditorUi.prototype.destroy;EditorUi.prototype.destroy=function(){null!=this.exportDialog&&(this.exportDialog.parentNode.removeChild(this.exportDialog),this.exportDialog=null);J.apply(this,arguments)};null!=window.ExportDialog&&