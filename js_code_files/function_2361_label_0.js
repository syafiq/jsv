arguments)):Q=PROXY_URL+"?url="+encodeURIComponent(Q)}return Q};return p};Editor.createSvgDataUri=function(p){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(p)))};Editor.prototype.convertImageToDataUri=function(p,B){try{var L=!0,Q=window.setTimeout(mxUtils.bind(this,function(){L=!1;B(Editor.svgBrokenImage.src)}),this.timeout);if(/(\.svg)$/i.test(p))mxUtils.get(p,mxUtils.bind(this,function(R){window.clearTimeout(Q);L&&B(Editor.createSvgDataUri(R.getText()))}),function(){window.clearTimeout(Q);
L&&B(Editor.svgBrokenImage.src)});else{var S=new Image;this.crossOriginImages&&(S.crossOrigin="anonymous");S.onload=function(){window.clearTimeout(Q);if(L)try{var R=document.createElement("canvas"),T=R.getContext("2d");R.height=S.height;R.width=S.width;T.drawImage(S,0,0);B(R.toDataURL())}catch(W){B(Editor.svgBrokenImage.src)}};S.onerror=function(){window.clearTimeout(Q);L&&B(Editor.svgBrokenImage.src)};S.src=p}}catch(R){B(Editor.svgBrokenImage.src)}};Editor.prototype.convertImages=function(p,B,L,