"click",N);var Y=mxUtils.bind(this,function(){X.innerText="";mxUtils.write(X,Math.round(100*u.editor.graph.view.scale)+"%")});u.editor.graph.view.addListener(mxEvent.EVENT_SCALE,Y);u.editor.addListener("resetGraphView",Y);u.editor.addListener("pageSelected",Y)})(R);var T=u.setGraphEnabled;u.setGraphEnabled=function(){T.apply(this,arguments);null!=this.tabContainer&&(R.style.visibility=this.tabContainer.style.visibility,this.diagramContainer.style.bottom="hidden"!=this.tabContainer.style.visibility?
this.tabContainerHeight+"px":"0px")}}v.appendChild(F);v.appendChild(u.diagramContainer);x.appendChild(v);u.updateTabContainer();!EditorUi.windowed&&1E3<=c&&b(this,!0);v.appendChild(u.tabContainer);var W=null;n();mxEvent.addListener(window,"resize",function(){n();null!=u.sidebarWindow&&u.sidebarWindow.window.fit();null!=u.formatWindow&&u.formatWindow.window.fit();null!=u.actions.outlineWindow&&u.actions.outlineWindow.window.fit();null!=u.actions.layersWindow&&u.actions.layersWindow.window.fit();null!=