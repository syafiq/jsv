ua.size,sa,Ia)):"readOnly"==va?(Ia=document.createElement("input"),Ia.setAttribute("readonly",""),Ia.value=la,Ia.style.width="96px",Ia.style.borderWidth="0px",na.appendChild(Ia)):(na.innerHTML=mxUtils.htmlEntities(decodeURIComponent(la)),mxEvent.addListener(na,"click",mxUtils.bind(Z,function(){function Ca(){var ja=da.value;ja=0==ja.length&&"string"!=va?0:ja;ua.allowAuto&&(null!=ja.trim&&"auto"==ja.trim().toLowerCase()?(ja="auto",va="string"):(ja=parseFloat(ja),ja=isNaN(ja)?0:ja));null!=ua.min&&ja<
ua.min?ja=ua.min:null!=ua.max&&ja>ua.max&&(ja=ua.max);ja=encodeURIComponent(("int"==va?parseInt(ja):ja)+"");Q(ta,ja,ua)}var da=document.createElement("input");S(na,da,!0);da.value=decodeURIComponent(la);da.className="gePropEditor";"int"!=va&&"float"!=va||ua.allowAuto||(da.type="number",da.step="int"==va?"1":"any",null!=ua.min&&(da.min=parseFloat(ua.min)),null!=ua.max&&(da.max=parseFloat(ua.max)));p.appendChild(da);mxEvent.addListener(da,"keypress",function(ja){13==ja.keyCode&&Ca()});da.focus();mxEvent.addListener(da,