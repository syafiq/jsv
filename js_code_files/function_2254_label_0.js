function(t,z){t.tBodies[0].deleteRow(z)};Graph.prototype.insertColumn=function(t,z){var A=t.tHead;if(null!=A)for(var D=0;D<A.rows.length;D++){var G=document.createElement("th");A.rows[D].appendChild(G);mxUtils.br(G)}t=t.tBodies[0];for(A=0;A<t.rows.length;A++)D=t.rows[A].insertCell(z),mxUtils.br(D);return t.rows[0].cells[0<=z?z:t.rows[0].cells.length-1]};Graph.prototype.deleteColumn=function(t,z){if(0<=z){t=t.tBodies[0].rows;for(var A=0;A<t.length;A++)t[A].cells.length>z&&t[A].deleteCell(z)}};Graph.prototype.pasteHtmlAtCaret=