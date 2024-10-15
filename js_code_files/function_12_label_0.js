	Sidebar.prototype.addAzure2MixedRealityPalette = function(gn, r, sb, s)
	{
		var dt = 'azure mixed reality ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'Remote_Rendering.svg;',
					r * 0.17, r * 0.12, '', 'Remote Rendering', null, null, this.getTagsForStencil(gn, 'remote rendering', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Spatial_Anchor_Accounts.svg;',
					r * 0.167, r * 0.17, '', 'Spatial Anchor Accounts', null, null, this.getTagsForStencil(gn, 'spatial anchor accounts', dt).join(' '))
		];
			
		this.addPalette('azure2Mixed Reality', 'Azure / Mixed Reality', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};