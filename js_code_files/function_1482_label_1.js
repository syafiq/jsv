m.appendChild(c));l.appendChild(m);this.container=l},LibraryDialog=function(b,d,f,c,l,m){function t(p){for(p=document.elementFromPoint(p.clientX,p.clientY);null!=p&&p.parentNode!=g;)p=p.parentNode;var x=null;if(null!=p){var G=g.firstChild;for(x=0;null!=G&&G!=p;)G=G.nextSibling,x++}return x}function y(p,x,G,K,N,I,M,Q,P){try{if(b.spinner.stop(),null==x||"image/"==x.substring(0,6))if(null==p&&null!=M||null==n[p]){var V=function(){R.innerText="";R.style.cursor="pointer";R.style.whiteSpace="nowrap";R.style.textOverflow=