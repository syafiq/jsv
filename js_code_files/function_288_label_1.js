(this.file.stats.cacheFail++,this.reload(d,f,c))}catch(E){null!=f&&f(E)}}else null!=f&&f()}))}else null!=f&&f()});window.setTimeout(z,this.cacheReadyDelay)}}else null!=f&&f()}};DrawioFileSync.prototype.reload=function(b,d,f,c){this.file.updateFile(mxUtils.bind(this,function(){this.lastModified=this.file.getLastModifiedDate();this.updateStatus();this.start();null!=b&&b()}),mxUtils.bind(this,function(l){null!=d&&d(l)}),f,c)};