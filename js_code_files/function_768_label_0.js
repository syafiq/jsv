var WrapperWindow=function(a,b,f,e,g,d,h){var n=a.createSidebarContainer();h(n);this.window=new mxWindow(b,n,f,e,g,d,!0,!0);this.window.destroyOnClose=!1;this.window.setMaximizable(!1);this.window.setResizable(!0);this.window.setClosable(!0);this.window.setVisible(!0);a.installResizeHandler(this,!0);mxClient.IS_SF&&(this.window.div.onselectstart=mxUtils.bind(this,function(u){null==u&&(u=window.event);return null!=u&&a.isSelectionAllowed(u)}))};