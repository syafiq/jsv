EditorUi.prototype.createCellLookup=function(b,g,k){k=null!=k?k:{};k[b.getId()]={cell:b,prev:g};var d=b.getChildCount();g=null;for(var t=0;t<d;t++){var v=b.getChildAt(t);this.createCellLookup(v,g,k);g=v}return k};