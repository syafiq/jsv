retry:ba})},X)});ba()}catch(aa){null!=L&&L(aa)}};Editor.prototype.absoluteCssFonts=function(q){var D=null;if(null!=q){var L=q.split("url(");if(0<L.length){D=[L[0]];q=window.location.pathname;var U=null!=q?q.lastIndexOf("/"):-1;0<=U&&(q=q.substring(0,U+1));U=document.getElementsByTagName("base");var O=null;null!=U&&0<U.length&&(O=U[0].getAttribute("href"));for(var S=1;S<L.length;S++)if(U=L[S].indexOf(")"),0<U){var R=Editor.trimCssUrl(L[S].substring(0,U));this.graph.isRelativeUrl(R)&&(R=null!=O?O+R:
window.location.protocol+"//"+window.location.hostname+("/"==R.charAt(0)?"":q)+R);D.push('url("'+R+'"'+L[S].substring(U))}else D.push(L[S])}else D=[q]}return null!=D?D.join(""):null};Editor.prototype.mapFontUrl=function(q,D,L){/^https?:\/\//.test(D)&&!this.isCorsEnabledForUrl(D)&&(D=PROXY_URL+"?url="+encodeURIComponent(D));L(q,D)};Editor.prototype.embedCssFonts=function(q,D){var L=q.split("url("),U=0;null==this.cachedFonts&&(this.cachedFonts={});var O=mxUtils.bind(this,function(){if(0==U){for(var Z=