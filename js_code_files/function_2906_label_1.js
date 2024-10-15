	EditorUi.prototype.showBackgroundImageDialog = function(apply, img)
	{
		apply = (apply != null) ? apply : mxUtils.bind(this, function(image, failed)
		{
			if (!failed)
			{
				var change = new ChangePageSetup(this, null, image);
				change.ignoreColor = true;
				
				this.editor.graph.model.execute(change);
			}
		});
		var dlg = new BackgroundImageDialog(this, apply, img);
		this.showDialog(dlg.container, 400, 200, true, true);
		dlg.init();
	};