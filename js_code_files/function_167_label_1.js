g.prototype.paintVertexShape=function(c,m,u,n,t){c.translate(m,u);m=Math.max(0,Math.min(n,parseFloat(mxUtils.getValue(this.style,"tabWidth",this.tabWidth))));u=Math.max(0,Math.min(t,parseFloat(mxUtils.getValue(this.style,"tabHeight",this.tabHeight))));var z=mxUtils.getValue(this.style,"tabPosition",this.tabPosition),B=mxUtils.getValue(this.style,"rounded",!1),fa=mxUtils.getValue(this.style,"absoluteArcSize",!1),I=parseFloat(mxUtils.getValue(this.style,"arcSize",this.arcSize));fa||(I*=Math.min(n,t));
I=Math.min(I,.5*n,.5*(t-u));m=Math.max(m,I);m=Math.min(n-I,m);B||(I=0);c.begin();"left"==z?(c.moveTo(Math.max(I,0),u),c.lineTo(Math.max(I,0),0),c.lineTo(m,0),c.lineTo(m,u)):(c.moveTo(n-m,u),c.lineTo(n-m,0),c.lineTo(n-Math.max(I,0),0),c.lineTo(n-Math.max(I,0),u));B?(c.moveTo(0,I+u),c.arcTo(I,I,0,0,1,I,u),c.lineTo(n-I,u),c.arcTo(I,I,0,0,1,n,I+u),c.lineTo(n,t-I),c.arcTo(I,I,0,0,1,n-I,t),c.lineTo(I,t),c.arcTo(I,I,0,0,1,0,t-I)):(c.moveTo(0,u),c.lineTo(n,u),c.lineTo(n,t),c.lineTo(0,t));c.close();c.fillAndStroke();
c.setShadow(!1);"triangle"==mxUtils.getValue(this.style,"folderSymbol",null)&&(c.begin(),c.moveTo(n-30,u+20),c.lineTo(n-20,u+10),c.lineTo(n-10,u+20),c.close(),c.stroke())};mxCellRenderer.registerShape("folder",g);g.prototype.getLabelMargins=function(c){if(mxUtils.getValue(this.style,"boundedLbl",!1)){var m=mxUtils.getValue(this.style,"tabHeight",15)*this.scale;if(mxUtils.getValue(this.style,"labelInHeader",!1)){var u=mxUtils.getValue(this.style,"tabWidth",15)*this.scale;m=mxUtils.getValue(this.style,