arguments);"simple"!=Editor.currentTheme&&"1"!=urlParams.sketch&&"min"!=uiTheme||this.addMenuItems(p,["-","outline","fullscreen"],x)});A=this.get("layout");var n=A.funct;A.funct=function(p,x){n.apply(this,arguments);p.addItem(mxResources.get("orgChart"),null,function(){var G=null,K=20,N=20,I=function(){if("undefined"!==typeof mxOrgChartLayout&&null!=G){var L=c.editor.graph,U=new mxOrgChartLayout(L,G,K,N),O=L.getDefaultParent();1<L.model.getChildCount(L.getSelectionCell())&&(O=L.getSelectionCell());
U.execute(O)}},M=document.createElement("div"),Q=document.createElement("div");Q.style.marginTop="6px";Q.style.display="inline-block";Q.style.width="140px";mxUtils.write(Q,mxResources.get("orgChartType")+": ");M.appendChild(Q);var P=document.createElement("select");P.style.width="200px";P.style.boxSizing="border-box";Q=[mxResources.get("linear"),mxResources.get("hanger2"),mxResources.get("hanger4"),mxResources.get("fishbone1"),mxResources.get("fishbone2"),mxResources.get("1ColumnLeft"),mxResources.get("1ColumnRight"),