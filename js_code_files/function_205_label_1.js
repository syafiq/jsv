Sidebar.prototype.searchEntries=function(a,b,f,e,g){if(null!=this.taglist&&null!=a){var d=a.toLowerCase().split(" ");g=new mxDictionary;var h=(f+1)*b;a=[];for(var n=0,v=0;v<d.length;v++)if(0<d[v].length){var m=this.taglist[d[v]],r=new mxDictionary;if(null!=m){var x=m.entries;a=[];for(var B=0;B<x.length;B++)if(m=x[B],0==n==(null==g.get(m))&&(r.put(m,m),a.push(m),v==d.length-1&&a.length==h)){e(a.slice(f*b,h),h,!0,d);return}}else a=[];g=r;n++}g=a.length;e(a.slice(f*b,(f+1)*b),g,!1,d)}else e([],null,
null,d)};Sidebar.prototype.filterTags=function(a){if(null!=a){a=a.split(" ");for(var b=[],f={},e=0;e<a.length;e++)null==f[a[e]]&&(f[a[e]]="1",b.push(a[e]));return b.join(" ")}return null};Sidebar.prototype.cloneCell=function(a,b){a=a.clone();null!=b&&(a.value=b);return a};Sidebar.prototype.showPopupMenuForEntry=function(a,b,f){};