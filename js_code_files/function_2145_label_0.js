encodeURIComponent(q);q=new EmbedDialog(b,window.location.protocol+"//"+window.location.host+"/"+v,null,null,null,null,"Check out the library I made using @drawio");b.showDialog(q.container,450,240,!0);q.init()}else l.constructor==DriveLibrary?b.showError(mxResources.get("error"),mxResources.get("diagramIsNotPublic"),mxResources.get("share"),mxUtils.bind(this,function(){b.drive.showPermissions(l.getId())}),null,mxResources.get("ok"),mxUtils.bind(this,function(){})):b.handleError({message:mxResources.get("diagramIsNotPublic")})})}),