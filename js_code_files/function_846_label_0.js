6),x=l.getAttribute("viewBox"),null!=x&&0<x.length&&(x=x.split(" "),3<x.length&&(w=parseFloat(x[2])+6,h=parseFloat(x[3])+6,l.setAttribute("viewBox",x[0]+" "+x[1]+" "+w+" "+h))))));return Q};Graph.prototype.setShadowVisible=function(l,x){mxClient.IS_SVG&&!mxClient.IS_SF&&(x=null!=x?x:!0,(this.shadowVisible=l)?this.view.getDrawPane().setAttribute("filter","url(#"+this.shadowId+")"):this.view.getDrawPane().removeAttribute("filter"),x&&this.fireEvent(new mxEventObject("shadowVisibleChanged")))};Graph.prototype.selectUnlockedLayer=