K));if(this.isHtmlLabel(x)){var O=document.createElement("div");O.innerHTML=this.sanitizeHtml(this.getLabel(x));for(var R=O.getElementsByTagName("a"),Q=!1,S=0;S<R.length;S++)K=R[S].getAttribute("href"),null!=K&&"data:action/json,"==K.substring(0,17)&&(R[S].setAttribute("href",this.updateCustomLink(l,K)),Q=!0);Q&&this.labelChanged(x,O.innerHTML)}};Graph.prototype.updateCustomLink=function(l,x){if("data:action/json,"==x.substring(0,17))try{var K=JSON.parse(x.substring(17));null!=K.actions&&(this.updateCustomLinkActions(l,
K.actions),x="data:action/json,"+JSON.stringify(K))}catch(O){}return x};Graph.prototype.updateCustomLinkActions=function(l,x){for(var K=0;K<x.length;K++){var O=x[K],R;for(R in O)this.updateCustomLinkAction(l,O[R],"cells"),this.updateCustomLinkAction(l,O[R],"excludeCells")}};Graph.prototype.updateCustomLinkAction=function(l,x,K){if(null!=x&&null!=x[K]){for(var O=[],R=0;R<x[K].length;R++)if("*"==x[K][R])O.push(x[K][R]);else{var Q=l[x[K][R]];null!=Q?""!=Q&&O.push(Q):O.push(x[K][R])}x[K]=O}};Graph.prototype.getCellsForAction=