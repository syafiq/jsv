e,g,n,q).simulate(document,"_blank")}};EditorUi.prototype.createEchoRequest=function(c,e,g,n,q,p){c="xml="+encodeURIComponent(c);return new mxXmlRequest(SAVE_URL,c+(null!=g?"&mime="+g:"")+(null!=q?"&format="+q:"")+(null!=p?"&base64="+p:"")+(null!=e?"&filename="+encodeURIComponent(e):"")+(n?"&binary=1":""))};EditorUi.prototype.base64ToBlob=function(c,e){e=e||"";c=atob(c);for(var g=c.length,n=Math.ceil(g/1024),q=Array(n),p=0;p<n;++p){for(var y=1024*p,B=Math.min(y+1024,g),G=Array(B-y),C=0;y<B;++C,++y)G[C]=