function(d,f){function g(){var P=document.createElement("div");P.style.width="100%";P.style.height="100%";P.style.boxSizing="border-box";null!=A&&A!=mxConstants.NONE?(P.style.border="1px solid black",P.style.backgroundColor=A):(P.style.backgroundPosition="center center",P.style.backgroundRepeat="no-repeat",P.style.backgroundImage="url('"+Dialog.prototype.closeImage+"')");H.innerText="";H.appendChild(P)}mxUtils.write(d,mxResources.get("links")+":");var u=document.createElement("select");u.style.width=
"100px";u.style.padding="0px";u.style.marginLeft="8px";u.style.marginRight="10px";u.className="geBtn";var x=document.createElement("option");x.setAttribute("value","auto");mxUtils.write(x,mxResources.get("automatic"));u.appendChild(x);x=document.createElement("option");x.setAttribute("value","blank");mxUtils.write(x,mxResources.get("openInNewWindow"));u.appendChild(x);x=document.createElement("option");x.setAttribute("value","self");mxUtils.write(x,mxResources.get("openInThisWindow"));u.appendChild(x);
f&&(f=document.createElement("option"),f.setAttribute("value","frame"),mxUtils.write(f,mxResources.get("openInThisWindow")+" ("+mxResources.get("iframe")+")"),u.appendChild(f));d.appendChild(u);mxUtils.write(d,mxResources.get("borderColor")+":");var A="#0000ff",H=null;H=mxUtils.button("",mxUtils.bind(this,function(P){this.pickColor(A||"none",function(M){A=M;g()});mxEvent.consume(P)}));g();H.style.padding=mxClient.IS_FF?"4px 2px 4px 2px":"4px";H.style.marginLeft="4px";H.style.height="22px";H.style.width=
"22px";H.style.position="relative";H.style.top=mxClient.IS_IE||mxClient.IS_IE11||mxClient.IS_EDGE?"6px":"1px";H.className="geColorBtn";d.appendChild(H);mxUtils.br(d);return{getColor:function(){return A},getTarget:function(){return u.value},focus:function(){u.focus()}}};EditorUi.prototype.createUrlParameters=function(d,f,g,u,x,A,H){H=null!=H?H:[];u&&("https://viewer.diagrams.net"==EditorUi.lightboxHost&&"1"!=urlParams.dev||H.push("lightbox=1"),"auto"!=d&&H.push("target="+d),null!=f&&f!=mxConstants.NONE&&