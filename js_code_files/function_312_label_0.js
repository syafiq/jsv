StorageFile.prototype.saveFile=function(b,e,f,c){if(this.isEditable()){var l=mxUtils.bind(this,function(){this.isRenamable()&&(this.title=b);try{var m=mxUtils.bind(this,function(){this.setModified(this.getShadowModified());this.contentChanged();null!=f&&f()});this.setShadowModified(!1);var t=this.getData();this.ui.setDatabaseItem(null,[{title:this.title,size:t.length,lastModified:Date.now(),type:this.type},{title:this.title,data:t}],m,mxUtils.bind(this,function(){null==this.ui.database?this.ui.setLocalData(this.title,
t,m):null!=c&&c()}),["filesInfo","files"])}catch(y){null!=c&&c(y)}});this.isRenamable()&&"."==b.charAt(0)&&null!=c?c({message:mxResources.get("invalidName")}):StorageFile.getFileInfo(this.ui,b,mxUtils.bind(this,function(m){this.isRenamable()&&this.getTitle()!=b&&null!=m?this.ui.confirm(mxResources.get("replaceIt",[b]),l,c):l()}),c)}else null!=f&&f()};