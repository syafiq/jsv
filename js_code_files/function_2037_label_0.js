allowedDomains:["app.diagrams.net"]},setMigratedFlag:{isAsync:!1,allowedDomains:["app.diagrams.net"]}};EditorUi.prototype.remoteInvokeCallbacks=[];EditorUi.prototype.remoteInvokeQueue=[];EditorUi.prototype.handleRemoteInvokeReady=function(d){this.remoteWin=d;for(var f=0;f<this.remoteInvokeQueue.length;f++)d.postMessage(this.remoteInvokeQueue[f],"*");this.remoteInvokeQueue=[]};EditorUi.prototype.handleRemoteInvokeResponse=function(d){var f=d.msgMarkers,g=this.remoteInvokeCallbacks[f.callbackId];if(null==
g)throw Error("No callback for "+(null!=f?f.callbackId:"null"));d.error?g.error&&g.error(d.error.errResp):g.callback&&g.callback.apply(this,d.resp);this.remoteInvokeCallbacks[f.callbackId]=null};EditorUi.prototype.remoteInvoke=function(d,f,g,u,x){var A=!0,H=window.setTimeout(mxUtils.bind(this,function(){A=!1;x({code:App.ERROR_TIMEOUT,message:mxResources.get("timeout")})}),this.timeout),P=mxUtils.bind(this,function(){window.clearTimeout(H);A&&u.apply(this,arguments)}),M=mxUtils.bind(this,function(){window.clearTimeout(H);