HoverIcons.prototype.setCurrentState=function(b){"eastwest"!=b.style.portConstraint&&(this.graph.container.appendChild(this.arrowUp),this.graph.container.appendChild(this.arrowDown));this.graph.container.appendChild(this.arrowRight);this.graph.container.appendChild(this.arrowLeft);this.currentState=b};Graph.prototype.createParent=function(b,e,k,l,B){b=this.cloneCell(b);for(var q=0;q<k;q++){var D=this.cloneCell(e),N=this.getCellGeometry(D);null!=N&&(N.x+=q*l,N.y+=q*B);b.insert(D)}return b};