0<this.model.getChildCount(h)&&(h=this.model.getChildAt(h,0),n=this.getCellStyle(h),n=parseInt(mxUtils.getValue(n,mxConstants.STYLE_STARTSIZE,0)));if(this.isTableRow(h)&&(!this.isSwimlane(h)||0==n)&&""==this.getLabel(h)&&0<this.model.getChildCount(h))for(n=0;n<this.model.getChildCount(h);n++){var u=this.model.getChildAt(h,n);if(this.isCellEditable(u)){h=u;break}}return h};Graph.prototype.copyStyle=function(h){return this.getCellStyle(h,!1)};Graph.prototype.pasteStyle=function(h,n,u){u=null!=u?u:Graph.pasteStyles;