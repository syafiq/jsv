0;n^=g}return n};EditorUi.prototype.descriptorChanged=function(){};EditorUi.prototype.restoreLibraries=function(){};EditorUi.prototype.saveLibrary=function(e,g,k,n,u,v,E){};EditorUi.prototype.isScratchpadEnabled=function(){return isLocalStorage||mxClient.IS_CHROMEAPP};EditorUi.prototype.toggleScratchpad=function(){this.isScratchpadEnabled()&&(null==this.scratchpad?StorageFile.getFileContent(this,".scratchpad",mxUtils.bind(this,function(e){null==e&&(e=this.emptyLibraryXml);this.loadLibrary(new StorageLibrary(this,