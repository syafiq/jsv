N=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight,S=parseInt(this.div.style.width),F=parseInt(this.div.style.height);B=Math.max(0,Math.min(B,D-S));q=Math.max(0,Math.min(q,N-F));this.getX()==B&&this.getY()==q||mxWindow.prototype.setLocation.apply(this,arguments);e&&!this.minimized&&this.setSize(S,F)};var l=mxUtils.bind(this,function(){var B=b.window.getX(),q=b.window.getY();b.window.setLocation(B,q)});mxEvent.addListener(window,"resize",l);b.destroy=function(){mxEvent.removeListener(window,
"resize",l);b.window.destroy();null!=k&&k()}};function ChangeGridColor(b,e){this.ui=b;this.color=e}ChangeGridColor.prototype.execute=function(){var b=this.ui.editor.graph.view.gridColor;this.ui.setGridColor(this.color);this.color=b};(function(){var b=new mxObjectCodec(new ChangeGridColor,["ui"]);mxCodecRegistry.register(b)})();