EditorUi.prototype.createImageForPageLink=function(b,e,k){var l=b.indexOf(","),B=null;0<l&&(l=this.getPageById(b.substring(l+1)),null!=l&&l!=e&&(B=this.getImageForPage(l,e,k),B.originalSrc=b));null==B&&(B={originalSrc:b});return B};