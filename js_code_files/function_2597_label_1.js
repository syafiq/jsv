var CommentsWindow=function(b,e,k,l,C,p){function D(){for(var aa=J.getElementsByTagName("div"),qa=0,sa=0;sa<aa.length;sa++)"none"!=aa[sa].style.display&&aa[sa].parentNode==J&&qa++;H.style.display=0==qa?"block":"none"}function M(aa,qa,sa,K){function V(){qa.removeChild(X);qa.removeChild(ka);Z.style.display="block";T.style.display="block"}v={div:qa,comment:aa,saveCallback:sa,deleteOnCancel:K};var T=qa.querySelector(".geCommentTxt"),Z=qa.querySelector(".geCommentActionsList"),X=document.createElement("textarea");
X.className="geCommentEditTxtArea";X.style.minHeight=T.offsetHeight+"px";X.value=aa.content;qa.insertBefore(X,T);var ka=document.createElement("div");ka.className="geCommentEditBtns";var q=mxUtils.button(mxResources.get("cancel"),function(){K?(qa.parentNode.removeChild(qa),D()):V();v=null});q.className="geCommentEditBtn";ka.appendChild(q);var E=mxUtils.button(mxResources.get("save"),function(){T.innerText="";aa.content=X.value;mxUtils.write(T,aa.content);V();sa(aa);v=null});mxEvent.addListener(X,
"keydown",mxUtils.bind(this,function(S){mxEvent.isConsumed(S)||((mxEvent.isControlDown(S)||mxClient.IS_MAC&&mxEvent.isMetaDown(S))&&13==S.keyCode?(E.click(),mxEvent.consume(S)):27==S.keyCode&&(q.click(),mxEvent.consume(S)))}));E.focus();E.className="geCommentEditBtn gePrimaryBtn";ka.appendChild(E);qa.insertBefore(ka,T);Z.style.display="none";T.style.display="none";X.focus()}function R(aa,qa){qa.innerText="";aa=new Date(aa.modifiedDate);var sa=b.timeSince(aa);null==sa&&(sa=mxResources.get("lessThanAMinute"));