TableLayout.prototype.layoutRow=function(a,b,f,e){var g=this.graph.getModel(),d=g.getChildCells(a,!0);a=this.graph.getActualStartSize(a,!0);var h=a.x,n=0;null!=b&&(b=b.slice(),b.splice(0,0,a.x));for(var u=0;u<d.length;u++){var m=this.graph.getCellGeometry(d[u]);null!=m&&(m=m.clone(),m.y=a.y,m.height=f-a.y-a.height,null!=b?(m.x=b[u],m.width=b[u+1]-m.x,u==d.length-1&&u<b.length-2&&(m.width=e-m.x-a.x-a.width)):(m.x=h,h+=m.width,u==d.length-1?m.width=e-a.x-a.width-n:n+=m.width),m.alternateBounds=new mxRectangle(0,
0,m.width,m.height),g.setGeometry(d[u],m))}return n};