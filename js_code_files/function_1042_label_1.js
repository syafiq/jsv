Graph.prototype.isLightboxView=function(){return!1};var t=EditorUi.prototype.updateTabContainer;EditorUi.prototype.updateTabContainer=function(){null!=this.tabContainer&&(this.tabContainer.style.right="70px",this.diagramContainer.style.bottom=this.tabContainerHeight+"px");t.apply(this,arguments)};var v=EditorUi.prototype.updateActionStates;EditorUi.prototype.updateActionStates=function(){v.apply(this,arguments);this.menus.get("save").setEnabled(null!=this.getCurrentFile()||"1"==urlParams.embed)};