G)+c.substring(c.indexOf(",",G+1))),C&&e.isGridEnabled()&&(g=e.snap(g),n=e.snap(n)),z=[e.insertVertex(null,null,"",g,n,q,p,"shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image="+c+";")])):/(\.*<graphml )/.test(c)?(t=!0,this.importGraphML(c,H)):null!=G&&null!=y&&(/(\.v(dx|sdx?))($|\?)/i.test(y)||/(\.vs(x|sx?))($|\?)/i.test(y))?(t=!0,this.importVisio(G,H)):(new XMLHttpRequest).upload&&this.isRemoteFileFormat(c,y)?this.isOffline()?
this.showError(mxResources.get("error"),mxResources.get("notInOffline")):(t=!0,q=mxUtils.bind(this,function(L){4==L.readyState&&(200<=L.status&&299>=L.status?H(L.responseText):null!=B&&(B(null),this.showError(mxResources.get("error"),413==L.status?mxResources.get("diagramTooLarge"):mxResources.get("unknownError"))))}),null!=c?this.parseFileData(c,q,y):this.parseFile(G,q,y)):0==c.indexOf("PK")&&null!=G?(t=!0,this.importZipFile(G,H,mxUtils.bind(this,function(){z=this.insertTextAt(this.validateFileData(c),
g,n,!0,null,C);B(z)}))):/(\.v(sd|dx))($|\?)/i.test(y)||/(\.vs(s|x))($|\?)/i.test(y)||(z=this.insertTextAt(this.validateFileData(c),g,n,!0,null,C,null,null!=m?mxEvent.isControlDown(m):null));t||null==B||B(z);return z};EditorUi.prototype.importFiles=function(c,e,g,n,q,p,y,B,G,C,U,m,t){n=null!=n?n:this.maxImageSize;C=null!=C?C:this.maxImageBytes;var z=null!=e&&null!=g,H=!0;e=null!=e?e:0;g=null!=g?g:0;var L=!1;if(!mxClient.IS_CHROMEAPP&&null!=c)for(var E=U||this.resampleThreshold,M=0;M<c.length;M++)if("image/svg"!==