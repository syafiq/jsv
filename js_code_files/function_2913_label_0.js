(null!=f?' <div data-effect="fade" title="'+mxUtils.htmlEntities(f)+'">('+mxUtils.htmlEntities(f)+")</div>":""));this.resetUpdateStatusThread()}else this.file.addAllSavedStatus()};DrawioFileSync.prototype.resetUpdateStatusThread=function(){null!=this.updateStatusThread&&window.clearInterval(this.updateStatusThread);null!=this.channel&&(this.updateStatusThread=window.setInterval(mxUtils.bind(this,function(){this.updateStatus()}),Editor.updateStatusInterval))};