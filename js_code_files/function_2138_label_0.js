Graph.prototype.isLightboxView=function(){return!1};var B=EditorUi.prototype.updateTabContainer;EditorUi.prototype.updateTabContainer=function(){null!=this.tabContainer&&(this.tabContainer.style.right="70px",this.diagramContainer.style.bottom=this.tabContainerHeight+"px");B.apply(this,arguments)};var q=EditorUi.prototype.updateActionStates;EditorUi.prototype.updateActionStates=function(){q.apply(this,arguments);this.menus.get("save").setEnabled(null!=this.getCurrentFile()||"1"==urlParams.embed)};