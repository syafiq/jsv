q.getGlobalVariable=function(M){return"page"==M&&null!=K?K.getName():"pagenumber"==M?1:E.apply(this,arguments)};document.body.appendChild(q.container);null!=K&&q.model.setRoot(K.root)}}D=null!=D?D:this.getXmlFileData(x,u,G,U);I=null!=I?I:this.getCurrentFile();d=this.createFileData(D,q,I,window.location.href,d,g,k,n,x,F,G);q!=this.editor.graph&&q.container.parentNode.removeChild(q.container);return d};EditorUi.prototype.getHtml=function(d,g,k,n,x,u){u=null!=u?u:!0;var D=null,F=EditorUi.drawHost+"/js/embed-static.min.js";