d.appendChild(C),Q.appendChild(d),mxEvent.addListener(C,"click",function(v){f.checked=!f.checked;mxEvent.consume(v)})):G.style.marginTop="12px";this.init=function(){g.focus()};this.container=Q};function DiagramPage(b,e){this.node=b;null!=e?this.node.setAttribute("id",e):null==this.getId()&&this.node.setAttribute("id",Editor.guid())}DiagramPage.prototype.node=null;DiagramPage.prototype.root=null;DiagramPage.prototype.viewState=null;DiagramPage.prototype.getId=function(){return this.node.getAttribute("id")};DiagramPage.prototype.getName=function(){return this.node.getAttribute("name")};