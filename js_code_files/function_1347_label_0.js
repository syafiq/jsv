m.appendChild(c));l.appendChild(m);this.container=l},LibraryDialog=function(b,e,f,c,l,m){function t(q){for(q=document.elementFromPoint(q.clientX,q.clientY);null!=q&&q.parentNode!=g;)q=q.parentNode;var v=null;if(null!=q){var E=g.firstChild;for(v=0;null!=E&&E!=q;)E=E.nextSibling,v++}return v}function y(q,v,E,K,M,H,N,P,O){try{if(b.spinner.stop(),null==v||"image/"==v.substring(0,6))if(null==q&&null!=N||null==n[q]){var V=function(){W.innerText="";W.style.cursor="pointer";W.style.whiteSpace="nowrap";W.style.textOverflow=