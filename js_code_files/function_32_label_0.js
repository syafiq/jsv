Menus.prototype.addPopupMenuStyleItems=function(a,b,f){this.isShowStyleItems()&&(1==this.editorUi.editor.graph.getSelectionCount()?this.addMenuItems(a,["-","setAsDefaultStyle"],null,f):this.editorUi.editor.graph.isSelectionEmpty()&&this.addMenuItems(a,["-","clearDefaultStyle"],null,f))};Menus.prototype.isShowArrangeItems=function(){return!0};