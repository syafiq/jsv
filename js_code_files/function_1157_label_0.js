var ErrorDialog=function(b,e,k,l,B,q,D,N,S,F,K){S=null!=S?S:!0;var R=document.createElement("div");R.style.textAlign="center";if(null!=e){var d=document.createElement("div");d.style.padding="0px";d.style.margin="0px";d.style.fontSize="18px";d.style.paddingBottom="16px";d.style.marginBottom="10px";d.style.borderBottom="1px solid #c0c0c0";d.style.color="gray";d.style.whiteSpace="nowrap";d.style.textOverflow="ellipsis";d.style.overflow="hidden";mxUtils.write(d,e);d.setAttribute("title",e);R.appendChild(d)}e=
document.createElement("div");e.style.lineHeight="1.2em";e.style.padding="6px";e.innerHTML=k;R.appendChild(e);k=document.createElement("div");k.style.marginTop="12px";k.style.textAlign="center";null!=q&&(e=mxUtils.button(mxResources.get("tryAgain"),function(){b.hideDialog();q()}),e.className="geBtn",k.appendChild(e),k.style.textAlign="center");null!=F&&(F=mxUtils.button(F,function(){null!=K&&K()}),F.className="geBtn",k.appendChild(F));var f=mxUtils.button(l,function(){S&&b.hideDialog();null!=B&&B()});
f.className="geBtn";k.appendChild(f);null!=D&&(l=mxUtils.button(D,function(){S&&b.hideDialog();null!=N&&N()}),l.className="geBtn gePrimaryBtn",k.appendChild(l));this.init=function(){f.focus()};R.appendChild(k);this.container=R},PrintDialog=function(b,e){this.create(b,e)};