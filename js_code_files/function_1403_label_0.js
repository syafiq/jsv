P);P-=26;return 0==P?"-":1==P?"_":"?"}var H=new XMLHttpRequest;H.open("GET",("txt"==f?PLANT_URL+"/txt/":"png"==f?PLANT_URL+"/png/":PLANT_URL+"/svg/")+function(P){r="";for(i=0;i<P.length;i+=3)r=i+2==P.length?r+x(P.charCodeAt(i),P.charCodeAt(i+1),0):i+1==P.length?r+x(P.charCodeAt(i),0,0):r+x(P.charCodeAt(i),P.charCodeAt(i+1),P.charCodeAt(i+2));return r}(Graph.arrayBufferToString(pako.deflateRaw(d))),!0);"txt"!=f&&(H.responseType="blob");H.onload=function(P){if(200<=this.status&&300>this.status)if("txt"==
f)g(this.response);else{var M=new FileReader;M.readAsDataURL(this.response);M.onloadend=function(G){var ia=new Image;ia.onload=function(){try{var ja=ia.width,ha=ia.height;if(0==ja&&0==ha){var ba=M.result,oa=ba.indexOf(","),sa=decodeURIComponent(escape(atob(ba.substring(oa+1)))),J=mxUtils.parseXml(sa).getElementsByTagName("svg");0<J.length&&(ja=parseFloat(J[0].getAttribute("width")),ha=parseFloat(J[0].getAttribute("height")))}g(M.result,ja,ha)}catch(V){u(V)}};ia.src=M.result};M.onerror=function(G){u(G)}}else u(P)};