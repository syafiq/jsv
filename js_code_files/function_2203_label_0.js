A,v):null!=d&&d()}),["filesInfo","files"])}catch(F){null!=d&&d(F)}});this.isRenamable()&&"."==b.charAt(0)&&null!=d?d({message:mxResources.get("invalidName")}):StorageFile.getFileInfo(this.ui,b,mxUtils.bind(this,function(v){this.isRenamable()&&this.getTitle()!=b&&null!=v?this.ui.confirm(mxResources.get("replaceIt",[b]),u,d):u()}),d)}else null!=k&&k()};