mxClient.IS_FF||5<=document.documentMode?x.select():document.execCommand("selectAll",!1,null)):K.focus()};EditorUi.prototype.showRemoteExportDialog=function(e,g,k,n,u){var v=document.createElement("div");v.style.whiteSpace="nowrap";var E=document.createElement("h3");mxUtils.write(E,mxResources.get("image"));E.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:"+(u?"10":"4")+"px";v.appendChild(E);if(u){mxUtils.write(v,mxResources.get("zoom")+":");var C=document.createElement("input");
C.setAttribute("type","text");C.style.marginRight="16px";C.style.width="60px";C.style.marginLeft="4px";C.style.marginRight="12px";C.value=this.lastExportZoom||"100%";v.appendChild(C);mxUtils.write(v,mxResources.get("borderWidth")+":");var H=document.createElement("input");H.setAttribute("type","text");H.style.marginRight="16px";H.style.width="60px";H.style.marginLeft="4px";H.value=this.lastExportBorder||"0";v.appendChild(H);mxUtils.br(v)}var F=this.addCheckbox(v,mxResources.get("selectionOnly"),!1,
this.editor.graph.isSelectionEmpty()),T=n?null:this.addCheckbox(v,mxResources.get("includeCopyOfMyDiagram"),Editor.defaultIncludeDiagram);E=this.editor.graph;var p=n?null:this.addCheckbox(v,mxResources.get("transparentBackground"),E.background==mxConstants.NONE||null==E.background);null!=p&&(p.style.marginBottom="16px");e=new CustomDialog(this,v,mxUtils.bind(this,function(){var x=parseInt(C.value)/100||1,G=parseInt(H.value)||0;k(!F.checked,null!=T?T.checked:!1,null!=p?p.checked:!1,x,G)}),null,e,g);
this.showDialog(e.container,300,(u?25:0)+(n?125:210),!0,!0)};EditorUi.prototype.showExportDialog=function(e,g,k,n,u,v,E,C,H){E=null!=E?E:Editor.defaultIncludeDiagram;var F=document.createElement("div");F.style.whiteSpace="nowrap";var T=this.editor.graph,p="jpeg"==C?220:300,x=document.createElement("h3");mxUtils.write(x,e);x.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:10px";F.appendChild(x);mxUtils.write(F,mxResources.get("zoom")+":");var G=document.createElement("input");