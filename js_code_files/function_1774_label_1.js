m)for(t=0;t<m.length;t++)m[t].node.style.visibility=c?"visible":"hidden"};var f=mxGuide.prototype.destroy;mxGuide.prototype.destroy=function(){f.call(this);var c=this.guidesArrVer,l=this.guidesArrHor;if(null!=c){for(var m=0;m<c.length;m++)c[m].destroy();this.guidesArrVer=null}if(null!=l){for(m=0;m<l.length;m++)l[m].destroy();this.guidesArrHor=null}}})();function mxRuler(b,d,f,c){function l(){var C=b.diagramContainer;J.style.top=C.offsetTop-B+"px";J.style.left=C.offsetLeft-B+"px";J.style.width=(f?0:C.offsetWidth)+B+"px";J.style.height=(f?C.offsetHeight:0)+B+"px"}function m(C,H,F){if(null!=t)return C;var T;return function(){var p=this,x=arguments,G=F&&!T;clearTimeout(T);T=setTimeout(function(){T=null;F||C.apply(p,x)},H);G&&C.apply(p,x)}}var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,