c.defaultFilename,(G.constructor==DriveFile&&null!=G.sync&&G.sync.isConnected()||!/(\.html)$/i.test(K)&&!/(\.svg)$/i.test(K))&&this.addMenuItems(p,["-","properties"])),this.addMenuItems(p,["-","pageSetup"],x),mxClient.IS_IOS&&navigator.standalone||this.addMenuItems(p,["print"],x),this.addMenuItems(p,["-","close"])})));f.prototype.execute=function(){var p=this.ui.editor.graph;this.customFonts=this.prevCustomFonts;this.prevCustomFonts=this.ui.menus.customFonts;this.ui.fireEvent(new mxEventObject("customFontsChanged",
"customFonts",this.customFonts));this.extFonts=this.previousExtFonts;for(var x=p.extFonts,G=0;null!=x&&G<x.length;G++){var K=document.getElementById("extFont_"+x[G].name);null!=K&&K.parentNode.removeChild(K)}p.extFonts=[];for(G=0;null!=this.previousExtFonts&&G<this.previousExtFonts.length;G++)this.ui.editor.graph.addExtFont(this.previousExtFonts[G].name,this.previousExtFonts[G].url);this.previousExtFonts=x};this.put("fontFamily",new Menu(mxUtils.bind(this,function(p,x){for(var G=mxUtils.bind(this,