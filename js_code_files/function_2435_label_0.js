EditorUi.prototype.updateTabContainer=function(){if(null!=this.tabContainer&&null!=this.pages){var b=this.editor.graph,e=document.createElement("div");e.style.position="relative";e.style.display="inline-block";e.style.verticalAlign="top";e.style.height=this.tabContainer.style.height;e.style.whiteSpace="nowrap";e.style.overflow="hidden";e.style.fontSize="13px";e.style.marginLeft="30px";for(var f=this.editor.isChromelessView()?29:59,c=Math.min(140,Math.max(20,(this.tabContainer.clientWidth-f)/this.pages.length)+
1),l=null,m=0;m<this.pages.length;m++)mxUtils.bind(this,function(z,A){this.pages[z]==this.currentPage?(A.className="geActivePage",A.style.backgroundColor=Editor.isDarkMode()?Editor.darkColor:"#fff"):A.className="geInactivePage";A.setAttribute("draggable","true");mxEvent.addListener(A,"dragstart",mxUtils.bind(this,function(J){b.isEnabled()?(mxClient.IS_FF&&J.dataTransfer.setData("Text","<diagram/>"),l=z):mxEvent.consume(J)}));mxEvent.addListener(A,"dragend",mxUtils.bind(this,function(J){l=null;J.stopPropagation();
J.preventDefault()}));mxEvent.addListener(A,"dragover",mxUtils.bind(this,function(J){null!=l&&(J.dataTransfer.dropEffect="move");J.stopPropagation();J.preventDefault()}));mxEvent.addListener(A,"drop",mxUtils.bind(this,function(J){null!=l&&z!=l&&this.movePage(l,z);J.stopPropagation();J.preventDefault()}));e.appendChild(A)})(m,this.createTabForPage(this.pages[m],c,this.pages[m]!=this.currentPage,m+1));this.tabContainer.innerText="";this.tabContainer.appendChild(e);c=this.createPageMenuTab();this.tabContainer.appendChild(c);
c=null;this.isPageInsertTabVisible()&&(c=this.createPageInsertTab(),this.tabContainer.appendChild(c));if(e.clientWidth>this.tabContainer.clientWidth-f){null!=c&&(c.style.position="absolute",c.style.right="0px",e.style.marginRight="30px");var t=this.createControlTab(4,"&nbsp;&#10094;&nbsp;");t.style.position="absolute";t.style.right=this.editor.chromeless?"29px":"55px";t.style.fontSize="13pt";this.tabContainer.appendChild(t);var y=this.createControlTab(4,"&nbsp;&#10095;");y.style.position="absolute";
y.style.right=this.editor.chromeless?"0px":"29px";y.style.fontSize="13pt";this.tabContainer.appendChild(y);var C=Math.max(0,this.tabContainer.clientWidth-(this.editor.chromeless?86:116));e.style.width=C+"px";mxEvent.addListener(t,"click",mxUtils.bind(this,function(z){e.scrollLeft-=Math.max(20,C-20);mxUtils.setOpacity(t,0<e.scrollLeft?100:50);mxUtils.setOpacity(y,e.scrollLeft<e.scrollWidth-e.clientWidth?100:50);mxEvent.consume(z)}));mxUtils.setOpacity(t,0<e.scrollLeft?100:50);mxUtils.setOpacity(y,
e.scrollLeft<e.scrollWidth-e.clientWidth?100:50);mxEvent.addListener(y,"click",mxUtils.bind(this,function(z){e.scrollLeft+=Math.max(20,C-20);mxUtils.setOpacity(t,0<e.scrollLeft?100:50);mxUtils.setOpacity(y,e.scrollLeft<e.scrollWidth-e.clientWidth?100:50);mxEvent.consume(z)}))}}};EditorUi.prototype.isPageInsertTabVisible=function(){return 1==urlParams.embed||null!=this.getCurrentFile()&&this.getCurrentFile().isEditable()};