LocalFile.prototype.getLatestVersion=function(b,g){null==this.fileHandle?b(null):this.ui.loadFileSystemEntry(this.fileHandle,b,g)};