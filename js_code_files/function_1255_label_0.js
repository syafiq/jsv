l.refresh=function(){};var B=mxUtils.bind(this,function(R){27==R.keyCode&&l.destroy()}),q=this.initialOverflow,D=l.destroy;l.destroy=function(){mxEvent.removeListener(document.documentElement,"keydown",B);document.body.removeChild(b);document.body.removeChild(e);document.body.style.overflow=q;GraphViewer.resizeSensorEnabled=!0;D.apply(this,arguments)};var N=l.editor.graph,S=N.container;S.style.overflow="hidden";this.lightboxChrome?(S.style.border="1px solid #c0c0c0",S.style.margin="40px",mxEvent.addListener(document.documentElement,