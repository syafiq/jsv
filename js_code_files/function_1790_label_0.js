function(d,g){if(Graph.isPageLink(g)){var k=d[g.substring(g.indexOf(",")+1)];g=null!=k?"data:page/id,"+k:null}else if("data:action/json,"==g.substring(0,17))try{var n=JSON.parse(g.substring(17));if(null!=n.actions){for(var x=0;x<n.actions.length;x++){var u=n.actions[x];if(null!=u.open&&Graph.isPageLink(u.open)){var D=u.open.substring(u.open.indexOf(",")+1);k=d[D];null!=k?u.open="data:page/id,"+k:null==this.getPageById(D)&&delete u.open}}g="data:action/json,"+JSON.stringify(n)}}catch(F){}return g};