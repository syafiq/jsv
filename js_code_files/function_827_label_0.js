EditorUi.prototype.updateTabContainer=function(){if(null!=this.tabContainer&&null!=this.pages){var b=this.editor.graph,e=document.createElement("div");e.style.position="relative";e.style.display="inline-block";e.style.verticalAlign="top";e.style.height=this.tabContainer.style.height;e.style.whiteSpace="nowrap";e.style.overflow="hidden";e.style.fontSize="13px";e.style.marginLeft="30px";for(var k=this.editor.isChromelessView()?29:59,l=Math.min(140,Math.max(20,(this.tabContainer.clientWidth-k)/this.pages.length)+
1),B=null,q=0;q<this.pages.length;q++)mxUtils.bind(this,function(F,K){this.pages[F]==this.currentPage?(K.className="geActivePage",K.style.backgroundColor=Editor.isDarkMode()?Editor.darkColor:"#fff"):K.className="geInactivePage";K.setAttribute("draggable","true");mxEvent.addListener(K,"dragstart",mxUtils.bind(this,function(R){b.isEnabled()?(mxClient.IS_FF&&R.dataTransfer.setData("Text","<diagram/>"),B=F):mxEvent.consume(R)}));mxEvent.addListener(K,"dragend",mxUtils.bind(this,function(R){B=null;R.stopPropagation();
R.preventDefault()}));mxEvent.addListener(K,"dragover",mxUtils.bind(this,function(R){null!=B&&(R.dataTransfer.dropEffect="move");R.stopPropagation();R.preventDefault()}));mxEvent.addListener(K,"drop",mxUtils.bind(this,function(R){null!=B&&F!=B&&this.movePage(B,F);R.stopPropagation();R.preventDefault()}));e.appendChild(K)})(q,this.createTabForPage(this.pages[q],l,this.pages[q]!=this.currentPage,q+1));this.tabContainer.innerText="";this.tabContainer.appendChild(e);l=this.createPageMenuTab();this.tabContainer.appendChild(l);
l=null;this.isPageInsertTabVisible()&&(l=this.createPageInsertTab(),this.tabContainer.appendChild(l));if(e.clientWidth>this.tabContainer.clientWidth-k){null!=l&&(l.style.position="absolute",l.style.right="0px",e.style.marginRight="30px");var D=this.createControlTab(4,"&nbsp;&#10094;&nbsp;");D.style.position="absolute";D.style.right=this.editor.chromeless?"29px":"55px";D.style.fontSize="13pt";this.tabContainer.appendChild(D);var N=this.createControlTab(4,"&nbsp;&#10095;");N.style.position="absolute";
N.style.right=this.editor.chromeless?"0px":"29px";N.style.fontSize="13pt";this.tabContainer.appendChild(N);var S=Math.max(0,this.tabContainer.clientWidth-(this.editor.chromeless?86:116));e.style.width=S+"px";mxEvent.addListener(D,"click",mxUtils.bind(this,function(F){e.scrollLeft-=Math.max(20,S-20);mxUtils.setOpacity(D,0<e.scrollLeft?100:50);mxUtils.setOpacity(N,e.scrollLeft<e.scrollWidth-e.clientWidth?100:50);mxEvent.consume(F)}));mxUtils.setOpacity(D,0<e.scrollLeft?100:50);mxUtils.setOpacity(N,
e.scrollLeft<e.scrollWidth-e.clientWidth?100:50);mxEvent.addListener(N,"click",mxUtils.bind(this,function(F){e.scrollLeft+=Math.max(20,S-20);mxUtils.setOpacity(D,0<e.scrollLeft?100:50);mxUtils.setOpacity(N,e.scrollLeft<e.scrollWidth-e.clientWidth?100:50);mxEvent.consume(F)}))}}};EditorUi.prototype.isPageInsertTabVisible=function(){return 1==urlParams.embed||null!=this.getCurrentFile()&&this.getCurrentFile().isEditable()};