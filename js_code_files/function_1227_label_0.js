g,k,n,x).simulate(document,"_blank")}};EditorUi.prototype.createEchoRequest=function(d,g,k,n,x,u){d="xml="+encodeURIComponent(d);return new mxXmlRequest(SAVE_URL,d+(null!=k?"&mime="+k:"")+(null!=x?"&format="+x:"")+(null!=u?"&base64="+u:"")+(null!=g?"&filename="+encodeURIComponent(g):"")+(n?"&binary=1":""))};EditorUi.prototype.base64ToBlob=function(d,g){g=g||"";d=atob(d);for(var k=d.length,n=Math.ceil(k/1024),x=Array(n),u=0;u<n;++u){for(var D=1024*u,F=Math.min(D+1024,k),I=Array(F-D),G=0;D<F;++G,++D)I[G]=
d[D].charCodeAt(0);x[u]=new Uint8Array(I)}return new Blob(x,{type:g})};EditorUi.prototype.saveLocalFile=function(d,g,k,n,x,u,D,F){u=null!=u?u:!1;D=null!=D?D:"vsdx"!=x&&(!mxClient.IS_IOS||!navigator.standalone);x=this.getServiceCount(u);isLocalStorage&&x++;var I=4>=x?2:6<x?4:3;g=new CreateDialog(this,g,mxUtils.bind(this,function(G,U){try{if("_blank"==U)if(null!=k&&"image/"==k.substring(0,6))this.openInNewWindow(d,k,n);else if(null!=k&&"text/html"==k.substring(0,9)){var q=new EmbedDialog(this,d);this.showDialog(q.container,