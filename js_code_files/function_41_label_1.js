function(){try{var p=T.width,x=T.height;if(0==p&&0==x){var G=H.result,K=G.indexOf(","),N=decodeURIComponent(escape(atob(G.substring(K+1)))),I=mxUtils.parseXml(N).getElementsByTagName("svg");0<I.length&&(p=parseFloat(I[0].getAttribute("width")),x=parseFloat(I[0].getAttribute("height")))}k(H.result,p,x)}catch(M){n(M)}};T.src=H.result};H.onerror=function(F){n(F)}}else n(C)};E.onerror=function(C){n(C)};E.send()};EditorUi.prototype.insertAsPreText=function(e,g,k){var n=this.editor.graph,u=null;n.getModel().beginUpdate();