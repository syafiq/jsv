return null};mxCellEditor.prototype.restoreSelection=function(y){try{if(y)if(window.getSelection){sel=window.getSelection();sel.removeAllRanges();for(var N=0,P=y.length;N<P;++N)sel.addRange(y[N])}else document.selection&&y.select&&y.select()}catch(W){}};var g=mxCellRenderer.prototype.initializeLabel;mxCellRenderer.prototype.initializeLabel=function(y){null!=y.text&&(y.text.replaceLinefeeds="0"!=mxUtils.getValue(y.style,"nl2Br","1"));g.apply(this,arguments)};var v=mxConstraintHandler.prototype.update;