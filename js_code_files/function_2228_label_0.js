null!=X?encodeURIComponent(X):null),B.setCellStyles("FType",null)):(B.setCellStyles(mxConstants.STYLE_FONTFAMILY,W),"s"!=Y&&(B.setCellStyles("FType",Y),0==X.indexOf("http://")&&(X=PROXY_URL+"?url="+encodeURIComponent(X)),this.editorUi.editor.graph.addExtFont(W,X)));Y=!0;for(var Z=0;Z<this.customFonts.length;Z++)if(this.customFonts[Z].name==W){Y=!1;break}Y&&(this.customFonts.push({name:W,url:X}),this.editorUi.fireEvent(new mxEventObject("customFontsChanged","customFonts",this.customFonts)))}finally{B.getModel().endUpdate()}}}));
this.editorUi.showDialog(Q.container,380,Editor.enableWebFonts?250:180,!0,!0);Q.init()}),v,null,!0)})))}})();function DiagramPage(b,e){this.node=b;null!=e?this.node.setAttribute("id",e):null==this.getId()&&this.node.setAttribute("id",Editor.guid())}DiagramPage.prototype.node=null;DiagramPage.prototype.root=null;DiagramPage.prototype.viewState=null;DiagramPage.prototype.getId=function(){return this.node.getAttribute("id")};DiagramPage.prototype.getName=function(){return this.node.getAttribute("name")};