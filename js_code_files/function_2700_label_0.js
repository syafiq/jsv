this.pages&&1==this.pages.length&&this.isDiagramEmpty()&&this.currentPage.getName()==mxResources.get("pageWithNumber",[1])};EditorUi.prototype.confirmImageResize=function(d,g){g=null!=g?g:!1;var k=null!=this.spinner&&null!=this.spinner.pause?this.spinner.pause():function(){},n=isLocalStorage||mxClient.IS_CHROMEAPP?mxSettings.getResizeImages():null,x=function(u,D){if(u||g)mxSettings.setResizeImages(u?D:null),mxSettings.save();k();d(D)};null==n||g?this.showDialog((new ConfirmDialog(this,mxResources.get("resizeLargeImages"),
function(u){x(u,!0)},function(u){x(u,!1)},mxResources.get("resize"),mxResources.get("actualSize"),'<img style="margin-top:8px;" src="'+Editor.loResImage+'"/>','<img style="margin-top:8px;" src="'+Editor.hiResImage+'"/>',isLocalStorage||mxClient.IS_CHROMEAPP)).container,340,isLocalStorage||mxClient.IS_CHROMEAPP?220:200,!0,!0):x(!1,n)};EditorUi.prototype.parseFile=function(d,g,k){k=null!=k?k:d.name;var n=new FileReader;n.onload=mxUtils.bind(this,function(){this.parseFileData(n.result,g,k)});n.readAsText(d)};