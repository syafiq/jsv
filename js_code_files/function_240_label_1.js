function(t,z,A){for(;null!=t&&t.nodeName!=z;){if(t==A)return null;t=t.parentNode}return t};Graph.prototype.getParentByNames=function(t,z,A){for(;null!=t&&!(0<=mxUtils.indexOf(z,t.nodeName));){if(t==A)return null;t=t.parentNode}return t};Graph.prototype.selectNode=function(t){var z=null;if(window.getSelection){if(z=window.getSelection(),z.getRangeAt&&z.rangeCount){var A=document.createRange();A.selectNode(t);z.removeAllRanges();z.addRange(A)}}else(z=document.selection)&&"Control"!=z.type&&(t=z.createRange(),