Editor.prototype.createUndoManager=function(){var b=this.graph,e=new mxUndoManager;this.undoListener=function(l,C){e.undoableEditHappened(C.getProperty("edit"))};var k=mxUtils.bind(this,function(l,C){this.undoListener.apply(this,arguments)});b.getModel().addListener(mxEvent.UNDO,k);b.getView().addListener(mxEvent.UNDO,k);k=function(l,C){l=b.getSelectionCellsForChanges(C.getProperty("edit").changes,function(D){return!(D instanceof mxChildChange)});if(0<l.length){b.getModel();C=[];for(var p=0;p<l.length;p++)null!=
b.view.getState(l[p])&&C.push(l[p]);b.setSelectionCells(C)}};e.addListener(mxEvent.UNDO,k);e.addListener(mxEvent.REDO,k);return e};Editor.prototype.initStencilRegistry=function(){};Editor.prototype.destroy=function(){null!=this.graph&&(this.graph.destroy(),this.graph=null)};OpenFile=function(b){this.consumer=this.producer=null;this.done=b;this.args=null};OpenFile.prototype.setConsumer=function(b){this.consumer=b;this.execute()};OpenFile.prototype.setData=function(){this.args=arguments;this.execute()};