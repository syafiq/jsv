Editor.currentTheme&&(this.statusContainer.style.display="inline-block",this.statusContainer.style.display=0==this.statusContainer.clientWidth?"none":"inline-block")});this.editor.addListener("statusChanged",g);g()};EditorUi.prototype.switchTheme=function(d){"default"==d&&(null!=this.formatContainer&&(this.formatContainer.style.left="",this.formatContainer.style.zIndex="1",this.formatContainer.style.border="",null!=this.footerContainer&&this.footerContainer.parentNode!=this.formatContainer.parentNode&&
this.footerContainer.parentNode.insertBefore(this.formatContainer,this.footerContainer),null!=this.sidebarContainer&&this.formatContainer.parentNode!=this.sidebarContainer.parentNode&&this.formatContainer.parentNode.insertBefore(this.sidebarContainer,this.formatContainer)),this.toggleCompactMode(!0));this.destroyWindows();this.updateUserElement();this.updateDefaultStyles();this.switchThemeConstants(d);this.switchCssForTheme(d);this.createWrapperForTheme(d);this.createPickerMenuForTheme(d);this.createMainMenuForTheme(d);
this.createMenubarForTheme(d);this.createFooterMenuForTheme(d);this.sidebarContainer.style.display="";if("simple"==d||"sketch"==d)this.createFormatWindow(),this.formatContainer.style.left="0px",this.formatContainer.style.top="0px",this.formatContainer.style.width="",this.formatContainer.style.zIndex="",this.formatContainer.style.border="none",this.createShapesWindow(),this.sidebarContainer.style.left="0px",this.sidebarContainer.style.top="0px",this.sidebarContainer.style.bottom="63px",this.sidebarContainer.style.width=
"100%";null!=this.format&&(d="default"==d||"atlas"==d,this.format.showCloseButton!=d&&(this.format.showCloseButton=d,this.format.refresh()))};EditorUi.prototype.fitWindows=function(){null!=this.sidebarWindow&&this.sidebarWindow.window.fit();null!=this.formatWindow&&this.formatWindow.window.fit();null!=this.freehandWindow&&this.freehandWindow.window.fit();null!=this.actions.outlineWindow&&this.actions.outlineWindow.window.fit();null!=this.actions.layersWindow&&this.actions.layersWindow.window.fit();