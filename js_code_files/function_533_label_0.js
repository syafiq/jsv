Sidebar.prototype.addSearchPalette=function(a){var b=document.createElement("div");b.style.visibility="hidden";this.container.appendChild(b);var f=document.createElement("div");f.className="geSidebar";f.style.boxSizing="border-box";f.style.overflow="hidden";f.style.width="100%";f.style.padding="8px";f.style.paddingTop="14px";f.style.paddingBottom="0px";a||(f.style.display="none");var e=document.createElement("div");e.style.whiteSpace="nowrap";e.style.textOverflow="clip";e.style.paddingBottom="8px";
e.style.cursor="default";var g=document.createElement("input");g.setAttribute("placeholder",mxResources.get("searchShapes"));g.setAttribute("type","text");g.style.fontSize="12px";g.style.overflow="hidden";g.style.boxSizing="border-box";g.style.border="solid 1px #d5d5d5";g.style.borderRadius="4px";g.style.width="100%";g.style.outline="none";g.style.padding="6px";g.style.paddingRight="20px";e.appendChild(g);var d=document.createElement("img");d.setAttribute("src",Sidebar.prototype.searchImage);d.setAttribute("title",
mxResources.get("search"));d.style.position="relative";d.style.left="-18px";d.style.top="1px";d.style.background="url('"+this.editorUi.editor.transparentImage+"')";e.appendChild(d);f.appendChild(e);var h=document.createElement("center"),n=mxUtils.button(mxResources.get("moreResults"),function(){H()});n.style.display="none";n.style.lineHeight="normal";n.style.fontSize="12px";n.style.padding="6px 12px 6px 12px";n.style.marginTop="4px";n.style.marginBottom="8px";h.style.paddingTop="4px";h.style.paddingBottom=
"4px";h.appendChild(n);f.appendChild(h);var u="",m=!1,r=!1,x=0,B={},C=12,F=mxUtils.bind(this,function(){m=!1;this.currentSearch=null;for(var E=f.firstChild;null!=E;){var N=E.nextSibling;E!=e&&E!=h&&E.parentNode.removeChild(E);E=N}});mxEvent.addListener(d,"click",function(){d.getAttribute("src")==Dialog.prototype.closeImage&&(d.setAttribute("src",Sidebar.prototype.searchImage),d.setAttribute("title",mxResources.get("search")),n.style.display="none",u=g.value="",F());g.focus()});var H=mxUtils.bind(this,
function(){C=4*Math.max(1,Math.floor(this.container.clientWidth/(this.thumbWidth+10)));this.hideTooltip();if(""!=g.value){if(null!=h.parentNode&&(u!=g.value&&(F(),u=g.value,B={},r=!1,x=0),!m&&!r)){n.setAttribute("disabled","true");n.style.display="";n.style.cursor="wait";n.innerHTML=mxResources.get("loading")+"...";m=!0;var E={};this.currentSearch=E;this.searchEntries(u,C,x,mxUtils.bind(this,function(N,Q,S,R){if(this.currentSearch==E){N=null!=N?N:[];m=!1;x++;this.insertSearchHint(f,u,C,x,N,Q,S,R);
0==N.length&&1==x&&(u="");null!=h.parentNode&&h.parentNode.removeChild(h);for(Q=0;Q<N.length;Q++)mxUtils.bind(this,function(ba){try{var T=ba();null==B[T.innerHTML]?(B[T.innerHTML]=null!=ba.parentLibraries?ba.parentLibraries.slice():[],f.appendChild(T)):null!=ba.parentLibraries&&(B[T.innerHTML]=B[T.innerHTML].concat(ba.parentLibraries));mxEvent.addGestureListeners(T,null,null,mxUtils.bind(this,function(P){var Y=B[T.innerHTML];mxEvent.isPopupTrigger(P)&&this.showPopupMenuForEntry(T,Y,P)}));mxEvent.disableContextMenu(T)}catch(P){}})(N[Q]);
S?(n.removeAttribute("disabled"),n.innerHTML=mxResources.get("moreResults")):(n.innerHTML=mxResources.get("reset"),n.style.display="none",r=!0);n.style.cursor="";f.appendChild(h)}}),mxUtils.bind(this,function(){n.style.cursor=""}))}}else F(),u=g.value="",B={},n.style.display="none",r=!1,g.focus()});this.searchShapes=function(E){g.value=E;H()};mxEvent.addListener(g,"keydown",mxUtils.bind(this,function(E){13==E.keyCode&&(H(),mxEvent.consume(E))}));mxEvent.addListener(g,"keyup",mxUtils.bind(this,function(E){""==
g.value?(d.setAttribute("src",Sidebar.prototype.searchImage),d.setAttribute("title",mxResources.get("search"))):(d.setAttribute("src",Dialog.prototype.closeImage),d.setAttribute("title",mxResources.get("reset")));""==g.value?(r=!0,n.style.display="none"):g.value!=u?(n.style.display="none",r=!1):m||(n.style.display=r?"none":"")}));mxEvent.addListener(g,"mousedown",function(E){E.stopPropagation&&E.stopPropagation();E.cancelBubble=!0});mxEvent.addListener(g,"selectstart",function(E){E.stopPropagation&&
E.stopPropagation();E.cancelBubble=!0});a=document.createElement("div");a.appendChild(f);this.container.appendChild(a);this.palettes.search=[b,a]};