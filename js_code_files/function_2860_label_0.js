function(){for(var y=this.getSelectedElement();null!=y&&y.nodeType!=mxConstants.NODETYPE_ELEMENT;)y=y.parentNode;null!=y&&y==this.cellEditor.textarea&&1==this.cellEditor.textarea.children.length&&this.cellEditor.textarea.firstChild.nodeType==mxConstants.NODETYPE_ELEMENT&&(y=this.cellEditor.textarea.firstChild);return y};Graph.prototype.getParentByName=function(y,L,O){for(;null!=y&&y.nodeName!=L;){if(y==O)return null;y=y.parentNode}return y};Graph.prototype.getParentByNames=function(y,L,O){for(;null!=