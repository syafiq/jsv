function db(c,m,v,n,t,z,C,fa,I,wa){C+=I;var ka=n.clone();n.x-=t*(2*C+I);n.y-=z*(2*C+I);t*=C+I;z*=C+I;return function(){c.ellipse(ka.x-t-C,ka.y-z-C,2*C,2*C);wa?c.fillAndStroke():c.stroke()}}mxUtils.extend(b,mxShape);b.prototype.updateBoundsFromLine=function(){var c=null;if(null!=this.line)for(var m=0;m<this.line.length;m++){var v=this.line[m];null!=v&&(v=new mxRectangle(v.x,v.y,this.strokewidth,this.strokewidth),null==c?c=v:c.add(v))}this.bounds=null!=c?c:new mxRectangle};b.prototype.paintVertexShape=