function(){var d=this.formatWindow;return null!=d?d.window.isVisible():D.apply(this,arguments)};var N=EditorUi.prototype.refresh;EditorUi.prototype.refresh=function(d){if(null!=this.sketchWrapperElt&&null!=this.sketchWrapperElt.parentNode){d=null!=d?d:!0;if("1"!=urlParams.embedInline){var f=this.getDiagramContainerOffset();this.diagramContainer.style.left=f.x+"px";this.diagramContainer.style.top=f.y+"px";this.diagramContainer.style.right="0";this.diagramContainer.style.bottom="0"}d&&this.editor.graph.sizeDidChange()}else N.apply(this,