"//"+window.location.hostname+("/"==S.charAt(0)?"":l)+S);x.push('url("'+S+'"'+K[Q].substring(O))}else x.push(K[Q])}else x=[l]}return null!=x?x.join(""):null};Editor.prototype.mapFontUrl=function(l,x,K){/^https?:\/\//.test(x)&&!this.isCorsEnabledForUrl(x)&&(x=PROXY_URL+"?url="+encodeURIComponent(x));K(l,x)};Editor.prototype.embedCssFonts=function(l,x){var K=l.split("url("),O=0;null==this.cachedFonts&&(this.cachedFonts={});var R=mxUtils.bind(this,function(){if(0==O){for(var X=[K[0]],Y=1;Y<K.length;Y++){var Z=
K[Y].indexOf(")");X.push('url("');X.push(this.cachedFonts[Editor.trimCssUrl(K[Y].substring(0,Z))]);X.push('"'+K[Y].substring(Z))}x(X.join(""))}});if(0<K.length){for(l=1;l<K.length;l++){var Q=K[l].indexOf(")"),S=null,W=K[l].indexOf("format(",Q);0<W&&(S=Editor.trimCssUrl(K[l].substring(W+7,K[l].indexOf(")",W))));mxUtils.bind(this,function(X){if(null==this.cachedFonts[X]){this.cachedFonts[X]=X;O++;var Y="application/x-font-ttf";if("svg"==S||/(\.svg)($|\?)/i.test(X))Y="image/svg+xml";else if("otf"==S||
"embedded-opentype"==S||/(\.otf)($|\?)/i.test(X))Y="application/x-font-opentype";else if("woff"==S||/(\.woff)($|\?)/i.test(X))Y="application/font-woff";else if("woff2"==S||/(\.woff2)($|\?)/i.test(X))Y="application/font-woff2";else if("eot"==S||/(\.eot)($|\?)/i.test(X))Y="application/vnd.ms-fontobject";else if("sfnt"==S||/(\.sfnt)($|\?)/i.test(X))Y="application/font-sfnt";this.mapFontUrl(Y,X,mxUtils.bind(this,function(Z,fa){this.loadUrl(fa,mxUtils.bind(this,function(ca){this.cachedFonts[X]=ca;O--;
R()}),mxUtils.bind(this,function(ca){O--;R()}),!0,null,"data:"+Z+";charset=utf-8;base64,")}))}})(Editor.trimCssUrl(K[l].substring(0,Q)),S)}R()}else x(l)};Editor.prototype.loadFonts=function(l){null!=this.fontCss&&null==this.resolvedFontCss?this.embedCssFonts(this.fontCss,mxUtils.bind(this,function(x){this.resolvedFontCss=x;null!=l&&l()})):null!=l&&l()};Editor.prototype.createGoogleFontCache=function(){var l={},x;for(x in Graph.fontMapping)Graph.isCssFontUrl(x)&&(l[x]=Graph.fontMapping[x]);return l};