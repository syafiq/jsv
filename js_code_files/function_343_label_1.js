(g.getElementsByTagName("img")[0].style.left="22px",g.getElementsByTagName("img")[0].style.top="5px")};Toolbar.prototype.hideMenu=function(){this.editorUi.hideCurrentMenu()};Toolbar.prototype.addMenu=function(a,b,f,e,g,d,h){var n=this.editorUi.menus.get(e),v=this.addMenuFunction(a,b,f,function(){n.funct.apply(n,arguments)},g,d);h||"function"!==typeof v.setEnabled||n.addListener("stateChanged",function(){v.setEnabled(n.enabled)});return v};