X,ba?1:aa.steps,ba?0:aa.delay));0==U?Z():R()}else this.stoppingCustomActions=this.executingCustomActions=!1,R(),null!=D&&D()});Z()}};Graph.prototype.doUpdateCustomLinksForCell=function(q,D){var L=this.getLinkForCell(D);null!=L&&"data:action/json,"==L.substring(0,17)&&this.setLinkForCell(D,this.updateCustomLink(q,L));if(this.isHtmlLabel(D)){var U=document.createElement("div");U.innerHTML=this.sanitizeHtml(this.getLabel(D));for(var O=U.getElementsByTagName("a"),S=!1,R=0;R<O.length;R++)L=O[R].getAttribute("href"),
null!=L&&"data:action/json,"==L.substring(0,17)&&(O[R].setAttribute("href",this.updateCustomLink(q,L)),S=!0);S&&this.labelChanged(D,U.innerHTML)}};Graph.prototype.updateCustomLink=function(q,D){if("data:action/json,"==D.substring(0,17))try{var L=JSON.parse(D.substring(17));null!=L.actions&&(this.updateCustomLinkActions(q,L.actions),D="data:action/json,"+JSON.stringify(L))}catch(U){}return D};Graph.prototype.updateCustomLinkActions=function(q,D){for(var L=0;L<D.length;L++){var U=D[L],O;for(O in U)this.updateCustomLinkAction(q,