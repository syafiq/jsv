Q.nextSibling;null!=Q&&(new mxCodec(e.firstChild)).decode(Q,v)}else if("view"==e.nodeName){if(e.hasAttribute("scale")&&(u.view.scale=parseFloat(e.getAttribute("scale"))),e.hasAttribute("dx")||e.hasAttribute("dy"))u.view.translate=new mxPoint(parseFloat(e.getAttribute("dx")||0),parseFloat(e.getAttribute("dy")||0))}else"fit"==e.nodeName&&(E=e.hasAttribute("max-scale")?parseFloat(e.getAttribute("max-scale")):1);e=e.nextSibling}}finally{v.endUpdate()}null!=E&&this.chromelessResize&&this.chromelessResize(!0,
E)}return k};EditorUi.prototype.getCopyFilename=function(e,g){var k=null!=e&&null!=e.getTitle()?e.getTitle():this.defaultFilename;e="";var n=k.lastIndexOf(".");0<=n&&(e=k.substring(n),k=k.substring(0,n));if(g){g=k;var u=new Date;k=u.getFullYear();n=u.getMonth()+1;var v=u.getDate(),E=u.getHours(),C=u.getMinutes();u=u.getSeconds();k=g+(" "+(k+"-"+n+"-"+v+"-"+E+"-"+C+"-"+u))}return k=mxResources.get("copyOf",[k])+e};EditorUi.prototype.fileLoaded=function(e,g){var k=this.getCurrentFile();this.fileEditable=