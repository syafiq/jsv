EditorUi.prototype.jpgSupported=null!==n.match("image/jpeg")}catch(q){}})();EditorUi.prototype.openLink=function(c,e,g){return this.editor.graph.openLink(c,e,g)};EditorUi.prototype.showSplash=function(c){};EditorUi.prototype.getLocalData=function(c,e){e(localStorage.getItem(c))};EditorUi.prototype.setLocalData=function(c,e,g){localStorage.setItem(c,e);null!=g&&g()};EditorUi.prototype.removeLocalData=function(c,e){localStorage.removeItem(c);e()};EditorUi.prototype.setShareCursorPosition=function(c){this.shareCursorPosition=
c;this.fireEvent(new mxEventObject("shareCursorPositionChanged"))};EditorUi.prototype.isShareCursorPosition=function(){return this.shareCursorPosition};EditorUi.prototype.setShowRemoteCursors=function(c){this.showRemoteCursors=c;this.fireEvent(new mxEventObject("showRemoteCursorsChanged"))};EditorUi.prototype.isShowRemoteCursors=function(){return this.showRemoteCursors};EditorUi.prototype.setMathEnabled=function(c){this.editor.graph.mathEnabled=c;this.editor.updateGraphComponents();this.editor.graph.refresh();