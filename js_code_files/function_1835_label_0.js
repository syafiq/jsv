Graph.prototype.createLayouts=function(b){for(var e=[],k=0;k<b.length;k++)if(0<=mxUtils.indexOf(Graph.layoutNames,b[k].layout)){var l=new window[b[k].layout](this);if(null!=b[k].config)for(var B in b[k].config)l[B]=b[k].config[B];e.push(l)}else throw Error(mxResources.get("invalidCallFnNotFound",[b[k].layout]));return e};