App.prototype.filterDrafts=function(b,e,f){function c(){f(l)}var l=[];try{this.getDatabaseItems(mxUtils.bind(this,function(m){EditorUi.debug("App.filterDrafts",[this],"items",m);for(var t=0;t<m.length;t++)try{var y=m[t].key;if(null!=y&&".draft_"==y.substring(0,7)){var C=JSON.parse(m[t].data);null!=C&&"draft"==C.type&&C.aliveCheck!=e&&(null==b&&null==C.fileObject||null!=C.fileObject&&C.fileObject.path==b)&&(C.key=y,l.push(C))}}catch(z){}c()},c))}catch(m){c()}};