GitHubFile.prototype.getPublicUrl = function(fn)
{
	// LATER: Check if download_url is always null for private repos
	if (this.meta.download_url != null)
	{
		mxUtils.get(this.meta.download_url, mxUtils.bind(this, function(req)
		{
			fn((req.getStatus() >= 200 && req.getStatus() <= 299) ? this.meta.download_url : null);
		}), mxUtils.bind(this, function()
		{
			fn(null);
		}));
	}
	else
	{
		fn(null);
	}
};