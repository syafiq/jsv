function(){if(!this.isEditing()){var ka=mxUtils.getScrollOrigin();this.popupMenuHandler.popup(Y.getX()+ka.x+1,Y.getY()+ka.y+1,ea,Y.getEvent())}}),500)});mxPopupMenuHandler.prototype.mouseUp.apply(this.popupMenuHandler,[L,Y,ha])})};mxCellEditor.prototype.isContentEditing=function(){var t=this.graph.view.getState(this.editingCell);return null!=t&&1==t.style.html};mxCellEditor.prototype.isTableSelected=function(){return null!=this.graph.getParentByName(this.graph.getSelectedElement(),"TABLE",this.textarea)};