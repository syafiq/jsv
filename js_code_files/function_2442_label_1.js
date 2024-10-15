App.prototype.createUserElement=function(){var b=document.createElement("a");mxUtils.setPrefixedStyle(b.style,"transition","none");b.style.display="inline-block";b.style.cursor="pointer";b.style.fontSize="8pt";mxEvent.addListener(b,mxClient.IS_POINTER?"pointerdown":"mousedown",mxUtils.bind(this,function(d){d.preventDefault()}));mxEvent.addListener(b,"click",mxUtils.bind(this,function(d){if(null==this.userPanel){var f=document.createElement("div");f.className="geDialog";f.style.position="absolute";
f.style.top=b.clientTop+b.clientHeight+6+"px";f.style.zIndex=5;f.style.right="36px";f.style.padding="0px";f.style.cursor="default";f.style.minWidth="300px";this.userPanel=f}if(null!=this.userPanel.parentNode)this.userPanel.parentNode.removeChild(this.userPanel);else{var c=!1;this.userPanel.innerText="";f=document.createElement("img");f.setAttribute("src",Dialog.prototype.closeImage);f.setAttribute("title",mxResources.get("close"));f.className="geDialogClose";f.style.top="8px";f.style.right="8px";
mxEvent.addListener(f,"click",mxUtils.bind(this,function(){null!=this.userPanel.parentNode&&this.userPanel.parentNode.removeChild(this.userPanel)}));this.userPanel.appendChild(f);if(null!=this.drive){var l=this.drive.getUsersList();if(0<l.length){var m=mxUtils.bind(this,function(B,z){var A=this.getCurrentFile();null!=A&&A.constructor==DriveFile?(this.spinner.spin(document.body,z),this.fileLoaded(null),window.setTimeout(mxUtils.bind(this,function(){this.spinner.stop();B()}),2E3)):B()});f=mxUtils.bind(this,
function(B){var z=document.createElement("tr");z.setAttribute("title","User ID: "+B.id);var A=document.createElement("td");A.setAttribute("valig","middle");A.style.height="59px";A.style.width="66px";var J=document.createElement("img");J.setAttribute("width","50");J.setAttribute("height","50");J.setAttribute("border","0");J.setAttribute("src",null!=B.pictureUrl?B.pictureUrl:this.defaultUserPicture);J.style.borderRadius="50%";J.style.margin="4px 8px 0 8px";A.appendChild(J);z.appendChild(A);A=document.createElement("td");
A.setAttribute("valign","middle");A.style.whiteSpace="nowrap";A.style.paddingTop="4px";A.style.maxWidth="0";A.style.overflow="hidden";A.style.textOverflow="ellipsis";mxUtils.write(A,B.displayName+(B.isCurrent&&1<l.length?" ("+mxResources.get("default")+")":""));null!=B.email&&(mxUtils.br(A),J=document.createElement("small"),J.style.color="gray",mxUtils.write(J,B.email),A.appendChild(J));J=document.createElement("div");J.style.marginTop="4px";var e=document.createElement("i");mxUtils.write(e,mxResources.get("googleDrive"));
J.appendChild(e);A.appendChild(J);z.appendChild(A);B.isCurrent||(z.style.cursor="pointer",z.style.opacity="0.3",mxEvent.addListener(z,"click",mxUtils.bind(this,function(g){m(mxUtils.bind(this,function(){this.stateArg=null;this.drive.setUser(B);this.drive.authorize(!0,mxUtils.bind(this,function(){this.setMode(App.MODE_GOOGLE);this.hideDialog();this.showSplash()}),mxUtils.bind(this,function(k){this.handleError(k)}),!0)}),mxResources.get("closingFile")+"...");mxEvent.consume(g)})));return z});c=!0;var t=
document.createElement("table");t.style.borderSpacing="0";t.style.fontSize="10pt";t.style.width="100%";t.style.padding="10px";for(var y=0;y<l.length;y++)t.appendChild(f(l[y]));this.userPanel.appendChild(t);f=document.createElement("div");f.style.textAlign="left";f.style.padding="10px";f.style.whiteSpace="nowrap";f.style.borderTop="1px solid rgb(224, 224, 224)";t=mxUtils.button(mxResources.get("signOut"),mxUtils.bind(this,function(){this.confirm(mxResources.get("areYouSure"),mxUtils.bind(this,function(){m(mxUtils.bind(this,
function(){this.stateArg=null;this.drive.logout();this.setMode(App.MODE_GOOGLE);this.hideDialog();this.showSplash()}),mxResources.get("signOut"))}))}));t.className="geBtn";t.style.float="right";f.appendChild(t);t=mxUtils.button(mxResources.get("addAccount"),mxUtils.bind(this,function(){var B=this.drive.createAuthWin();B.blur();window.focus();m(mxUtils.bind(this,function(){this.stateArg=null;this.drive.authorize(!1,mxUtils.bind(this,function(){this.setMode(App.MODE_GOOGLE);this.hideDialog();this.showSplash()}),
mxUtils.bind(this,function(z){this.handleError(z)}),!0,B)}),mxResources.get("closingFile")+"...")}));t.className="geBtn";t.style.margin="0px";f.appendChild(t);this.userPanel.appendChild(f)}}f=mxUtils.bind(this,function(B,z,A,J){if(null!=B){c&&this.userPanel.appendChild(document.createElement("hr"));c=!0;var e=document.createElement("table");e.style.borderSpacing="0";e.style.fontSize="10pt";e.style.width="100%";e.style.padding="10px";var g=document.createElement("tbody"),k=document.createElement("tr"),
n=document.createElement("td");n.setAttribute("valig","top");n.style.width="40px";if(null!=z){var u=document.createElement("img");u.setAttribute("width","40");u.setAttribute("height","40");u.setAttribute("border","0");u.setAttribute("src",z);u.style.marginRight="6px";n.appendChild(u)}k.appendChild(n);n=document.createElement("td");n.setAttribute("valign","middle");n.style.whiteSpace="nowrap";n.style.maxWidth="0";n.style.overflow="hidden";n.style.textOverflow="ellipsis";mxUtils.write(n,B.displayName);
null!=B.email&&(mxUtils.br(n),z=document.createElement("small"),z.style.color="gray",mxUtils.write(z,B.email),n.appendChild(z));null!=J&&(B=document.createElement("div"),B.style.marginTop="4px",z=document.createElement("i"),mxUtils.write(z,J),B.appendChild(z),n.appendChild(B));k.appendChild(n);g.appendChild(k);e.appendChild(g);this.userPanel.appendChild(e);B=document.createElement("div");B.style.textAlign="center";B.style.padding="10px";B.style.whiteSpace="nowrap";null!=A&&(A=mxUtils.button(mxResources.get("signOut"),
A),A.className="geBtn",B.appendChild(A));this.userPanel.appendChild(B)}});null!=this.dropbox&&f(this.dropbox.getUser(),IMAGE_PATH+"/dropbox-logo.svg",mxUtils.bind(this,function(){var B=this.getCurrentFile();if(null!=B&&B.constructor==DropboxFile){var z=mxUtils.bind(this,function(){this.dropbox.logout();window.location.hash=""});B.isModified()?this.confirm(mxResources.get("allChangesLost"),null,z,mxResources.get("cancel"),mxResources.get("discardChanges")):z()}else this.dropbox.logout()}),mxResources.get("dropbox"));
null!=this.oneDrive&&f(this.oneDrive.getUser(),IMAGE_PATH+"/onedrive-logo.svg",this.oneDrive.noLogout?null:mxUtils.bind(this,function(){var B=this.getCurrentFile();if(null!=B&&B.constructor==OneDriveFile){var z=mxUtils.bind(this,function(){this.oneDrive.logout();window.location.hash=""});B.isModified()?this.confirm(mxResources.get("allChangesLost"),null,z,mxResources.get("cancel"),mxResources.get("discardChanges")):z()}else this.oneDrive.logout()}),mxResources.get("oneDrive"));null!=this.gitHub&&
f(this.gitHub.getUser(),IMAGE_PATH+"/github-logo.svg",mxUtils.bind(this,function(){var B=this.getCurrentFile();if(null!=B&&B.constructor==GitHubFile){var z=mxUtils.bind(this,function(){this.gitHub.logout();window.location.hash=""});B.isModified()?this.confirm(mxResources.get("allChangesLost"),null,z,mxResources.get("cancel"),mxResources.get("discardChanges")):z()}else this.gitHub.logout()}),mxResources.get("github"));null!=this.gitLab&&f(this.gitLab.getUser(),IMAGE_PATH+"/gitlab-logo.svg",mxUtils.bind(this,
function(){var B=this.getCurrentFile();if(null!=B&&B.constructor==GitLabFile){var z=mxUtils.bind(this,function(){this.gitLab.logout();window.location.hash=""});B.isModified()?this.confirm(mxResources.get("allChangesLost"),null,z,mxResources.get("cancel"),mxResources.get("discardChanges")):z()}else this.gitLab.logout()}),mxResources.get("gitlab"));null!=this.trello&&f(this.trello.getUser(),IMAGE_PATH+"/trello-logo.svg",mxUtils.bind(this,function(){var B=this.getCurrentFile();if(null!=B&&B.constructor==
TrelloFile){var z=mxUtils.bind(this,function(){this.trello.logout();window.location.hash=""});B.isModified()?this.confirm(mxResources.get("allChangesLost"),null,z,mxResources.get("cancel"),mxResources.get("discardChanges")):z()}else this.trello.logout()}),mxResources.get("trello"));"min"==uiTheme&&(t=this.getCurrentFile(),null!=t&&t.isRealtimeEnabled()&&t.isRealtimeSupported()&&(f=document.createElement("div"),f.style.padding="10px",f.style.whiteSpace="nowrap",f.style.borderTop="1px solid rgb(224, 224, 224)",
f.style.marginTop="4px",f.style.textAlign="center",f.style.padding="10px",f.style.fontSize="9pt",y=t.getRealtimeError(),1!=t.getRealtimeState()&&(mxUtils.write(f,mxResources.get("realtimeCollaboration")+": "+(null!=y&&null!=y.message?y.message:mxResources.get("disconnected"))),this.userPanel.appendChild(f))));document.body.appendChild(this.userPanel)}mxEvent.consume(d)}));mxEvent.addListener(document.body,"click",mxUtils.bind(this,function(d){mxEvent.isConsumed(d)||null==this.userPanel||null==this.userPanel.parentNode||
this.userPanel.parentNode.removeChild(this.userPanel)}));return b};App.prototype.getCurrentUser=function(){var b=null;null!=this.drive&&null!=this.drive.getUser()?b=this.drive.getUser():null!=this.oneDrive&&null!=this.oneDrive.getUser()?b=this.oneDrive.getUser():null!=this.dropbox&&null!=this.dropbox.getUser()?b=this.dropbox.getUser():null!=this.gitHub&&null!=this.gitHub.getUser()&&(b=this.gitHub.getUser());return b};var editorResetGraph=Editor.prototype.resetGraph;