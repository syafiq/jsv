TrelloClient.prototype.insertFile=function(b,e,f,c,l,m){l=null!=l?l:!1;var t=mxUtils.bind(this,function(){var y=mxUtils.bind(this,function(C){this.writeFile(b,C,m,mxUtils.bind(this,function(z){l?f(new TrelloLibrary(this.ui,e,z)):f(new TrelloFile(this.ui,e,z))}),c)});this.ui.useCanvasForExport&&/(\.png)$/i.test(b)?this.ui.getEmbeddedPng(mxUtils.bind(this,function(C){y(this.ui.base64ToBlob(C,"image/png"))}),c,e):y(e)});this.authenticate(t,c)};