pa.style.alignItems="center";ma=document.createElement("img");ma.setAttribute("src",Da);ma.setAttribute("alt",ua);ma.style.maxWidth=xa+"px";ma.style.maxHeight=ta+"px";Ga=ma;var Ka=Da.replace(".drawio.xml","").replace(".drawio","").replace(".xml","");pa.appendChild(ma);ma.onerror=function(){this.src!=Ka?this.src=Ka:(this.src=Editor.errorImage,this.onerror=null)};mxEvent.addGestureListeners(pa,mxUtils.bind(this,function(Ha){H(pa,null,null,ia,fa,ya)}),null,null);mxEvent.addListener(pa,"dblclick",function(Ha){C();