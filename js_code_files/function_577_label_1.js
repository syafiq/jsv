EditorUi.prototype.isChromelessImageExportEnabled=function(){return"draw.io"!=this.getServiceName()||/.*\.draw\.io$/.test(window.location.hostname)||/.*\.diagrams\.net$/.test(window.location.hostname)};EditorUi.prototype.addChromelessToolbarItems=function(d){if(null!=urlParams.tags){this.tagsDialog=this.tagsComponent=null;var f=d(mxUtils.bind(this,function(v){null==this.tagsComponent&&(this.tagsComponent=this.editor.graph.createTagsDialog(mxUtils.bind(this,function(){return null!=this.tagsDialog}),
!0),this.tagsComponent.div.getElementsByTagName("div")[0].style.position="",mxUtils.setPrefixedStyle(this.tagsComponent.div.style,"borderRadius","5px"),this.tagsComponent.div.className="geScrollable",this.tagsComponent.div.style.maxHeight="160px",this.tagsComponent.div.style.maxWidth="120px",this.tagsComponent.div.style.padding="4px",this.tagsComponent.div.style.overflow="auto",this.tagsComponent.div.style.height="auto",this.tagsComponent.div.style.position="fixed",this.tagsComponent.div.style.fontFamily=
Editor.defaultHtmlFont,mxClient.IS_IE||mxClient.IS_IE11?(this.tagsComponent.div.style.backgroundColor="#ffffff",this.tagsComponent.div.style.border="2px solid black",this.tagsComponent.div.style.color="#000000"):(this.tagsComponent.div.style.backgroundColor="#000000",this.tagsComponent.div.style.color="#ffffff",mxUtils.setOpacity(this.tagsComponent.div,80)));if(null!=this.tagsDialog)this.tagsDialog.parentNode.removeChild(this.tagsDialog),this.tagsDialog=null;else{this.tagsDialog=this.tagsComponent.div;
mxEvent.addListener(this.tagsDialog,"mouseleave",mxUtils.bind(this,function(){null!=this.tagsDialog&&(this.tagsDialog.parentNode.removeChild(this.tagsDialog),this.tagsDialog=null)}));var x=f.getBoundingClientRect();this.tagsDialog.style.left=x.left+"px";this.tagsDialog.style.bottom=parseInt(this.chromelessToolbar.style.bottom)+this.chromelessToolbar.offsetHeight+4+"px";x=mxUtils.getCurrentStyle(this.editor.graph.container);this.tagsDialog.style.zIndex=x.zIndex;document.body.appendChild(this.tagsDialog);
this.tagsComponent.refresh();this.editor.fireEvent(new mxEventObject("tagsDialogShown"))}mxEvent.consume(v)}),Editor.tagsImage,mxResources.get("tags"));this.editor.graph.getModel().addListener(mxEvent.CHANGE,mxUtils.bind(this,function(){var v=this.editor.graph.getAllTags();f.style.display=0<v.length?"":"none"}))}l.apply(this,arguments);this.editor.addListener("tagsDialogShown",mxUtils.bind(this,function(){null!=this.layersDialog&&(this.layersDialog.parentNode.removeChild(this.layersDialog),this.layersDialog=
null)}));this.editor.addListener("layersDialogShown",mxUtils.bind(this,function(){null!=this.tagsDialog&&(this.tagsDialog.parentNode.removeChild(this.tagsDialog),this.tagsDialog=null)}));this.editor.addListener("pageSelected",mxUtils.bind(this,function(){null!=this.tagsDialog&&(this.tagsDialog.parentNode.removeChild(this.tagsDialog),this.tagsDialog=null);null!=this.layersDialog&&(this.layersDialog.parentNode.removeChild(this.layersDialog),this.layersDialog=null)}));mxEvent.addListener(this.editor.graph.container,
"click",mxUtils.bind(this,function(){null!=this.tagsDialog&&(this.tagsDialog.parentNode.removeChild(this.tagsDialog),this.tagsDialog=null);null!=this.layersDialog&&(this.layersDialog.parentNode.removeChild(this.layersDialog),this.layersDialog=null)}));if(this.isExportToCanvas()&&this.isChromelessImageExportEnabled()){this.exportDialog=null;var g=d(mxUtils.bind(this,function(v){var x=mxUtils.bind(this,function(){mxEvent.removeListener(this.editor.graph.container,"click",x);null!=this.exportDialog&&
(this.exportDialog.parentNode.removeChild(this.exportDialog),this.exportDialog=null)});if(null!=this.exportDialog)x.apply(this);else{this.exportDialog=document.createElement("div");var A=g.getBoundingClientRect();mxUtils.setPrefixedStyle(this.exportDialog.style,"borderRadius","5px");this.exportDialog.style.position="fixed";this.exportDialog.style.textAlign="center";this.exportDialog.style.fontFamily=Editor.defaultHtmlFont;this.exportDialog.style.backgroundColor="#000000";this.exportDialog.style.width=
"50px";this.exportDialog.style.height="50px";this.exportDialog.style.padding="4px 2px 4px 2px";this.exportDialog.style.color="#ffffff";mxUtils.setOpacity(this.exportDialog,70);this.exportDialog.style.left=A.left+"px";this.exportDialog.style.bottom=parseInt(this.chromelessToolbar.style.bottom)+this.chromelessToolbar.offsetHeight+4+"px";A=mxUtils.getCurrentStyle(this.editor.graph.container);this.exportDialog.style.zIndex=A.zIndex;var J=new Spinner({lines:8,length:6,width:5,radius:6,rotate:0,color:"#fff",
speed:1.5,trail:60,shadow:!1,hwaccel:!1,top:"28px",zIndex:2E9});J.spin(this.exportDialog);this.editor.exportToCanvas(mxUtils.bind(this,function(H){J.stop();this.exportDialog.style.width="auto";this.exportDialog.style.height="auto";this.exportDialog.style.padding="10px";var O=this.createImageDataUri(H,null,"png");H=document.createElement("img");H.style.maxWidth="140px";H.style.maxHeight="140px";H.style.cursor="pointer";H.style.backgroundColor="white";H.setAttribute("title",mxResources.get("openInNewWindow"));
H.setAttribute("border","0");H.setAttribute("src",O);this.exportDialog.appendChild(H);mxEvent.addListener(H,"click",mxUtils.bind(this,function(){this.openInNewWindow(O.substring(O.indexOf(",")+1),"image/png",!0);x.apply(this,arguments)}))}),null,this.thumbImageCache,null,mxUtils.bind(this,function(H){this.spinner.stop();this.handleError(H)}),null,null,null,null,null,null,null,Editor.defaultBorder);mxEvent.addListener(this.editor.graph.container,"click",x);document.body.appendChild(this.exportDialog)}mxEvent.consume(v)}),
Editor.cameraImage,mxResources.get("export"))}};EditorUi.prototype.saveData=function(d,f,g,v,x){this.isLocalFileSave()?this.saveLocalFile(g,d,v,x,f):this.saveRequest(d,f,mxUtils.bind(this,function(A,J){return this.createEchoRequest(g,A,v,x,f,J)}),g,x,v)};EditorUi.prototype.saveRequest=function(d,f,g,v,x,A,J){J=null!=J?J:!mxClient.IS_IOS||!navigator.standalone;var H=this.getServiceCount(!1);isLocalStorage&&H++;var O=4>=H?2:6<H?4:3;d=new CreateDialog(this,d,mxUtils.bind(this,function(F,ea){if("_blank"==