function(O){var U=mxUtils.getOffset(this.diagramContainer);0<mxEvent.getClientX(O)-U.x-this.diagramContainer.clientWidth||0<mxEvent.getClientY(O)-U.y-this.diagramContainer.clientHeight?this.diagramContainer.setAttribute("title",mxResources.get("panTooltip")):this.diagramContainer.removeAttribute("title")}));var C=!1,N=this.hoverIcons.isResetEvent;this.hoverIcons.isResetEvent=function(O,U){return C||N.apply(this,arguments)};this.keydownHandler=mxUtils.bind(this,function(O){32!=O.which||e.isEditing()?