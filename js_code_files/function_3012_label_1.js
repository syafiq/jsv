u?c.lineTo(I+.5*y,y):c.lineTo(I+y,y):c.lineTo(0,y):c.lineTo(0,0)};Ga.prototype.paintNEInner=function(c,k,q,l,p,u,w,I,y){if("rounded"==w||"default"==w&&"rounded"==u)c.arcTo(I-.5*y,I-.5*y,0,0,0,l-I-.5*y,y);else if("invRound"==w||"default"==w&&"invRound"==u)c.arcTo(I+y,I+y,0,0,1,l-I-y,y);else if("snip"==w||"default"==w&&"snip"==u)c.lineTo(l-I-.5*y,y);else if("fold"==w||"default"==w&&"fold"==u)c.lineTo(l-I-y,I+y),c.lineTo(l-I-y,y)};Ga.prototype.paintRightInner=function(c,k,q,l,p,u,w,I,y,Z,M){Z||M?!Z&&