d.y-Math.round(r.y),d.x=Math.round(r.x),d.y=Math.round(r.y),n.model.setGeometry(b[e],d),n.cellsMoved(b,C,F,null,null,!0),h=b.slice(),u=1==h.length?h[0]:null,b.push(n.insertEdge(null,null,"",a,b[e],n.createCurrentEdgeStyle()));null!=g&&mxEvent.isShiftDown(g)||n.fireEvent(new mxEventObject("cellsInserted","cells",b))}catch(ba){this.editorUi.handleError(ba)}finally{n.model.endUpdate()}n.editAfterInsert&&null!=g&&mxEvent.isMouseEvent(g)&&null!=u&&window.setTimeout(function(){n.startEditing(u)},0)}return h};