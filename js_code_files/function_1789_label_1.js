e.getLinkTitle=function(F){return c.getLinkTitle(F)};e.customLinkClicked=function(F){var L=!1;try{c.handleCustomLink(F),L=!0}catch(P){c.handleError(P)}return L};var n=e.parseBackgroundImage;e.parseBackgroundImage=function(F){var L=n.apply(this,arguments);null!=L&&null!=L.src&&Graph.isPageLink(L.src)&&(L={originalSrc:L.src});return L};var p=e.setBackgroundImage;e.setBackgroundImage=function(F){null!=F&&null!=F.originalSrc&&(F=c.createImageForPageLink(F.originalSrc,c.currentPage,this));p.apply(this,