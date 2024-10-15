Dialog.prototype.close = function(cancel, isEsc)
{
	if (this.onDialogClose != null)
	{
		if (this.onDialogClose(cancel, isEsc) == false)
		{
			return false;
		}
		
		this.onDialogClose = null;
	}
	
	if (this.dialogImg != null && this.dialogImg.parentNode != null)
	{
		this.dialogImg.parentNode.removeChild(this.dialogImg);
		this.dialogImg = null;
	}
	
	if (this.bg != null && this.bg.parentNode != null)
	{
		this.bg.parentNode.removeChild(this.bg);
	}
	
	mxEvent.removeListener(window, 'resize', this.resizeListener);

	if (this.container.parentNode != null)
	{
		this.container.parentNode.removeChild(this.container);
	}
};