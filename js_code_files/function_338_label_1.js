E.join(""):null};Editor.prototype.mapFontUrl=function(q,E,S){/^https?:\/\//.test(E)&&!this.isCorsEnabledForUrl(E)&&(E=PROXY_URL+"?url="+encodeURIComponent(E));S(q,E)};Editor.prototype.embedCssFonts=function(q,E){var S=q.split("url("),ba=0;null==this.cachedFonts&&(this.cachedFonts={});var U=mxUtils.bind(this,function(){if(0==ba){for(var ra=[S[0]],ua=1;ua<S.length;ua++){var oa=S[ua].indexOf(")");ra.push('url("');ra.push(this.cachedFonts[Editor.trimCssUrl(S[ua].substring(0,oa))]);ra.push('"'+S[ua].substring(oa))}E(ra.join(""))}});