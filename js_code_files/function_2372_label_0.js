H.push("highlight="+("#"==f.charAt(0)?f.substring(1):f)),null!=x&&0<x.length&&H.push("edit="+encodeURIComponent(x)),A&&H.push("layers=1"),this.editor.graph.foldingEnabled&&H.push("nav=1"));g&&null!=this.currentPage&&null!=this.pages&&this.currentPage!=this.pages[0]&&H.push("page-id="+this.currentPage.getId());return H};EditorUi.prototype.createLink=function(d,f,g,u,x,A,H,P,M,G){M=this.createUrlParameters(d,f,g,u,x,A,M);d=this.getCurrentFile();f=!0;null!=H?g="#U"+encodeURIComponent(H):(d=this.getCurrentFile(),
P||null==d||d.constructor!=window.DriveFile?g="#R"+encodeURIComponent(g?this.getFileData(!0,null,null,null,null,null,null,!0,null,!1):Graph.compress(mxUtils.getXml(this.editor.getGraphXml()))):(g="#"+d.getHash(),f=!1));f&&null!=d&&null!=d.getTitle()&&d.getTitle()!=this.defaultFilename&&M.push("title="+encodeURIComponent(d.getTitle()));G&&1<g.length&&(M.push("open="+g.substring(1)),g="");return(u&&"1"!=urlParams.dev?EditorUi.lightboxHost:mxClient.IS_CHROMEAPP||EditorUi.isElectronApp||!/.*\.draw\.io$/.test(window.location.hostname)?
EditorUi.drawHost:"https://"+window.location.host)+"/"+(0<M.length?"?"+M.join("&"):"")+g};EditorUi.prototype.createHtml=function(d,f,g,u,x,A,H,P,M,G,ia,ja){this.getBasenames();var ha={};""!=x&&x!=mxConstants.NONE&&(ha.highlight=x);"auto"!==u&&(ha.target=u);G||(ha.lightbox=!1);ha.nav=this.editor.graph.foldingEnabled;g=parseInt(g);isNaN(g)||100==g||(ha.zoom=g/100);g=[];H&&(g.push("pages"),ha.resize=!0,null!=this.pages&&null!=this.currentPage&&(ha.page=mxUtils.indexOf(this.pages,this.currentPage)));