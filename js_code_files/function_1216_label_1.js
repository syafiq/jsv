19)||mxClient.IS_CHROMEAPP||(U=D.apply(this,arguments)):U=PROXY_URL+"?url="+encodeURIComponent(U)}return U};return q};Editor.createSvgDataUri=function(q){return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(q)))};Editor.prototype.convertImageToDataUri=function(q,D){try{var L=!0,U=window.setTimeout(mxUtils.bind(this,function(){L=!1;D(Editor.svgBrokenImage.src)}),this.timeout);if(/(\.svg)$/i.test(q))mxUtils.get(q,mxUtils.bind(this,function(S){window.clearTimeout(U);L&&D(Editor.createSvgDataUri(S.getText()))}),