EditorUi.prototype.patchPage=function(b,e,f,c){var l=b==this.currentPage?this.editor.graph.model:new mxGraphModel(b.root),m=this.createParentLookup(l,e);l.beginUpdate();try{var t=l.updateEdgeParent,y=new mxDictionary,C=[];l.updateEdgeParent=function(x,u){!y.get(x)&&c&&(y.put(x,!0),C.push(x))};var z=m[""],A=null!=z&&null!=z.inserted?z.inserted[""]:null,J=null;null!=A&&(J=this.getCellForJson(A));if(null==J){var d=null!=z&&null!=z.moved?z.moved[""]:null;null!=d&&(J=l.getCell(d))}null!=J&&(l.setRoot(J),