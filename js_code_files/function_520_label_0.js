desc:b.getResource(J.desc),image:J.preview})}u.push(F)}for(v=0;v<k.length;v++)if(null==b.sidebar.enabledLibraries)u.push(k[v]);else{F={title:k[v].title,entries:[]};for(I=0;I<k[v].entries.length;I++)0<=mxUtils.indexOf(b.sidebar.enabledLibraries,k[v].entries[I].id)&&F.entries.push(k[v].entries[I]);0<F.entries.length&&u.push(F)}k=u;if(f){v=mxUtils.bind(this,function(U){for(var m=0;m<U.length;m++)(function(t){var z=g.cloneNode(!1);z.style.fontWeight="bold";z.style.backgroundColor=Editor.isDarkMode()?
"#505759":"#e5e5e5";z.style.padding="6px 0px 6px 20px";mxUtils.write(z,t.title);D.appendChild(z);for(var H=0;H<t.entries.length;H++)(function(L){var E=g.cloneNode(!1);E.style.cursor="pointer";E.style.padding="4px 0px 4px 20px";E.style.whiteSpace="nowrap";E.style.overflow="hidden";E.style.textOverflow="ellipsis";E.setAttribute("title",L.title+" ("+L.id+")");var M=document.createElement("input");M.setAttribute("type","checkbox");M.checked=b.sidebar.isEntryVisible(L.id);M.defaultChecked=M.checked;E.appendChild(M);
mxUtils.write(E," "+L.title);D.appendChild(E);var P=function(T){if(null==T||"INPUT"!=mxEvent.getSource(T).nodeName){N.style.textAlign="center";N.style.padding="0px";N.style.color="";N.innerText="";if(null!=L.desc){var V=document.createElement("pre");V.style.boxSizing="border-box";V.style.fontFamily="inherit";V.style.margin="20px";V.style.right="0px";V.style.textAlign="left";mxUtils.write(V,L.desc);N.appendChild(V)}null!=L.imageCallback?L.imageCallback(N):null!=L.image?N.innerHTML+='<img border="0" style="max-width:100%;" src="'+
L.image+'"/>':null==L.desc&&(N.style.padding="20px",N.style.color="rgb(179, 179, 179)",mxUtils.write(N,mxResources.get("noPreview")));null!=c&&(c.style.backgroundColor="");c=E;c.style.backgroundColor=Editor.isDarkMode()?"#000000":"#ebf2f9";null!=T&&mxEvent.consume(T)}};mxEvent.addListener(E,"click",P);mxEvent.addListener(E,"dblclick",function(T){M.checked=!M.checked;mxEvent.consume(T)});e.push(function(){return M.checked?L.id:null});0==m&&0==H&&P()})(t.entries[H])})(U[m])});I=document.createElement("div");
I.className="geDialogTitle";mxUtils.write(I,mxResources.get("shapes"));I.style.position="absolute";I.style.top="0px";I.style.left="0px";I.style.lineHeight="40px";I.style.height="40px";I.style.right="0px";var D=document.createElement("div"),N=document.createElement("div");D.style.position="absolute";D.style.top="40px";D.style.left="0px";D.style.width="202px";D.style.bottom="60px";D.style.overflow="auto";N.style.position="absolute";N.style.left="202px";N.style.right="0px";N.style.top="40px";N.style.bottom=
"60px";N.style.overflow="auto";N.style.borderLeft="1px solid rgb(211, 211, 211)";N.style.textAlign="center";var c=null,e=[],g=document.createElement("div");g.style.position="relative";g.style.left="0px";g.style.right="0px";v(k);d.style.padding="30px";d.appendChild(I);d.appendChild(D);d.appendChild(N);k=document.createElement("div");k.className="geDialogFooter";k.style.position="absolute";k.style.paddingRight="16px";k.style.color="gray";k.style.left="0px";k.style.right="0px";k.style.bottom="0px";k.style.height=
"60px";k.style.lineHeight="52px";var n=document.createElement("input");n.setAttribute("type","checkbox");n.style.position="relative";n.style.top="1px";n.checked=b.sidebar.sidebarTitles;n.defaultChecked=n.checked;k.appendChild(n);v=document.createElement("span");mxUtils.write(v," "+mxResources.get("labels"));v.style.paddingRight="20px";k.appendChild(v);mxEvent.addListener(v,"click",function(U){n.checked=!n.checked;mxEvent.consume(U)});var q=document.createElement("input");q.setAttribute("type","checkbox");
if(isLocalStorage||mxClient.IS_CHROMEAPP)v=document.createElement("span"),v.style.paddingRight="20px",v.appendChild(q),mxUtils.write(v," "+mxResources.get("rememberThisSetting")),q.style.position="relative",q.style.top="1px",q.checked=!0,q.defaultChecked=!0,mxEvent.addListener(v,"click",function(U){mxEvent.getSource(U)!=q&&(q.checked=!q.checked,mxEvent.consume(U))}),k.appendChild(v);v=mxUtils.button(mxResources.get("cancel"),function(){b.hideDialog()});v.className="geBtn";I=mxUtils.button(mxResources.get("apply"),
function(){b.hideDialog();for(var U=[],m=0;m<e.length;m++){var t=e[m].apply(this,arguments);null!=t&&U.push(t)}"1"==urlParams.sketch&&b.isSettingsEnabled()&&(m=mxUtils.indexOf(U,".scratchpad"),null!=b.scratchpad!=(0<=m&&0<U.splice(m,1).length)&&b.toggleScratchpad(),m=mxUtils.indexOf(U,"search"),mxSettings.settings.search=0<=m&&0<U.splice(m,1).length,b.sidebar.showPalette("search",mxSettings.settings.search),q.checked&&mxSettings.save());b.sidebar.showEntries(U.join(";"),q.checked,!0);b.setSidebarTitles(n.checked,
q.checked)});I.className="geBtn gePrimaryBtn"}else{var p=document.createElement("table");v=document.createElement("tbody");d.style.height="100%";d.style.overflow="auto";I=document.createElement("tr");p.style.width="100%";f=document.createElement("td");u=document.createElement("td");A=document.createElement("td");var y=mxUtils.bind(this,function(U,m,t){var z=document.createElement("input");z.type="checkbox";p.appendChild(z);z.checked=b.sidebar.isEntryVisible(t);var H=document.createElement("span");
mxUtils.write(H,m);m=document.createElement("div");m.style.display="block";m.appendChild(z);m.appendChild(H);mxEvent.addListener(H,"click",function(L){z.checked=!z.checked;mxEvent.consume(L)});U.appendChild(m);return function(){return z.checked?t:null}});I.appendChild(f);I.appendChild(u);I.appendChild(A);v.appendChild(I);p.appendChild(v);e=[];var B=0;for(v=0;v<k.length;v++)for(I=0;I<k[v].entries.length;I++)B++;var G=[f,u,A],C=0;for(v=0;v<k.length;v++)(function(U){for(var m=0;m<U.entries.length;m++){var t=
U.entries[m];e.push(y(G[Math.floor(C/(B/3))],t.title,t.id));C++}})(k[v]);d.appendChild(p);k=document.createElement("div");k.style.marginTop="18px";k.style.textAlign="center";q=document.createElement("input");isLocalStorage&&(q.setAttribute("type","checkbox"),q.checked=!0,q.defaultChecked=!0,k.appendChild(q),v=document.createElement("span"),mxUtils.write(v," "+mxResources.get("rememberThisSetting")),k.appendChild(v),mxEvent.addListener(v,"click",function(U){q.checked=!q.checked;mxEvent.consume(U)}));
d.appendChild(k);v=mxUtils.button(mxResources.get("cancel"),function(){b.hideDialog()});v.className="geBtn";I=mxUtils.button(mxResources.get("apply"),function(){for(var U=["search"],m=0;m<e.length;m++){var t=e[m].apply(this,arguments);null!=t&&U.push(t)}b.sidebar.showEntries(0<U.length?U.join(";"):"",q.checked);b.hideDialog()});I.className="geBtn gePrimaryBtn";k=document.createElement("div");k.style.marginTop="26px";k.style.textAlign="right"}b.editor.cancelFirst?(k.appendChild(v),k.appendChild(I)):
(k.appendChild(I),k.appendChild(v));d.appendChild(k);this.container=d},PluginsDialog=function(b,f,k,d){function u(){I=!0;if(0==F.length)A.innerText=mxResources.get("noPlugins");else{A.innerText="";for(var g=0;g<F.length;g++){var n=document.createElement("span");n.style.whiteSpace="nowrap";var q=document.createElement("span");q.className="geSprite geSprite-delete";q.style.position="relative";q.style.cursor="pointer";q.style.top="5px";q.style.marginRight="4px";q.style.display="inline-block";n.appendChild(q);