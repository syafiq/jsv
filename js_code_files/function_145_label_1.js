this.clearDefaultStyle=function(){e.currentEdgeStyle=mxUtils.clone(e.defaultEdgeStyle);e.currentVertexStyle=mxUtils.clone(e.defaultVertexStyle);v=m=!1;this.fireEvent(new mxEventObject("styleChanged","keys",[],"values",[],"cells",[]))};var r=["fontFamily","fontSource","fontSize","fontColor"];for(b=0;b<r.length;b++)0>mxUtils.indexOf(d,r[b])&&d.push(r[b]);var x="edgeStyle startArrow startFill startSize endArrow endFill endSize".split(" "),B=[["startArrow","startFill","endArrow","endFill"],["startSize",