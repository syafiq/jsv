var D=Menus.prototype.addShortcut;Menus.prototype.addShortcut=function(g,v){null!=v.shortcut&&900>l&&!mxClient.IS_IOS?g.firstChild.nextSibling.setAttribute("title",v.shortcut):D.apply(this,arguments)};var M=Menus.prototype.createPopupMenu;Menus.prototype.createPopupMenu=function(g,v,x){var A=this.editorUi.editor.graph;g.smartSeparators=!0;M.apply(this,arguments);1==A.getSelectionCount()?(A.isCellFoldable(A.getSelectionCell())&&this.addMenuItems(g,A.isCellCollapsed(v)?["expand"]:["collapse"],null,
x),this.addMenuItems(g,["collapsible","-","lockUnlock","enterGroup"],null,x),g.addSeparator(),this.addSubmenu("layout",g)):A.isSelectionEmpty()&&A.isEnabled()?(g.addSeparator(),this.addMenuItems(g,["editData"],null,x),g.addSeparator(),this.addSubmenu("layout",g),this.addSubmenu("insert",g),this.addMenuItems(g,["-","exitGroup"],null,x)):A.isEnabled()&&this.addMenuItems(g,["-","lockUnlock"],null,x)};var R=Menus.prototype.addPopupMenuEditItems;Menus.prototype.addPopupMenuEditItems=function(g,v,x){R.apply(this,