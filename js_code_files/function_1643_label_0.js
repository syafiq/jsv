function(d,f,g){var u=new XMLHttpRequest;u.open("POST",OPEN_URL);u.setRequestHeader("Content-Type","application/x-www-form-urlencoded");u.onreadystatechange=function(){f(u)};u.send("format=xml&filename="+encodeURIComponent(g)+"&data="+encodeURIComponent(d));try{EditorUi.logEvent({category:"GLIFFY-IMPORT-FILE",action:"size_"+file.size})}catch(x){}};EditorUi.prototype.isResampleImageSize=function(d,f){f=null!=f?f:this.resampleThreshold;return d>f};EditorUi.prototype.resizeImage=function(d,f,g,u,x,A,