Editor.createMinimalCss());Editor.isDarkMode()?null==S.parentNode&&document.getElementsByTagName("head")[0].appendChild(S):null!=S.parentNode&&S.parentNode.removeChild(S)}};EditorUi.prototype.setPagesVisible=function(d){Editor.pagesVisible!=d&&(Editor.pagesVisible=d,mxSettings.settings.pagesVisible=d,mxSettings.save(),this.fireEvent(new mxEventObject("pagesVisibleChanged")))};EditorUi.prototype.setSidebarTitles=function(d,f){this.sidebar.sidebarTitles!=d&&(this.sidebar.sidebarTitles=d,this.sidebar.refresh(),