App.prototype.pickFolder=function(b,e,f,c,l){f=null!=f?f:!0;var m=this.spinner.pause();f&&b==App.MODE_GOOGLE&&null!=this.drive?this.drive.pickFolder(mxUtils.bind(this,function(t){m();if(t.action==google.picker.Action.PICKED){var y=null;null!=t.docs&&0<t.docs.length&&"folder"==t.docs[0].type&&(y=t.docs[0].id);e(y)}}),l):f&&b==App.MODE_ONEDRIVE&&null!=this.oneDrive?this.oneDrive.pickFolder(mxUtils.bind(this,function(t){m();null!=t&&null!=t.value&&0<t.value.length&&(t=OneDriveFile.prototype.getIdOf(t.value[0]),
e(t))}),c):f&&b==App.MODE_GITHUB&&null!=this.gitHub?this.gitHub.pickFolder(mxUtils.bind(this,function(t){m();e(t)})):f&&b==App.MODE_GITLAB&&null!=this.gitLab?this.gitLab.pickFolder(mxUtils.bind(this,function(t){m();e(t)})):f&&b==App.MODE_TRELLO&&null!=this.trello?this.trello.pickFolder(mxUtils.bind(this,function(t){m();e(t)})):EditorUi.prototype.pickFolder.apply(this,arguments)};