Q.x+=e,k||(Q.width-=e,null!=Q.alternateBounds&&(Q.alternateBounds.width-=e)),l.setGeometry(L,Q)))}if(M||k){var d=this.getCellGeometry(p);null!=d&&(d=d.clone(),d.width+=e,l.setGeometry(p,d))}null!=this.layoutManager&&this.layoutManager.executeLayout(p)}finally{l.endUpdate()}};function TableLayout(b){mxGraphLayout.call(this,b)}TableLayout.prototype=new mxStackLayout;TableLayout.prototype.constructor=TableLayout;TableLayout.prototype.isHorizontal=function(){return!1};