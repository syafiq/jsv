u):mxscript("js/extensions.min.js",u))};EditorUi.prototype.generatePlantUmlImage=function(d,g,k,n){function x(F,I,G){c1=F>>2;c2=(F&3)<<4|I>>4;c3=(I&15)<<2|G>>6;c4=G&63;r="";r+=u(c1&63);r+=u(c2&63);r+=u(c3&63);return r+=u(c4&63)}function u(F){if(10>F)return String.fromCharCode(48+F);F-=10;if(26>F)return String.fromCharCode(65+F);F-=26;if(26>F)return String.fromCharCode(97+F);F-=26;return 0==F?"-":1==F?"_":"?"}var D=new XMLHttpRequest;D.open("GET",("txt"==g?PLANT_URL+"/txt/":"png"==g?PLANT_URL+"/png/":
PLANT_URL+"/svg/")+function(F){r="";for(i=0;i<F.length;i+=3)r=i+2==F.length?r+x(F.charCodeAt(i),F.charCodeAt(i+1),0):i+1==F.length?r+x(F.charCodeAt(i),0,0):r+x(F.charCodeAt(i),F.charCodeAt(i+1),F.charCodeAt(i+2));return r}(Graph.arrayBufferToString(pako.deflateRaw(d))),!0);"txt"!=g&&(D.responseType="blob");D.onload=function(F){if(200<=this.status&&300>this.status)if("txt"==g)k(this.response);else{var I=new FileReader;I.readAsDataURL(this.response);I.onloadend=function(G){var U=new Image;U.onload=
function(){try{var q=U.width,v=U.height;if(0==q&&0==v){var E=I.result,K=E.indexOf(","),M=decodeURIComponent(escape(atob(E.substring(K+1)))),H=mxUtils.parseXml(M).getElementsByTagName("svg");0<H.length&&(q=parseFloat(H[0].getAttribute("width")),v=parseFloat(H[0].getAttribute("height")))}k(I.result,q,v)}catch(N){n(N)}};U.src=I.result};I.onerror=function(G){n(G)}}else n(F)};D.onerror=function(F){n(F)};D.send()};EditorUi.prototype.insertAsPreText=function(d,g,k){var n=this.editor.graph,x=null;n.getModel().beginUpdate();