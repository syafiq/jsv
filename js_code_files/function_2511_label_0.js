12],yy:String(x).slice(2),yyyy:x,h:B%12||12,hh:h(B%12||12),H:B,HH:h(B),M:C,MM:h(C),s:F,ss:h(F),l:h(n,3),L:h(99<n?Math.round(n/10):n),t:12>B?"a":"p",tt:12>B?"am":"pm",T:12>B?"A":"P",TT:12>B?"AM":"PM",Z:f?"UTC":(String(a).match(g)||[""]).pop().replace(d,""),o:(0<H?"-":"+")+h(100*Math.floor(Math.abs(H)/60)+Math.abs(H)%60,4),S:["th","st","nd","rd"][3<u%10?0:(10!=u%100-u%10)*u%10]};return b.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,function(N){return N in E?E[N]:N.slice(1,