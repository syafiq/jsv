p-y):Z&&!M?c.lineTo(l-y,p):"square"==w||"default"==w&&"square"==u||!Z?c.lineTo(l-y,p-y):"rounded"==w||"default"==w&&"rounded"==u||"snip"==w||"default"==w&&"snip"==u?c.lineTo(l-I-.5*y,p-y):c.lineTo(l-I-y,p-y):c.lineTo(l,p)};Ga.prototype.paintSWInner=function(c,k,q,l,p,u,w,I,y,Z){if(!Z)c.lineTo(y,p);else if("square"==w||"default"==w&&"square"==u)c.lineTo(y,p-y);else if("rounded"==w||"default"==w&&"rounded"==u)c.arcTo(I-.5*y,I-.5*y,0,0,0,I+.5*y,p-y);else if("invRound"==w||"default"==w&&"invRound"==u)c.arcTo(I+
y,I+y,0,0,1,I+y,p-y);else if("snip"==w||"default"==w&&"snip"==u)c.lineTo(I+.5*y,p-y);else if("fold"==w||"default"==w&&"fold"==u)c.lineTo(y+I,p-I-y),c.lineTo(y+I,p-y)};Ga.prototype.moveSWInner=function(c,k,q,l,p,u,w,I,y,Z){Z?"square"==w||"default"==w&&"square"==u?c.moveTo(y,p-y):"rounded"==w||"default"==w&&"rounded"==u||"snip"==w||"default"==w&&"snip"==u?c.moveTo(y,p-I-.5*y):("invRound"==w||"default"==w&&"invRound"==u||"fold"==w||"default"==w&&"fold"==u)&&c.moveTo(y,p-I-y):c.moveTo(0,p-y)};Ga.prototype.lineSWInner=