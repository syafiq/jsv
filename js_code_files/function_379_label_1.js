var F=null;this.panningHandler.addListener(mxEvent.PAN_START,mxUtils.bind(this,function(){this.isEnabled()&&(F=this.container.style.cursor,this.container.style.cursor="move")}));this.panningHandler.addListener(mxEvent.PAN_END,mxUtils.bind(this,function(){this.isEnabled()&&(this.container.style.cursor=F)}));this.popupMenuHandler.autoExpand=!0;this.popupMenuHandler.isSelectOnPopup=function(K){return mxEvent.isMouseEvent(K.getEvent())};var ea=this.click;this.click=function(K){var V=null==K.state&&null!=
K.sourceState&&this.isCellLocked(K.sourceState.cell);if(this.isEnabled()&&!V||K.isConsumed())return ea.apply(this,arguments);var T=V?K.sourceState.cell:K.getCell();null!=T&&(T=this.getClickableLinkForCell(T),null!=T&&(this.isCustomLink(T)?this.customLinkClicked(T):this.openLink(T)));this.isEnabled()&&V&&this.clearSelection()};this.tooltipHandler.getStateForEvent=function(K){return K.sourceState};var ja=this.tooltipHandler.show;this.tooltipHandler.show=function(){ja.apply(this,arguments);if(null!=