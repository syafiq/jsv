mxClient.IS_SVG&&(sa.style.pointerEvents="none");this.previewElementWidth=sa.style.width;this.previewElementHeight=sa.style.height;return sa};var U=F.dragEnter;F.dragEnter=function(ea,sa){null!=n.hoverIcons&&n.hoverIcons.setDisplay("none");U.apply(this,arguments)};var J=F.dragExit;F.dragExit=function(ea,sa){null!=n.hoverIcons&&n.hoverIcons.setDisplay("");J.apply(this,arguments)};F.dragOver=function(ea,sa){mxDragSource.prototype.dragOver.apply(this,arguments);null!=this.currentGuide&&null!=V&&this.currentGuide.hide();