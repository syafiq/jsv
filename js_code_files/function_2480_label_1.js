this.formatContainer.onmousedown=g,this.footerContainer.onselectstart=g,this.footerContainer.onmousedown=g,null!=this.tabContainer&&(this.tabContainer.onselectstart=g));!this.editor.chromeless||this.editor.editable?(e=function(T){if(null!=T){var Z=mxEvent.getSource(T);if("A"==Z.nodeName)for(;null!=Z;){if("geHint"==Z.className)return!0;Z=Z.parentNode}}return g(T)},mxClient.IS_IE&&("undefined"===typeof document.documentMode||9>document.documentMode)?mxEvent.addListener(this.diagramContainer,"contextmenu",