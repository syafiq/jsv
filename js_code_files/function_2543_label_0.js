function(c,m,v){return mb(c,["width"],m,function(n,t,z,C,fa){fa=c.shape.getEdgeWidth()*c.view.scale+v;return new mxPoint(C.x+t*n/4+z*fa/2,C.y+z*n/4-t*fa/2)},function(n,t,z,C,fa,I){n=Math.sqrt(mxUtils.ptSegDistSq(C.x,C.y,fa.x,fa.y,I.x,I.y));c.style.width=Math.round(2*n)/c.view.scale-v})},mb=function(c,m,v,n,t){return eb(c,m,function(z){var C=c.absolutePoints,fa=C.length-1;z=c.view.translate;var I=c.view.scale,wa=v?C[0]:C[fa];C=v?C[1]:C[fa-1];fa=C.x-wa.x;var ka=C.y-wa.y,Xa=Math.sqrt(fa*fa+ka*ka);wa=