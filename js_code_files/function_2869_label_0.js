620,420,!0,!1);q.init()}));var g="horizontalFlow verticalFlow - horizontalTree verticalTree radialTree - organic circle".split(" "),n=function(q,p,y,B){q.addItem(y,null,mxUtils.bind(this,function(){var G=new CreateGraphDialog(c,y,B);c.showDialog(G.container,620,420,!0,!1);G.init()}),p)};this.put("insertLayout",new Menu(mxUtils.bind(this,function(q,p){for(var y=0;y<g.length;y++)"-"==g[y]?q.addSeparator(p):n(q,p,mxResources.get(g[y])+"...",g[y])})))};EditorUi.prototype.installFormatToolbar=function(c){var e=