Graph.prototype.visitTableCells=function(a,b){var f=null,e=this.model.getChildCells(a,!0);a=this.getActualStartSize(a,!0);for(var g=0;g<e.length;g++){for(var d=this.getActualStartSize(e[g],!0),h=this.model.getChildCells(e[g],!0),n=this.getCellStyle(e[g],!0),v=null,m=[],r=0;r<h.length;r++){var x=this.getCellGeometry(h[r]),B={cell:h[r],rospan:1,colspan:1,row:g,col:r,geo:x};x=null!=x.alternateBounds?x.alternateBounds:x;B.point=new mxPoint(x.width+(null!=v?v.point.x:a.x+d.x),x.height+(null!=f&&null!=
f[0]?f[0].point.y:a.y+d.y));B.actual=B;null!=f&&null!=f[r]&&1<f[r].rowspan?(B.rowspan=f[r].rowspan-1,B.colspan=f[r].colspan,B.actual=f[r].actual):null!=v&&1<v.colspan?(B.rowspan=v.rowspan,B.colspan=v.colspan-1,B.actual=v.actual):(v=this.getCurrentCellStyle(h[r],!0),null!=v&&(B.rowspan=parseInt(v.rowspan||1),B.colspan=parseInt(v.colspan||1)));v=1==mxUtils.getValue(n,mxConstants.STYLE_SWIMLANE_HEAD,1)&&mxUtils.getValue(n,mxConstants.STYLE_STROKECOLOR,mxConstants.NONE)!=mxConstants.NONE;b(B,h.length,
e.length,a.x+(v?d.x:0),a.y+(v?d.y:0));m.push(B);v=B}f=m}};Graph.prototype.getTableLines=function(a,b,f){var e=[],g=[];(b||f)&&this.visitTableCells(a,mxUtils.bind(this,function(d,h,n,v,m){b&&d.row<n-1&&(null==e[d.row]&&(e[d.row]=[new mxPoint(v,d.point.y)]),1<d.rowspan&&e[d.row].push(null),e[d.row].push(d.point));f&&d.col<h-1&&(null==g[d.col]&&(g[d.col]=[new mxPoint(d.point.x,m)]),1<d.colspan&&g[d.col].push(null),g[d.col].push(d.point))}));return e.concat(g)};