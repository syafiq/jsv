return u};EditorUi.prototype.isCompatibleString=function(e){try{var g=mxUtils.parseXml(e),k=this.editor.extractGraphModel(g.documentElement,!0);return null!=k&&0==k.getElementsByTagName("parsererror").length}catch(n){}return!1};EditorUi.prototype.isVisioData=function(e){return 8<e.length&&(208==e.charCodeAt(0)&&207==e.charCodeAt(1)&&17==e.charCodeAt(2)&&224==e.charCodeAt(3)&&161==e.charCodeAt(4)&&177==e.charCodeAt(5)&&26==e.charCodeAt(6)&&225==e.charCodeAt(7)||80==e.charCodeAt(0)&&75==e.charCodeAt(1)&&
3==e.charCodeAt(2)&&4==e.charCodeAt(3)||80==e.charCodeAt(0)&&75==e.charCodeAt(1)&&3==e.charCodeAt(2)&&6==e.charCodeAt(3))};EditorUi.prototype.isRemoteVisioData=function(e){return 8<e.length&&(208==e.charCodeAt(0)&&207==e.charCodeAt(1)&&17==e.charCodeAt(2)&&224==e.charCodeAt(3)&&161==e.charCodeAt(4)&&177==e.charCodeAt(5)&&26==e.charCodeAt(6)&&225==e.charCodeAt(7)||60==e.charCodeAt(0)&&63==e.charCodeAt(1)&&120==e.charCodeAt(2)&&109==e.charCodeAt(3)&&108==e.charCodeAt(3))};var b=EditorUi.prototype.createKeyHandler;