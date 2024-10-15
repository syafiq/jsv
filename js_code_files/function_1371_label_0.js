EditorUi.prototype.isSettingsEnabled=function(){return"undefined"!==typeof window.mxSettings&&(isLocalStorage||mxClient.IS_CHROMEAPP)};EditorUi.prototype.installSettings=function(){if(this.isSettingsEnabled()){Editor.pagesVisible=mxSettings.settings.pagesVisible;ColorDialog.recentColors=mxSettings.getRecentColors();if(isLocalStorage)try{window.addEventListener("storage",mxUtils.bind(this,function(d){d.key==mxSettings.key&&(mxSettings.load(),ColorDialog.recentColors=mxSettings.getRecentColors(),this.menus.customFonts=
mxSettings.getCustomFonts())}),!1)}catch(d){}this.fireEvent(new mxEventObject("styleChanged","keys",[],"values",[],"cells",[]));this.menus.customFonts=mxSettings.getCustomFonts();this.addListener("customFontsChanged",mxUtils.bind(this,function(d,f){"1"!=urlParams["ext-fonts"]?mxSettings.setCustomFonts(this.menus.customFonts):(d=f.getProperty("customFonts"),this.menus.customFonts=d,mxSettings.setCustomFonts(d));mxSettings.save()}));this.editor.graph.connectionHandler.setCreateTarget(mxSettings.isCreateTarget());
this.fireEvent(new mxEventObject("copyConnectChanged"));this.addListener("copyConnectChanged",mxUtils.bind(this,function(d,f){mxSettings.setCreateTarget(this.editor.graph.connectionHandler.isCreateTarget());mxSettings.save()}));this.editor.graph.pageFormat=null!=this.editor.graph.defaultPageFormat?this.editor.graph.defaultPageFormat:mxSettings.getPageFormat();this.addListener("pageFormatChanged",mxUtils.bind(this,function(d,f){mxSettings.setPageFormat(this.editor.graph.pageFormat);mxSettings.save()}));
this.editor.graph.view.gridColor=mxSettings.getGridColor(Editor.isDarkMode());this.editor.graph.view.defaultDarkGridColor=mxSettings.getGridColor(!0);this.editor.graph.view.defaultGridColor=mxSettings.getGridColor(!1);this.addListener("gridColorChanged",mxUtils.bind(this,function(d,f){mxSettings.setGridColor(this.editor.graph.view.gridColor,Editor.isDarkMode());mxSettings.save()}));if(mxClient.IS_CHROMEAPP||EditorUi.isElectronApp)this.editor.addListener("autosaveChanged",mxUtils.bind(this,function(d,
f){mxSettings.setAutosave(this.editor.autosave);mxSettings.save()})),this.editor.autosave=mxSettings.getAutosave();null!=this.sidebar&&(null!=urlParams["search-shapes"]&&null!=this.sidebar.searchShapes?(this.sidebar.searchShapes(decodeURIComponent(urlParams["search-shapes"])),this.sidebar.showEntries("search")):(this.sidebar.showPalette("search",mxSettings.settings.search),this.editor.chromeless&&!this.editor.editable||!(mxSettings.settings.isNew||8>=parseInt(mxSettings.settings.version||0))||(this.toggleScratchpad(),
mxSettings.save())));this.addListener("formatWidthChanged",function(){mxSettings.setFormatWidth(this.formatWidth);mxSettings.save()})}};EditorUi.prototype.copyImage=function(d,f,g){try{null!=navigator.clipboard&&"function"===typeof window.ClipboardItem&&this.spinner.spin(document.body,mxResources.get("exporting"))&&this.editor.exportToCanvas(mxUtils.bind(this,function(u,x){try{this.spinner.stop();var A=this.createImageDataUri(u,f,"png"),H=parseInt(x.getAttribute("width")),P=parseInt(x.getAttribute("height"));