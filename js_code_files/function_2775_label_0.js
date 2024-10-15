	EditorUi.prototype.createDownloadRequest = function(filename, format, ignoreSelection,
		base64, transparent, currentPage, scale, border, grid, includeXml, pageRange, w, h)
	{
		var params = this.downloadRequestBuilder(filename, format, ignoreSelection,
							base64, transparent, currentPage, scale, border, grid, includeXml, pageRange, w, h);

		var paramsStr = '';

		for (var p in params)
		{
			var val = params[p];

			if (val != null)
			{
				paramsStr += p + '=' + encodeURIComponent(val) + '&';
			}
		}

		return new mxXmlRequest(EXPORT_URL, paramsStr);
	};