	Sidebar.prototype.addAzure2MenuPalette = function(gn, r, sb, s)
	{
		var dt = 'azure menu ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'Keys.svg;',
					r * 0.16, r * 0.17, '', 'Keys', null, null, this.getTagsForStencil(gn, 'keys', dt).join(' '))
		];
			
		this.addPalette('azure2Menu', 'Azure / Menu', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};