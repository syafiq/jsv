`,l}}function Lx(o){if(!o||!o.startsWith("candidate:"))return;const e=o;o=o.substr(10);const[t,s,i,n,a,r,...l]=o.split(" "),c={sdpString:e,foundation:t,component:s,protocol:i,priority:n,address:{ip:a,port:r}};for(let d=0;d<l.length;d+=2)switch(l[d]){case"typ":{c.type=l[d+1];break}case"raddr":{c.relAddress||(c.relAddress={}),c.relAddress.ip=l[d+1];break}case"rport":{c.relAddress||(c.relAddress={}),c.relAddress.port=l[d+1];break}case"generation":{c.generation=l[d+1];break}case"tcptype":{c.tcpType=l[d+1];break}case"network-id":{c.networkId=l[d+1];break}case"network-cost":{c.networkCost=l[d+1];break}case"ufrag":{c.username=l[d+1];break}}return c}function Ay(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function Fy(){return navigator.userAgent.toLowerCase().indexOf("safari")>-1&&navigator.userAgent.toLowerCase().indexOf("chrome")===-1}function rn(o){let e=[];for(let t=0;t<o.length;t++){const s=o[t],{id:i,uri:n}=s;console.log("[extmap] add",i,n),e.push(`a=extmap:${i} ${n}`)}return e.join(`