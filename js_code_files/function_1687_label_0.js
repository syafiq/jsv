n.comment.content=E.value;E.parentNode.removeChild(E);K.parentNode.removeChild(K)}catch(M){b.handleError(M)}D.innerHTML='<div style="padding-top:10px;text-align:center;"><img src="'+IMAGE_PATH+'/spin.gif" valign="middle"> '+mxUtils.htmlEntities(mxResources.get("loading"))+"...</div>";k=b.canReplyToReplies();b.commentsSupported()?b.getComments(function(M){function H(N){if(null!=N){N.sort(function(O,V){return new Date(O.modifiedDate)-new Date(V.modifiedDate)});for(var P=0;P<N.length;P++)H(N[P].replies)}}