Graph.prototype.getDataForCells=function(b){for(var e=[],k=0;k<b.length;k++){var l=null!=b[k].value?b[k].value.attributes:null,C={};C.id=b[k].id;if(null!=l)for(var p=0;p<l.length;p++)C[l[p].nodeName]=l[p].nodeValue;else C.label=this.convertValueToString(b[k]);e.push(C)}return e};