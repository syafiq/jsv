EditorUi.prototype.showPageLinkDialog=function(b){var f=this.editor.graph;this.showPublishLinkDialog(mxResources.get("url"),!0,null,null,mxUtils.bind(this,function(k,d,u,v,A,F){k=this.createUrlParameters(k,d,u,v,A,F);u||k.push("hide-pages=1");f.isSelectionEmpty()||(u=f.getBoundingBox(f.getSelectionCells()),d=f.view.translate,A=f.view.scale,u.width/=A,u.height/=A,u.x=u.x/A-d.x,u.y=u.y/A-d.y,k.push("viewbox="+encodeURIComponent(JSON.stringify({x:Math.round(u.x),y:Math.round(u.y),width:Math.round(u.width),
height:Math.round(u.height),border:100}))));v=new EmbedDialog(this,this.getLinkForPage(b,k,v));this.showDialog(v.container,450,240,!0,!0);v.init()}))};(function(){var b=EditorUi.prototype.refresh;EditorUi.prototype.refresh=function(){b.apply(this,arguments);this.updateTabContainer()}})();(function(){mxCodecRegistry.getCodec(ChangePageSetup).exclude.push("page")})();