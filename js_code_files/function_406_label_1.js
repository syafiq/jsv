EditorUi.prototype.createKeyHandler=function(e){var g=b.apply(this,arguments);if(!this.editor.chromeless||this.editor.editable){var k=g.getFunction,n=this.editor.graph,u=this;g.getFunction=function(v){if(n.isSelectionEmpty()&&null!=u.pages&&0<u.pages.length){var E=u.getSelectedPageIndex();if(mxEvent.isShiftDown(v)){if(37==v.keyCode)return function(){0<E&&u.movePage(E,E-1)};if(38==v.keyCode)return function(){0<E&&u.movePage(E,0)};if(39==v.keyCode)return function(){E<u.pages.length-1&&u.movePage(E,
E+1)};if(40==v.keyCode)return function(){E<u.pages.length-1&&u.movePage(E,u.pages.length-1)}}else if(mxEvent.isControlDown(v)||mxClient.IS_MAC&&mxEvent.isMetaDown(v)){if(37==v.keyCode)return function(){0<E&&u.selectNextPage(!1)};if(38==v.keyCode)return function(){0<E&&u.selectPage(u.pages[0])};if(39==v.keyCode)return function(){E<u.pages.length-1&&u.selectNextPage(!0)};if(40==v.keyCode)return function(){E<u.pages.length-1&&u.selectPage(u.pages[u.pages.length-1])}}}return!(65<=v.keyCode&&90>=v.keyCode)||
n.isSelectionEmpty()||mxEvent.isAltDown(v)||mxEvent.isShiftDown(v)||mxEvent.isControlDown(v)||mxClient.IS_MAC&&mxEvent.isMetaDown(v)?k.apply(this,arguments):null}}return g};var d=EditorUi.prototype.extractGraphModelFromHtml;EditorUi.prototype.extractGraphModelFromHtml=function(e){var g=d.apply(this,arguments);if(null==g)try{var k=e.indexOf("&lt;mxfile ");if(0<=k){var n=e.lastIndexOf("&lt;/mxfile&gt;");n>k&&(g=e.substring(k,n+15).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/\\&quot;/g,'"').replace(/\n/g,