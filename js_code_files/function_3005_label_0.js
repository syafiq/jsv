6),B=p.getAttribute("viewBox"),null!=B&&0<B.length&&(B=B.split(" "),3<B.length&&(w=parseFloat(B[2])+6,h=parseFloat(B[3])+6,p.setAttribute("viewBox",B[0]+" "+B[1]+" "+w+" "+h))))));return R};Graph.prototype.setShadowVisible=function(p,B){mxClient.IS_SVG&&!mxClient.IS_SF&&(B=null!=B?B:!0,(this.shadowVisible=p)?this.view.getDrawPane().setAttribute("filter","url(#"+this.shadowId+")"):this.view.getDrawPane().removeAttribute("filter"),B&&this.fireEvent(new mxEventObject("shadowVisibleChanged")))};Graph.prototype.selectUnlockedLayer=