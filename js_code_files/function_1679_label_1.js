aa.checked&&ja.checked?ia.getEditSelect().removeAttribute("disabled"):ia.getEditSelect().setAttribute("disabled","disabled")});f=new CustomDialog(this,A,mxUtils.bind(this,function(){d(O.checked,F.checked,ea.checked,ja.checked,ia.getLink(),sa.checked)}),null,mxResources.get("embed"),x);this.showDialog(f.container,280,300,!0,!0)};EditorUi.prototype.createEmbedImage=function(d,f,g,v,x,A,J,H){function O(aa){var qa=" ",sa="";v&&(qa=" onclick=\"(function(img){if(img.wnd!=null&&!img.wnd.closed){img.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==img.wnd){img.wnd.postMessage(decodeURIComponent(img.getAttribute('src')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);img.wnd=window.open('"+
EditorUi.lightboxHost+"/?client=1"+(null!=ea?"&page="+ea:"")+(x?"&edit=_blank":"")+(A?"&layers=1":"")+"');}})(this);\"",sa+="cursor:pointer;");d&&(sa+="max-width:100%;");var K="";g&&(K=' width="'+Math.round(F.width)+'" height="'+Math.round(F.height)+'"');J('<img src="'+aa+'"'+K+(""!=sa?' style="'+sa+'"':"")+qa+"/>")}var F=this.editor.graph.getGraphBounds(),ea=this.getSelectedPageIndex();if(this.isExportToCanvas())this.editor.exportToCanvas(mxUtils.bind(this,function(aa){var qa=v?this.getFileData(!0):