this.currentState&&L.getState()==this.currentState&&2E3<E||(null==this.currentState||"0"!=mxUtils.getValue(this.currentState.style,"outlineConnect","1"))&&Q.apply(this,arguments)};var S=this.isToggleEvent;this.isToggleEvent=function(L){return S.apply(this,arguments)||!mxClient.IS_CHROMEOS&&mxEvent.isShiftDown(L)};var R=F.isForceRubberbandEvent;F.isForceRubberbandEvent=function(L){return R.apply(this,arguments)||mxClient.IS_CHROMEOS&&mxEvent.isShiftDown(L.getEvent())||mxUtils.hasScrollbars(this.graph.container)&&
mxClient.IS_FF&&mxClient.IS_WIN&&null==L.getState()&&mxEvent.isTouchEvent(L.getEvent())};var ba=null;this.panningHandler.addListener(mxEvent.PAN_START,mxUtils.bind(this,function(){this.isEnabled()&&(ba=this.container.style.cursor,this.container.style.cursor="move")}));this.panningHandler.addListener(mxEvent.PAN_END,mxUtils.bind(this,function(){this.isEnabled()&&(this.container.style.cursor=ba)}));this.popupMenuHandler.autoExpand=!0;this.popupMenuHandler.isSelectOnPopup=function(L){return mxEvent.isMouseEvent(L.getEvent())};