Editor=function(b,e,k,l,B){mxEventSource.call(this);this.chromeless=null!=b?b:this.chromeless;this.initStencilRegistry();this.graph=l||this.createGraph(e,k);this.editable=null!=B?B:!b;this.undoManager=this.createUndoManager();this.status="";this.getOrCreateFilename=function(){return this.filename||mxResources.get("drawing",[Editor.pageCounter])+".xml"};this.getFilename=function(){return this.filename};this.setStatus=function(q,D){this.status=q;this.statusFunction=D;this.fireEvent(new mxEventObject("statusChanged"))};