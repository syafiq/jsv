null!=n?n.addComment(d,g,k):g(Date.now())};EditorUi.prototype.canReplyToReplies=function(){var d=this.getCurrentFile();return null!=d?d.canReplyToReplies():!0};EditorUi.prototype.canComment=function(){var d=this.getCurrentFile();return null!=d?d.canComment():!0};EditorUi.prototype.newComment=function(d,g){var k=this.getCurrentFile();return null!=k?k.newComment(d,g):new DrawioComment(this,null,d,Date.now(),Date.now(),!1,g)};EditorUi.prototype.isRevisionHistorySupported=function(){var d=this.getCurrentFile();
return null!=d&&d.isRevisionHistorySupported()};EditorUi.prototype.getRevisions=function(d,g){var k=this.getCurrentFile();null!=k&&k.getRevisions?k.getRevisions(d,g):g({message:mxResources.get("unknownError")})};EditorUi.prototype.isRevisionHistoryEnabled=function(){var d=this.getCurrentFile();return null!=d&&(d.constructor==DriveFile&&d.isEditable()||d.constructor==DropboxFile)};EditorUi.prototype.getServiceName=function(){return"draw.io"};EditorUi.prototype.addRemoteServiceSecurityCheck=function(d){d.setRequestHeader("Content-Language",