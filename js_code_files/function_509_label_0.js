EditorUi.prototype.showError=function(b,e,k,l,B,q,D,N,S,F,K,R,d){b=new ErrorDialog(this,b,e,k||mxResources.get("ok"),l,B,q,D,R,N,S);e=Math.ceil(null!=e?e.length/50:1);this.showDialog(b.container,F||340,K||100+20*e,!0,!1,d);b.init()};EditorUi.prototype.showDialog=function(b,e,k,l,B,q,D,N,S,F){this.editor.graph.tooltipHandler.resetTimer();this.editor.graph.tooltipHandler.hideTooltip();null==this.dialogs&&(this.dialogs=[]);this.dialog=new Dialog(this,b,e,k,l,B,q,D,N,S,F);this.dialogs.push(this.dialog)};