var CommentsWindow=function(b,e,f,c,l,m){function t(){for(var E=D.getElementsByTagName("div"),K=0,M=0;M<E.length;M++)"none"!=E[M].style.display&&E[M].parentNode==D&&K++;F.style.display=0==K?"block":"none"}function y(E,K,M,H){function N(){K.removeChild(V);K.removeChild(p);O.style.display="block";P.style.display="block"}n={div:K,comment:E,saveCallback:M,deleteOnCancel:H};var P=K.querySelector(".geCommentTxt"),O=K.querySelector(".geCommentActionsList"),V=document.createElement("textarea");V.className=
"geCommentEditTxtArea";V.style.minHeight=P.offsetHeight+"px";V.value=E.content;K.insertBefore(V,P);var p=document.createElement("div");p.className="geCommentEditBtns";var B=mxUtils.button(mxResources.get("cancel"),function(){H?(K.parentNode.removeChild(K),t()):N();n=null});B.className="geCommentEditBtn";p.appendChild(B);var L=mxUtils.button(mxResources.get("save"),function(){P.innerText="";E.content=V.value;mxUtils.write(P,E.content);N();M(E);n=null});mxEvent.addListener(V,"keydown",mxUtils.bind(this,
function(Q){mxEvent.isConsumed(Q)||((mxEvent.isControlDown(Q)||mxClient.IS_MAC&&mxEvent.isMetaDown(Q))&&13==Q.keyCode?(L.click(),mxEvent.consume(Q)):27==Q.keyCode&&(B.click(),mxEvent.consume(Q)))}));L.focus();L.className="geCommentEditBtn gePrimaryBtn";p.appendChild(L);K.insertBefore(p,P);O.style.display="none";P.style.display="none";V.focus()}function C(E,K){K.innerText="";E=new Date(E.modifiedDate);var M=b.timeSince(E);null==M&&(M=mxResources.get("lessThanAMinute"));mxUtils.write(K,mxResources.get("timeAgo",