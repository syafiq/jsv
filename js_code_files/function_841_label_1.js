"center center",n.style.backgroundRepeat="no-repeat",n.style.backgroundSize="100% 100%",n.style.width="24px",n.innerText="");return n};EditorUi.prototype.createToolbarButton=function(e,g,k,n){n=null!=n?n:24;var u=document.createElement("a");u.className="geToolbarButton geAdaptiveAsset";u.setAttribute("title",g);u.style.backgroundImage="url("+e+")";u.style.backgroundPosition="center center";u.style.backgroundRepeat="no-repeat";u.style.backgroundSize="100% 100%";u.style.display="inline-block";u.style.cursor=
"pointer";u.style.marginLeft="6px";u.style.width=n+"px";u.style.height=n+"px";null!=k&&(mxEvent.addListener(u,mxClient.IS_POINTER?"pointerdown":"mousedown",mxUtils.bind(this,function(v){v.preventDefault()})),mxEvent.addListener(u,"click",function(v){"disabled"!=u.getAttribute("disabled")&&k(v);mxEvent.consume(v)}));return u};EditorUi.prototype.createMenuItem=function(e,g,k){var n=this.actions.get(e),u=null!=n?n.funct:null,v=this.createToolbarButton(g,mxResources.get(e),u);null==n||k||(e=function(){n.isEnabled()?