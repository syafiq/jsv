C[0],F=C[1],T=C[2];C=C.slice(3,C.length).join("/");A.value=DRAWIO_GITLAB_URL+"/"+H+"/"+F+"/blob/"+T+"/"+C;A.focus()}})});mxEvent.addListener(A,"keypress",function(C){13==C.keyCode&&(b.hideDialog(),c(g.checked?k.value:A.value,LinkDialog.selectedDocs))});E.appendChild(v);b.editor.cancelFirst||E.appendChild(f);B.appendChild(E);this.container=B},FeedbackDialog=function(b,d,f,c){var l=document.createElement("div"),m=document.createElement("div");mxUtils.write(m,mxResources.get("sendYourFeedback"));m.style.fontSize=
"18px";m.style.marginBottom="18px";l.appendChild(m);m=document.createElement("div");mxUtils.write(m,mxResources.get("yourEmailAddress")+(f?"":" ("+mxResources.get("required")+")"));l.appendChild(m);var t=document.createElement("input");t.setAttribute("type","text");t.style.marginTop="6px";t.style.width="600px";var y=mxUtils.button(mxResources.get("sendMessage"),function(){var J=A.value+(z.checked?"\nDiagram:\n"+(null!=c?c:mxUtils.getXml(b.getXmlFileData())):"")+"\nuserAgent:\n"+navigator.userAgent+
"\nappVersion:\n"+navigator.appVersion+"\nappName:\n"+navigator.appName+"\nplatform:\n"+navigator.platform;J.length>FeedbackDialog.maxAttachmentSize?b.alert(mxResources.get("drawingTooLarge")):(b.hideDialog(),b.spinner.spin(document.body)&&mxUtils.post(null!=FeedbackDialog.feedbackUrl?FeedbackDialog.feedbackUrl:"/email","email="+encodeURIComponent(t.value)+"&version="+encodeURIComponent(EditorUi.VERSION)+"&url="+encodeURIComponent(window.location.href)+"&body="+encodeURIComponent((null!=d?d:"Feedback")+
":\n"+J),function(e){b.spinner.stop();200<=e.getStatus()&&299>=e.getStatus()?b.alert(mxResources.get("feedbackSent")):b.alert(mxResources.get("errorSendingFeedback"))},function(){b.spinner.stop();b.alert(mxResources.get("errorSendingFeedback"))}))});y.className="geBtn gePrimaryBtn";if(!f){y.setAttribute("disabled","disabled");var B=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;mxEvent.addListener(t,
"change",function(){0<t.value.length&&0<B.test(t.value)?y.removeAttribute("disabled"):y.setAttribute("disabled","disabled")});mxEvent.addListener(t,"keyup",function(){0<t.value.length&&B.test(t.value)?y.removeAttribute("disabled"):y.setAttribute("disabled","disabled")})}l.appendChild(t);this.init=function(){t.focus()};var z=document.createElement("input");z.setAttribute("type","checkbox");z.setAttribute("checked","checked");z.defaultChecked=!0;f=document.createElement("p");f.style.marginTop="14px";
f.appendChild(z);m=document.createElement("span");mxUtils.write(m," "+mxResources.get("includeCopyOfMyDiagram"));f.appendChild(m);mxEvent.addListener(m,"click",function(J){z.checked=!z.checked;mxEvent.consume(J)});l.appendChild(f);m=document.createElement("div");mxUtils.write(m,mxResources.get("feedback"));l.appendChild(m);var A=document.createElement("textarea");A.style.resize="none";A.style.width="600px";A.style.height="140px";A.style.marginTop="6px";A.setAttribute("placeholder",mxResources.get("comments"));
l.appendChild(A);f=document.createElement("div");f.style.marginTop="26px";f.style.textAlign="right";m=mxUtils.button(mxResources.get("cancel"),function(){b.hideDialog()});m.className="geBtn";b.editor.cancelFirst?(f.appendChild(m),f.appendChild(y)):(f.appendChild(y),f.appendChild(m));l.appendChild(f);this.container=l},PreferencesDialog=function(b){function d(){var A=document.createElement("div");A.style.userSelect="none";A.style.display="flex";A.style.gap="8px";A.style.padding="6px 10px 6px 0px";A.style.alignItems=