function(){p.hideDialog();Q(!1)}),ba.className="geBtn",B.appendChild(ba));ba=mxUtils.button(mxResources.get(PrintDialog.previewEnabled?"print":"ok"),function(){p.hideDialog();Q(!0)});ba.className="geBtn gePrimaryBtn";B.appendChild(ba);p.editor.cancelFirst||B.appendChild(T);R.appendChild(B);this.container=R};var P=ChangePageSetup.prototype.execute;ChangePageSetup.prototype.execute=function(){null==this.page&&(this.page=this.ui.currentPage);if(this.page!=this.ui.currentPage){if(null!=this.page.viewState){this.ignoreColor||
(this.page.viewState.background=this.color);if(!this.ignoreImage){var p=this.image;null!=p&&null!=p.src&&Graph.isPageLink(p.src)&&(p={originalSrc:p.src});this.page.viewState.backgroundImage=p}null!=this.format&&(this.page.viewState.pageFormat=this.format);null!=this.mathEnabled&&(this.page.viewState.mathEnabled=this.mathEnabled);null!=this.shadowVisible&&(this.page.viewState.shadowVisible=this.shadowVisible)}}else P.apply(this,arguments),null!=this.mathEnabled&&this.mathEnabled!=this.ui.isMathEnabled()&&
(this.ui.setMathEnabled(this.mathEnabled),this.mathEnabled=!this.mathEnabled),null!=this.shadowVisible&&this.shadowVisible!=this.ui.editor.graph.shadowVisible&&(this.ui.editor.graph.setShadowVisible(this.shadowVisible),this.shadowVisible=!this.shadowVisible)};Editor.prototype.useCanvasForExport=!1;try{var O=document.createElement("canvas"),V=new Image;V.onload=function(){try{O.getContext("2d").drawImage(V,0,0);var p=O.toDataURL("image/png");Editor.prototype.useCanvasForExport=null!=p&&6<p.length}catch(B){}};