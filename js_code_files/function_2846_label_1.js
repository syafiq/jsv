C,p,D,M,R),mxUtils.bind(this,function(G){return this.isTreeEdge(G)}))};Graph.prototype.getIncomingTreeEdges=function(l,C){return this.getTreeEdges(l,C,!0,!1,!1)};Graph.prototype.getOutgoingTreeEdges=function(l,C){return this.getTreeEdges(l,C,!1,!0,!1)};var e=EditorUi.prototype.init;EditorUi.prototype.init=function(){e.apply(this,arguments);this.editor.isChromelessView()&&!this.editor.editable||this.addTrees()};EditorUi.prototype.addTrees=function(){function l(K){return v.isVertex(K)&&p(K)}function C(K){var V=