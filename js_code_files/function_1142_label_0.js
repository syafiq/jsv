"\n"+Graph.svgDoctype+"\n"+mxUtils.getXml(Q))})))}else E=v+".svg",V=this.getFileData(!1,!0,null,mxUtils.bind(this,function(Q){this.spinner.stop();p(Q)}),n)}}catch(Q){this.handleError(Q)}};EditorUi.prototype.createDownloadRequest=function(d,g,k,n,x,u,D,F,I,G,U,q,v){d=this.downloadRequestBuilder(d,g,k,n,x,u,D,F,I,G,U,q,v);g="";for(var E in d)k=d[E],null!=k&&(g+=E+"="+encodeURIComponent(k)+"&");return new mxXmlRequest(EXPORT_URL,g)};EditorUi.prototype.downloadRequestBuilder=function(d,g,k,n,x,u,D,F,