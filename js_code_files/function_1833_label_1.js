ArrangePanel.prototype.addAlign=function(a){var b=this.editorUi.getSelectionState(),f=this.editorUi.editor.graph;a.style.paddingTop="6px";a.style.paddingBottom="8px";a.appendChild(this.createTitle(mxResources.get("align")));var e=document.createElement("div");e.style.position="relative";e.style.whiteSpace="nowrap";e.style.paddingLeft="0px";e.style.paddingBottom="2px";e.style.borderWidth="0px";e.style.width="220px";e.className="geToolbarContainer";if(1<b.vertices.length){b=this.editorUi.toolbar.addButton("geSprite-alignleft",
mxResources.get("left"),function(){f.alignCells(mxConstants.ALIGN_LEFT)},e);var g=this.editorUi.toolbar.addButton("geSprite-aligncenter",mxResources.get("center"),function(){f.alignCells(mxConstants.ALIGN_CENTER)},e),d=this.editorUi.toolbar.addButton("geSprite-alignright",mxResources.get("right"),function(){f.alignCells(mxConstants.ALIGN_RIGHT)},e),h=this.editorUi.toolbar.addButton("geSprite-aligntop",mxResources.get("top"),function(){f.alignCells(mxConstants.ALIGN_TOP)},e),n=this.editorUi.toolbar.addButton("geSprite-alignmiddle",
mxResources.get("middle"),function(){f.alignCells(mxConstants.ALIGN_MIDDLE)},e),v=this.editorUi.toolbar.addButton("geSprite-alignbottom",mxResources.get("bottom"),function(){f.alignCells(mxConstants.ALIGN_BOTTOM)},e);this.styleButtons([b,g,d,h,n,v]);d.style.marginRight="10px"}a.appendChild(e);this.addActions(a,["snapToGrid"]);return a};