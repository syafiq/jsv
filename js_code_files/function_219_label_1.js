I)};Ga.prototype.paintLeft=function(c,k,q,l,p,u,w,I,y){"square"==w||"default"==w&&"square"==u||!y?c.lineTo(0,0):c.lineTo(0,I)};Ga.prototype.paintSE=function(c,k,q,l,p,u,w,I,y){if(y)if("rounded"==w||"default"==w&&"rounded"==u||"invRound"==w||"default"==w&&"invRound"==u){k=0;if("rounded"==w||"default"==w&&"rounded"==u)k=1;c.arcTo(I,I,0,0,k,l-I,p)}else("snip"==w||"default"==w&&"snip"==u||"fold"==w||"default"==w&&"fold"==u)&&c.lineTo(l-I,p);else c.lineTo(l,p)};Ga.prototype.paintBottom=function(c,k,q,