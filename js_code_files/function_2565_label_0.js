Dialog.prototype.close=function(b,e){if(null!=this.onDialogClose){if(0==this.onDialogClose(b,e))return!1;this.onDialogClose=null}null!=this.dialogImg&&null!=this.dialogImg.parentNode&&(this.dialogImg.parentNode.removeChild(this.dialogImg),this.dialogImg=null);null!=this.bg&&null!=this.bg.parentNode&&this.bg.parentNode.removeChild(this.bg);mxEvent.removeListener(window,"resize",this.resizeListener);null!=this.container.parentNode&&this.container.parentNode.removeChild(this.container)};