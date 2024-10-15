LocalFile.prototype.getLatestVersion = function(success, error)
{
	if (this.fileHandle == null)
	{
		success(null);
	}
	else
	{
		this.ui.loadFileSystemEntry(this.fileHandle, success, error);
	}
};