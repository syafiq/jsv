GitHubFile.prototype.setDescriptorEtag=function(b,e){b.sha=e};GitHubFile.prototype.save=function(b,e,f,c,l,m){this.doSave(this.getTitle(),e,f,c,l,m)};GitHubFile.prototype.saveAs=function(b,e,f){this.doSave(b,e,f)};GitHubFile.prototype.doSave=function(b,e,f,c,l,m){var t=this.meta.name;this.meta.name=b;DrawioFile.prototype.save.apply(this,[null,mxUtils.bind(this,function(){this.meta.name=t;this.saveFile(b,!1,e,f,c,l,m)}),f,c,l])};