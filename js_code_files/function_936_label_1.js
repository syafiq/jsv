U);this.graph.addListener(mxEvent.REFRESH,U)};E=document.getElementsByTagName("script");if(null!=E&&0<E.length){var ba=document.createElement("script");ba.setAttribute("type","text/javascript");ba.setAttribute("src",q);E[0].parentNode.appendChild(ba)}}};Editor.prototype.csvToArray=function(q){if(0<q.length){var E="",S=[""],ba=0,U=!0,ca;q=$jscomp.makeIterator(q);for(ca=q.next();!ca.done;ca=q.next())ca=ca.value,'"'===ca?(U&&ca===E&&(S[ba]+=ca),U=!U):","===ca&&U?ca=S[++ba]="":S[ba]+=ca,E=ca;return S}return[]};