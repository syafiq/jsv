Number(n.value)),0<mxUtils.trim(q.value).length&&(G.height=Number(q.value))),k.getModel().setGeometry(f[B],G));0<mxUtils.trim(p.value).length&&k.setCellStyles(mxConstants.STYLE_ROTATION,Number(p.value),[f[B]])}}finally{k.getModel().endUpdate()}});y.className="geBtn gePrimaryBtn";mxEvent.addListener(u,"keypress",function(B){13==B.keyCode&&y.click()});v=document.createElement("div");v.style.marginTop="20px";v.style.textAlign="right";b.editor.cancelFirst?(v.appendChild(d),v.appendChild(y)):(v.appendChild(y),