function mxDualRuler(b,g){var k=new mxPoint(mxRuler.prototype.RULER_THICKNESS,mxRuler.prototype.RULER_THICKNESS);this.editorUiGetDiagContOffset=b.getDiagramContainerOffset;b.getDiagramContainerOffset=function(){return k};this.editorUiRefresh=b.refresh;this.ui=b;this.origGuideMove=mxGuide.prototype.move;this.origGuideDestroy=mxGuide.prototype.destroy;this.vRuler=new mxRuler(b,g,!0);this.hRuler=new mxRuler(b,g,!1,!0);g=mxUtils.bind(this,function(d){var t=!1;mxEvent.addGestureListeners(d,mxUtils.bind(this,