I)+d.substring(d.indexOf(",",I+1))),G&&g.isGridEnabled()&&(k=g.snap(k),n=g.snap(n)),E=[g.insertVertex(null,null,"",k,n,x,u,"shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image="+d+";")])):/(\.*<graphml )/.test(d)?(v=!0,this.importGraphML(d,K)):null!=I&&null!=D&&(/(\.v(dx|sdx?))($|\?)/i.test(D)||/(\.vs(x|sx?))($|\?)/i.test(D))?(v=!0,this.importVisio(I,K)):(new XMLHttpRequest).upload&&this.isRemoteFileFormat(d,D)?this.isOffline()?
this.showError(mxResources.get("error"),mxResources.get("notInOffline")):(v=!0,x=mxUtils.bind(this,function(M){4==M.readyState&&(200<=M.status&&299>=M.status?K(M.responseText):null!=F&&(F(null),this.showError(mxResources.get("error"),413==M.status?mxResources.get("diagramTooLarge"):mxResources.get("unknownError"))))}),null!=d?this.parseFileData(d,x,D):this.parseFile(I,x,D)):0==d.indexOf("PK")&&null!=I?(v=!0,this.importZipFile(I,K,mxUtils.bind(this,function(){E=this.insertTextAt(this.validateFileData(d),
k,n,!0,null,G);F(E)}))):/(\.v(sd|dx))($|\?)/i.test(D)||/(\.vs(s|x))($|\?)/i.test(D)||(E=this.insertTextAt(this.validateFileData(d),k,n,!0,null,G,null,null!=q?mxEvent.isControlDown(q):null));v||null==F||F(E);return E};EditorUi.prototype.importFiles=function(d,g,k,n,x,u,D,F,I,G,U,q,v){n=null!=n?n:this.maxImageSize;G=null!=G?G:this.maxImageBytes;var E=null!=g&&null!=k,K=!0;g=null!=g?g:0;k=null!=k?k:0;var M=!1;if(!mxClient.IS_CHROMEAPP&&null!=d)for(var H=U||this.resampleThreshold,N=0;N<d.length;N++)if("image/svg"!==