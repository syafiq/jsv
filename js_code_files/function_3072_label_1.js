Menus.prototype.init=function(){function f(p,x,G){this.ui=p;this.previousExtFonts=this.extFonts=x;this.prevCustomFonts=this.customFonts=G}d.apply(this,arguments);var c=this.editorUi,l=c.editor.graph,m=mxUtils.bind(l,l.isEnabled),t=("1"!=urlParams.embed&&"0"!=urlParams.gapi||"1"==urlParams.embed&&"1"==urlParams.gapi)&&mxClient.IS_SVG&&isLocalStorage&&(null==document.documentMode||10<=document.documentMode),y=("1"!=urlParams.embed&&"0"!=urlParams.db||"1"==urlParams.embed&&"1"==urlParams.db)&&mxClient.IS_SVG&&