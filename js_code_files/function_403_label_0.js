2;q.style.border="3px dotted rgb(254, 137, 12)";q.style.pointerEvents="none";q.style.position="absolute";q.style.top=e+"px";q.style.left=g+"px";q.style.width=Math.max(0,p-3)+"px";q.style.height=Math.max(0,n-3)+"px";null!=c&&c.parentNode==this.editor.graph.container?this.editor.graph.container.appendChild(q):document.body.appendChild(q);return q};EditorUi.prototype.stringToCells=function(c){c=mxUtils.parseXml(c);var e=this.editor.extractGraphModel(c.documentElement);c=[];if(null!=e){var g=new mxCodec(e.ownerDocument),
n=new mxGraphModel;g.decode(e,n);e=n.getChildAt(n.getRoot(),0);for(g=0;g<n.getChildCount(e);g++)c.push(n.getChildAt(e,g))}return c};EditorUi.prototype.openFileHandle=function(c,e,g,n,q){if(null!=e&&0<e.length){!this.useCanvasForExport&&/(\.png)$/i.test(e)?e=e.substring(0,e.length-4)+".drawio":/(\.pdf)$/i.test(e)&&(e=e.substring(0,e.length-4)+".drawio");var p=mxUtils.bind(this,function(B){e=0<=e.lastIndexOf(".")?e.substring(0,e.lastIndexOf("."))+".drawio":e+".drawio";if("<mxlibrary"==B.substring(0,