t.freehand.stopDrawing()}));b.installResizeHandler(this,!1)},TagsWindow=function(b,d,f,c,l){var m=b.editor.graph,t=b.editor.graph.createTagsDialog(mxUtils.bind(this,function(){return this.window.isVisible()}),null,function(B,z){if(m.isEnabled()){var A=new FilenameDialog(b,"",mxResources.get("add"),function(J){b.hideDialog();if(null!=J&&0<J.length){J=J.split(" ");for(var e=[],g=0;g<J.length;g++){var k=mxUtils.trim(J[g]);""!=k&&0>mxUtils.indexOf(B,k)&&e.push(k)}0<e.length&&(m.isSelectionEmpty()?z(B.concat(e)):
m.addTagsForCells(m.getSelectionCells(),e))}},mxResources.get("enterValue")+" ("+mxResources.get("tags")+")");b.showDialog(A.container,300,80,!0,!0);A.init()}}),y=t.div;this.window=new mxWindow(mxResources.get("tags"),y,d,f,c,l,!0,!0);this.window.minimumSize=new mxRectangle(0,0,212,120);this.window.destroyOnClose=!1;this.window.setMaximizable(!1);this.window.setResizable(!0);this.window.setClosable(!0);this.window.addListener("show",mxUtils.bind(this,function(){t.refresh();this.window.fit()}));b.installResizeHandler(this,
!0)},AuthDialog=function(b,d,f,c){var l=document.createElement("div");l.style.textAlign="center";var m=document.createElement("p");m.style.fontSize="16pt";m.style.padding="0px";m.style.margin="0px";m.style.color="gray";mxUtils.write(m,mxResources.get("authorizationRequired"));var t="Unknown",y=document.createElement("img");y.setAttribute("border","0");y.setAttribute("align","absmiddle");y.style.marginRight="10px";d==b.drive?(t=mxResources.get("googleDrive"),y.src=IMAGE_PATH+"/google-drive-logo-white.svg"):