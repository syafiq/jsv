DropboxFile.prototype.doSave=function(b,e,f,c,l,m){var t=this.stat.name;this.stat.name=b;DrawioFile.prototype.save.apply(this,[null,mxUtils.bind(this,function(){this.stat.name=t;this.saveFile(b,e,f,c,l,m)}),c,l,m])};