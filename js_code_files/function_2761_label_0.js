DrawioFileSync.prototype.updateOnlineState=function(){if("1"!=urlParams.embedRT){var b=mxUtils.bind(this,function(c){mxEvent.addListener(c,"click",mxUtils.bind(this,function(l){if(this.file.isRealtimeEnabled()&&this.file.isRealtimeSupported()){l=this.file.getRealtimeState();var m=mxResources.get("disconnected");this.file.invalidChecksum?m=mxResources.get("error")+": "+mxResources.get("checksum"):this.ui.isOffline(!0)||!this.isConnected()?m=mxResources.get("offline"):1==l&&(m=mxResources.get("online"));
this.ui.showError(mxResources.get("realtimeCollaboration"),mxUtils.htmlEntities(m))}else this.enabled=!this.enabled,this.ui.updateButtonContainer(),this.resetUpdateStatusThread(),this.updateOnlineState(),this.updateStatus(),!this.file.inConflictState&&this.enabled&&this.fileChangedNotify()}))});if(null!=this.ui.toolbarContainer&&null==this.collaboratorsElement){var e=document.createElement("a");e.className="geButton geAdaptiveAsset";e.style.position="absolute";e.style.display="inline-block";e.style.verticalAlign=
"bottom";e.style.color="#666";e.style.top="6px";e.style.right="atlas"!=Editor.currentTheme?null!=this.ui.darkModeElement?"90px":"70px":"50px";e.style.padding="2px";e.style.fontSize="8pt";e.style.verticalAlign="middle";e.style.textDecoration="none";e.style.backgroundPosition="center center";e.style.backgroundRepeat="no-repeat";e.style.backgroundSize="16px 16px";e.style.width="16px";e.style.height="16px";mxUtils.setOpacity(e,60);mxEvent.addListener(e,mxClient.IS_POINTER?"pointerdown":"mousedown",mxUtils.bind(this,
function(c){c.preventDefault()}));b(e);this.ui.toolbarContainer.appendChild(e);this.collaboratorsElement=e}if(null!=this.collaboratorsElement){this.collaboratorsElement.style.display="inline-block";var f=Editor.cloudImage;b="";this.enabled?this.file.invalidChecksum?(b=mxResources.get("error")+": "+mxResources.get("checksum"),f=Editor.syncProblemImage):this.ui.isOffline(!0)||!this.isConnected()?(b=mxResources.get("offline"),f=Editor.cloudOffImage):(b=mxResources.get("online"),this.file.isRealtimeEnabled()&&
this.file.isRealtimeSupported()&&(e=this.file.getRealtimeError(),f=this.file.getRealtimeState(),b=mxResources.get("realtimeCollaboration"),1==f?(this.collaboratorsElement.style.display="none",f=Editor.syncImage):(f=Editor.syncProblemImage,b=null!=e&&null!=e.message?b+(" ("+e.message+")"):b+(" ("+mxResources.get("disconnected")+")")))):(b=mxResources.get("disconnected"),f=Editor.cloudOffImage);this.collaboratorsElement.setAttribute("title",b);this.collaboratorsElement.style.backgroundImage="url("+
f+")"}}};