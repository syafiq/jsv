	EditorUi.prototype.createDownloadRequest = function(filename, format, ignoreSelection,
		base64, transparent, currentPage, scale, border, grid, includeXml, pageRange, w, h)
	{
		var params = this.downloadRequestBuilder(filename, format, ignoreSelection,
			base64, transparent, currentPage, scale, border, grid, includeXml, pageRange, w, h);

		return new mxElectronRequest('export', params);
	};