EditorUi.prototype.getPageIndex=function(b){var f=null;if(null!=this.pages&&null!=b)for(var k=0;k<this.pages.length;k++)if(this.pages[k]==b){f=k;break}return f};EditorUi.prototype.getPageById=function(b,f){f=null!=f?f:this.pages;if(null!=f)for(var k=0;k<f.length;k++)if(f[k].getId()==b)return f[k];return null};