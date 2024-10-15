	var changeImage = function(evt)
	{
		editorUi.showBackgroundImageDialog(function(image, failed, color)
		{
			if (!failed)
			{
				if (image != null && image.src != null && Graph.isPageLink(image.src))
				{
					image = {originalSrc: image.src};
				}

				newBackgroundImage = image;
			}

			newBackgroundColor = color;
			updateBackgroundImage();
		}, newBackgroundImage, newBackgroundColor);
		
		mxEvent.consume(evt);
	};