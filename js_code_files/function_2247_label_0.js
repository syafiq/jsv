this.isDiagramEmpty()&&this.currentPage.getName()==mxResources.get("pageWithNumber",[1])};EditorUi.prototype.confirmImageResize=function(d,f){f=null!=f?f:!1;var g=null!=this.spinner&&null!=this.spinner.pause?this.spinner.pause():function(){},u=isLocalStorage||mxClient.IS_CHROMEAPP?mxSettings.getResizeImages():null,x=function(A,H){if(A||f)mxSettings.setResizeImages(A?H:null),mxSettings.save();g();d(H)};null==u||f?this.showDialog((new ConfirmDialog(this,mxResources.get("resizeLargeImages"),function(A){x(A,