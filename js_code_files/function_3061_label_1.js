EditorUi.prototype.createTabForPage=function(b,e,k,l){k=this.createTab(k);var C=b.getName()||mxResources.get("untitled"),p=b.getId();k.setAttribute("title",C+(null!=p?" ("+p+")":"")+" ["+l+"]");mxUtils.write(k,C);k.style.maxWidth=e+"px";k.style.width=e+"px";this.addTabListeners(b,k);42<e&&(k.style.textOverflow="ellipsis");return k};