EditorUi.prototype.setDatabaseItem=function(d,g,k,n,x){this.openDatabase(mxUtils.bind(this,function(u){try{x=x||"objects";Array.isArray(x)||(x=[x],d=[d],g=[g]);var D=u.transaction(x,"readwrite");D.oncomplete=k;D.onerror=n;for(u=0;u<x.length;u++)D.objectStore(x[u]).put(null!=d&&null!=d[u]?{key:d[u],data:g[u]}:g[u])}catch(F){null!=n&&n(F)}}),n)};EditorUi.prototype.removeDatabaseItem=function(d,g,k,n){this.openDatabase(mxUtils.bind(this,function(x){n=n||"objects";Array.isArray(n)||(n=[n],d=[d]);x=x.transaction(n,