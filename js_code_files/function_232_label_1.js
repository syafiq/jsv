1<this.defaultColorSchemes.length&&(q.appendChild(Y),q.appendChild(da));mxEvent.addListener(da,"click",mxUtils.bind(this,function(){aa(mxUtils.mod(this.format.currentScheme+1,this.defaultColorSchemes.length))}));D(Y);D(da);ca(this.defaultColorSchemes[this.format.currentScheme]);10>=this.defaultColorSchemes.length&&q.appendChild(R);return q};StyleFormatPanel.prototype.addEditOps=function(q){var D=this.editorUi.getSelectionState(),L=this.editorUi.editor.graph,U=null;1==D.cells.length&&(U=mxUtils.button(mxResources.get("editStyle"),
mxUtils.bind(this,function(O){this.editorUi.actions.get("editStyle").funct()})),U.setAttribute("title",mxResources.get("editStyle")+" ("+this.editorUi.actions.get("editStyle").shortcut+")"),U.style.width="210px",U.style.marginBottom="2px",q.appendChild(U));L=1==D.cells.length?L.view.getState(D.cells[0]):null;null!=L&&null!=L.shape&&null!=L.shape.stencil?(D=mxUtils.button(mxResources.get("editShape"),mxUtils.bind(this,function(O){this.editorUi.actions.get("editShape").funct()})),D.setAttribute("title",
mxResources.get("editShape")),D.style.marginBottom="2px",null==U?D.style.width="210px":(U.style.width="104px",D.style.width="104px",D.style.marginLeft="2px"),q.appendChild(D)):D.image&&0<D.cells.length&&(D=mxUtils.button(mxResources.get("editImage"),mxUtils.bind(this,function(O){this.editorUi.actions.get("image").funct()})),D.setAttribute("title",mxResources.get("editImage")),D.style.marginBottom="2px",null==U?D.style.width="210px":(U.style.width="104px",D.style.width="104px",D.style.marginLeft="2px"),
q.appendChild(D));return q}}Graph.fontMapping={"https://fonts.googleapis.com/css?family=Architects+Daughter":'@font-face { font-family: "Architects Daughter"; src: url('+STYLE_PATH+'/fonts/ArchitectsDaughter-Regular.ttf) format("truetype"); }'};Graph.customFontElements={};Graph.recentCustomFonts={};Graph.isGoogleFontUrl=function(q){return q.substring(0,Editor.GOOGLE_FONTS.length)==Editor.GOOGLE_FONTS};Graph.isCssFontUrl=function(q){return Graph.isGoogleFontUrl(q)};Graph.createFontElement=function(q,