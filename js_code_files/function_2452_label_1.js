EditorUi.prototype.extractGraphModelFromHtml=function(b){var e=null;try{var k=b.indexOf("&lt;mxGraphModel ");if(0<=k){var l=b.lastIndexOf("&lt;/mxGraphModel&gt;");l>k&&(e=b.substring(k,l+21).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/\\&quot;/g,'"').replace(/\n/g,""))}}catch(C){}return e};