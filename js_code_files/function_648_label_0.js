" "+z.getStatus()}))}),mxUtils.bind(this,function(z){this.handleError(z)}))}),m=mxUtils.bind(this,function(){window.clearTimeout(C);C=window.setTimeout(U,G)});this.editor.addListener("pageSelected",mxUtils.bind(this,function(){m();U()}));m();U()}null!=e&&e()});if(null!=c.url&&0<c.url.length){var p=this.editor.getProxiedUrl(c.url);this.editor.loadUrl(p,mxUtils.bind(this,function(y){q(y)}),mxUtils.bind(this,function(y){null!=g&&g(y)}))}else q("")};EditorUi.prototype.updateDiagram=function(c){function e(T){var V=
new mxCellOverlay(T.image||q.warningImage,T.tooltip,T.align,T.valign,T.offset);V.addListener(mxEvent.CLICK,function(l,x){n.alert(T.tooltip)});return V}var g=null,n=this;if(null!=c&&0<c.length&&(g=mxUtils.parseXml(c),c=null!=g?g.documentElement:null,null!=c&&"updates"==c.nodeName)){var q=this.editor.graph,p=q.getModel();p.beginUpdate();var y=null;try{for(c=c.firstChild;null!=c;){if("update"==c.nodeName){var B=p.getCell(c.getAttribute("id"));if(null!=B){try{var G=c.getAttribute("value");if(null!=G){var C=