EditorUi.prototype.parseFileData=function(d,g,k){var n=new XMLHttpRequest;n.open("POST",OPEN_URL);n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");n.onreadystatechange=function(){g(n)};n.send("format=xml&filename="+encodeURIComponent(k)+"&data="+encodeURIComponent(d));try{EditorUi.logEvent({category:"GLIFFY-IMPORT-FILE",action:"size_"+file.size})}catch(x){}};EditorUi.prototype.isResampleImageSize=function(d,g){g=null!=g?g:this.resampleThreshold;return d>g};EditorUi.prototype.resizeImage=