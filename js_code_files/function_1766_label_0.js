0),B=0;B<m.length;B++){r.add(x,m[B]);var C=d.view.getState(h[B]);if(null!=C){var F=d.getCellGeometry(m[B]);null!=F&&F.relative&&!r.isEdge(h[B])&&null==u[mxObjectIdentity.get(r.getParent(h[B]))]&&(F.offset=null,F.relative=!1,F.x=C.x/C.view.scale-C.view.translate.x,F.y=C.y/C.view.scale-C.view.translate.y)}}d.updateCustomLinks(d.createCellMapping(n,u),m);mxClipboard.insertCount=1;mxClipboard.setCells(m)}a.updatePasteActionStates();return h};var f=mxClipboard.paste;mxClipboard.paste=function(d){var h=
null;d.cellEditor.isContentEditing()?document.execCommand("paste",!1,null):h=f.apply(this,arguments);a.updatePasteActionStates();return h};var e=this.editor.graph.cellEditor.startEditing;this.editor.graph.cellEditor.startEditing=function(){e.apply(this,arguments);a.updatePasteActionStates()};var g=this.editor.graph.cellEditor.stopEditing;this.editor.graph.cellEditor.stopEditing=function(d,h){g.apply(this,arguments);a.updatePasteActionStates()};this.updatePasteActionStates()};