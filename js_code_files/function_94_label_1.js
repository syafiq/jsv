EditorUi.prototype.getShortPageName = function(page)
{
	var short = page.getName();

	if (short.length > 36)
	{
		short = short.substring(0, 34) + '...';
	}

	return short;
};