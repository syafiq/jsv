N.getRangeAt(0);N.deleteContents();var P=document.createElement("div");P.innerHTML=y;y=document.createDocumentFragment();for(var W;W=P.firstChild;)lastNode=y.appendChild(W);N.insertNode(y)}}else(N=document.selection)&&"Control"!=N.type&&N.createRange().pasteHTML(y)};Graph.prototype.createLinkForHint=function(y,N){function P(Y,ha){Y.length>ha&&(Y=Y.substring(0,Math.round(ha/2))+"..."+Y.substring(Y.length-Math.round(ha/4)));return Y}y=null!=y?y:"javascript:void(0);";if(null==N||0==N.length)N=this.isCustomLink(y)?
this.getLinkTitle(y):y;var W=document.createElement("a");W.setAttribute("rel",this.linkRelation);W.setAttribute("href",this.getAbsoluteUrl(y));W.setAttribute("title",P(this.isCustomLink(y)?this.getLinkTitle(y):y,80));null!=this.linkTarget&&W.setAttribute("target",this.linkTarget);mxUtils.write(W,P(N,40));this.isCustomLink(y)&&mxEvent.addListener(W,"click",mxUtils.bind(this,function(Y){this.customLinkClicked(y);mxEvent.consume(Y)}));return W};Graph.prototype.initTouch=function(){this.connectionHandler.marker.isEnabled=