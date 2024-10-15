			error({message: mxResources.get('cannotOpenFile')});
		}
	}
	else
	{
		this.ui.loadFileSystemEntry(this.fileHandle, success, error);
	}
};