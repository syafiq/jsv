if(null!=k)for(x=0;x<k.length;x++)g.model.execute(new ChangePage(this,k[x],null))}finally{g.model.endUpdate()}}};EditorUi.prototype.createFileData=function(d,g,k,n,x,u,D,F,I,G,U){g=null!=g?g:this.editor.graph;x=null!=x?x:!1;I=null!=I?I:!0;var q=null;if(null==k||k.getMode()==App.MODE_DEVICE||k.getMode()==App.MODE_BROWSER)var v="_blank";else q=v=n;if(null==d)return"";var E=d;if("mxfile"!=E.nodeName.toLowerCase()){if(U){var K=d.ownerDocument.createElement("diagram");K.setAttribute("id",Editor.guid());