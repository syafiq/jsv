function(Y){this.cachedFonts[Z]=Y;U--;O()}),mxUtils.bind(this,function(Y){U--;O()}),!0,null,"data:"+aa+";charset=utf-8;base64,")}))}})(Editor.trimCssUrl(L[q].substring(0,S)),R)}O()}else D(q)};Editor.prototype.loadFonts=function(q){null!=this.fontCss&&null==this.resolvedFontCss?this.embedCssFonts(this.fontCss,mxUtils.bind(this,function(D){this.resolvedFontCss=D;null!=q&&q()})):null!=q&&q()};Editor.prototype.createGoogleFontCache=function(){var q={},D;for(D in Graph.fontMapping)Graph.isCssFontUrl(D)&&