E&&0<E.length){var Z=document.createElement("script");Z.setAttribute("type","text/javascript");Z.setAttribute("src",p);E[0].parentNode.appendChild(Z)}}};Editor.prototype.csvToArray=function(p){if(0<p.length){var E="",Q=[""],Z=0,W=!0,X;p=$jscomp.makeIterator(p);for(X=p.next();!X.done;X=p.next())X=X.value,'"'===X?(W&&X===E&&(Q[Z]+=X),W=!W):","===X&&W?X=Q[++Z]="":Q[Z]+=X,E=X;return Q}return[]};Editor.prototype.getProxiedUrl=function(p){if((/test\.draw\.io$/.test(window.location.hostname)||/app\.diagrams\.net$/.test(window.location.hostname))&&
!this.isCorsEnabledForUrl(p)){var E=/(\.v(dx|sdx?))($|\?)/i.test(p)||/(\.vs(x|sx?))($|\?)/i.test(p);E=/\.png$/i.test(p)||/\.pdf$/i.test(p)||E;var Q="t="+(new Date).getTime();p=PROXY_URL+"?url="+encodeURIComponent(p)+"&"+Q+(E?"&base64=1":"")}return p};Editor.prototype.isCorsEnabledForUrl=function(p){if(mxClient.IS_CHROMEAPP||EditorUi.isElectronApp||p.substring(0,window.location.origin.length)==window.location.origin)return!0;null!=urlParams.cors&&null==this.corsRegExp&&(this.corsRegExp=new RegExp(decodeURIComponent(urlParams.cors)));