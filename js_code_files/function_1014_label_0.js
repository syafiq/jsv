g,k)<<0}else if(null!=d&&"function"!==typeof d){d=String(d);g=0;null!=k&&(k.byteCount+=d.length);for(x=0;x<d.length;x++)g=(g<<5)-g+d.charCodeAt(x)<<0;n^=g}return n};EditorUi.prototype.descriptorChanged=function(){};EditorUi.prototype.restoreLibraries=function(){};EditorUi.prototype.saveLibrary=function(d,g,k,n,x,u,D){};EditorUi.prototype.isScratchpadEnabled=function(){return isLocalStorage||mxClient.IS_CHROMEAPP};EditorUi.prototype.toggleScratchpad=function(){this.isScratchpadEnabled()&&(null==this.scratchpad?
StorageFile.getFileContent(this,".scratchpad",mxUtils.bind(this,function(d){null==d&&(d=this.emptyLibraryXml);this.loadLibrary(new StorageLibrary(this,d,".scratchpad"))})):this.closeLibrary(this.scratchpad))};EditorUi.prototype.createLibraryDataFromImages=function(d){var g=mxUtils.createXmlDocument(),k=g.createElement("mxlibrary");mxUtils.setTextContent(k,JSON.stringify(d));g.appendChild(k);return mxUtils.getXml(g)};EditorUi.prototype.closeLibrary=function(d){null!=d&&(this.removeLibrarySidebar(d.getHash()),