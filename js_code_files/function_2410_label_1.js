function Dialog(a,b,f,e,g,d,h,n,v,m,r){var x=v?57:0,B=f,D=e,F=v?0:64,H=Editor.inlineFullscreen||null==a.embedViewport?mxUtils.getDocumentSize():mxUtils.clone(a.embedViewport);null==a.embedViewport&&null!=window.innerHeight&&(H.height=window.innerHeight);var C=H.height,N=Math.max(1,Math.round((H.width-f-F)/2)),Q=Math.max(1,Math.round((C-e-a.footerHeight)/3));b.style.maxHeight="100%";f=null!=document.body?Math.min(f,document.body.scrollWidth-F):f;e=Math.min(e,C-F);0<a.dialogs.length&&(this.zIndex+=
2*a.dialogs.length);null==this.bg&&(this.bg=a.createDiv("background"),this.bg.style.position="absolute",this.bg.style.background=Dialog.backdropColor,this.bg.style.height=C+"px",this.bg.style.right="0px",this.bg.style.zIndex=this.zIndex-2,mxUtils.setOpacity(this.bg,this.bgOpacity));H=mxUtils.getDocumentScrollOrigin(document);this.bg.style.left=H.x+"px";this.bg.style.top=H.y+"px";N+=H.x;Q+=H.y;Editor.inlineFullscreen||null==a.embedViewport||(this.bg.style.height=mxUtils.getDocumentSize().height+"px",
Q+=a.embedViewport.y,N+=a.embedViewport.x);g&&document.body.appendChild(this.bg);var T=a.createDiv(v?"geTransDialog":"geDialog");g=this.getPosition(N,Q,f,e);N=g.x;Q=g.y;T.style.width=f+"px";T.style.height=e+"px";T.style.left=N+"px";T.style.top=Q+"px";T.style.zIndex=this.zIndex;T.appendChild(b);document.body.appendChild(T);!n&&b.clientHeight>T.clientHeight-F&&(b.style.overflowY="auto");b.style.overflowX="hidden";if(d&&(d=document.createElement("img"),d.setAttribute("src",Dialog.prototype.closeImage),
d.setAttribute("title",mxResources.get("close")),d.className="geDialogClose",d.style.top=Q+14+"px",d.style.left=N+f+38-x+"px",d.style.zIndex=this.zIndex,mxEvent.addListener(d,"click",mxUtils.bind(this,function(){a.hideDialog(!0)})),document.body.appendChild(d),this.dialogImg=d,!r)){var R=!1;mxEvent.addGestureListeners(this.bg,mxUtils.bind(this,function(ba){R=!0}),null,mxUtils.bind(this,function(ba){R&&(a.hideDialog(!0),R=!1)}))}this.resizeListener=mxUtils.bind(this,function(){if(null!=m){var ba=m();
null!=ba&&(B=f=ba.w,D=e=ba.h)}ba=mxUtils.getDocumentSize();C=ba.height;this.bg.style.height=C+"px";Editor.inlineFullscreen||null==a.embedViewport||(this.bg.style.height=mxUtils.getDocumentSize().height+"px");N=Math.max(1,Math.round((ba.width-f-F)/2));Q=Math.max(1,Math.round((C-e-a.footerHeight)/3));f=null!=document.body?Math.min(B,document.body.scrollWidth-F):B;e=Math.min(D,C-F);ba=this.getPosition(N,Q,f,e);N=ba.x;Q=ba.y;T.style.left=N+"px";T.style.top=Q+"px";T.style.width=f+"px";T.style.height=e+
"px";!n&&b.clientHeight>T.clientHeight-F&&(b.style.overflowY="auto");null!=this.dialogImg&&(this.dialogImg.style.top=Q+14+"px",this.dialogImg.style.left=N+f+38-x+"px")});mxEvent.addListener(window,"resize",this.resizeListener);this.onDialogClose=h;this.container=T;a.editor.fireEvent(new mxEventObject("showDialog"))}Dialog.backdropColor="white";Dialog.prototype.zIndex=mxPopupMenu.prototype.zIndex-2;