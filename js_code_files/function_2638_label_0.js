if(f.isEnabled()){var e=null;if(this.showBackgroundImageOption){e=this.createOption(mxResources.get("background"),function(){return f.background!=mxConstants.NONE&&null!=f.background||null!=f.backgroundImage},function(d){d?f.model.execute(new ChangePageSetup(b,"#ffffff")):f.model.execute(new ChangePageSetup(b))},{install:function(d){this.listener=function(){d(f.background!=mxConstants.NONE&&null!=f.background||null!=f.backgroundImage)};b.addListener("backgroundColorChanged",this.listener);b.addListener("backgroundImageChanged",
this.listener)},destroy:function(){b.removeListener(this.listener)}});var g=e.getElementsByTagName("span")[0];g.style.display="inline-block";g.style.textOverflow="ellipsis";g.style.overflow="hidden";g.style.maxWidth="68px";mxClient.IS_FF&&(g.style.marginTop="1px");g=mxUtils.button(mxResources.get("change")+"...",function(d){b.showBackgroundImageDialog(null,b.editor.graph.backgroundImage,b.editor.graph.background);mxEvent.consume(d)});g.style.position="absolute";g.style.marginTop="-4px";g.style.height=