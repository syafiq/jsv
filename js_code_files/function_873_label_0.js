0)*aa.width;this.translate.y=J.y-(this.y0||0)*aa.height}T.apply(this,arguments)};if(!a.isViewer()){var P=a.sizeDidChange;a.sizeDidChange=function(){if(null!=this.container&&mxUtils.hasScrollbars(this.container)){var J=this.getPageLayout(),aa=this.getPagePadding(),ja=this.getPageSize(),na=Math.ceil(2*aa.x+J.width*ja.width),X=Math.ceil(2*aa.y+J.height*ja.height),ea=a.minimumGraphSize;if(null==ea||ea.width!=na||ea.height!=X)a.minimumGraphSize=new mxRectangle(0,0,na,X);na=aa.x-J.x*ja.width;aa=aa.y-J.y*
ja.height;this.autoTranslate||this.view.translate.x==na&&this.view.translate.y==aa?P.apply(this,arguments):(this.autoTranslate=!0,this.view.x0=J.x,this.view.y0=J.y,J=a.view.translate.x,ja=a.view.translate.y,a.view.setTranslate(na,aa),a.container.scrollLeft+=Math.round((na-J)*a.view.scale),a.container.scrollTop+=Math.round((aa-ja)*a.view.scale),this.autoTranslate=!1)}else this.fireEvent(new mxEventObject(mxEvent.SIZE,"bounds",this.getGraphBounds()))}}}var Y=a.view.getBackgroundPane(),ka=a.view.getDrawPane();