v):mxscript("js/extensions.min.js",v))};EditorUi.prototype.generatePlantUmlImage=function(e,g,k,n){function u(C,H,F){c1=C>>2;c2=(C&3)<<4|H>>4;c3=(H&15)<<2|F>>6;c4=F&63;r="";r+=v(c1&63);r+=v(c2&63);r+=v(c3&63);return r+=v(c4&63)}function v(C){if(10>C)return String.fromCharCode(48+C);C-=10;if(26>C)return String.fromCharCode(65+C);C-=26;if(26>C)return String.fromCharCode(97+C);C-=26;return 0==C?"-":1==C?"_":"?"}var E=new XMLHttpRequest;E.open("GET",("txt"==g?PLANT_URL+"/txt/":"png"==g?PLANT_URL+"/png/":
PLANT_URL+"/svg/")+function(C){r="";for(i=0;i<C.length;i+=3)r=i+2==C.length?r+u(C.charCodeAt(i),C.charCodeAt(i+1),0):i+1==C.length?r+u(C.charCodeAt(i),0,0):r+u(C.charCodeAt(i),C.charCodeAt(i+1),C.charCodeAt(i+2));return r}(Graph.arrayBufferToString(pako.deflateRaw(e))),!0);"txt"!=g&&(E.responseType="blob");E.onload=function(C){if(200<=this.status&&300>this.status)if("txt"==g)k(this.response);else{var H=new FileReader;H.readAsDataURL(this.response);H.onloadend=function(F){var T=new Image;T.onload=
function(){try{var p=T.width,x=T.height;if(0==p&&0==x){var G=H.result,K=G.indexOf(","),N=decodeURIComponent(escape(atob(G.substring(K+1)))),I=mxUtils.parseXml(N).getElementsByTagName("svg");0<I.length&&(p=parseFloat(I[0].getAttribute("width")),x=parseFloat(I[0].getAttribute("height")))}k(H.result,p,x)}catch(M){n(M)}};T.src=H.result};H.onerror=function(F){n(F)}}else n(C)};E.onerror=function(C){n(C)};E.send()};EditorUi.prototype.insertAsPreText=function(e,g,k){var n=this.editor.graph,u=null;n.getModel().beginUpdate();