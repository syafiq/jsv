	Sidebar.prototype.addAzure2SecurityPalette = function(gn, r, sb, s)
	{
		var dt = 'azure security ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'Application_Security_Groups.svg;',
					r * 0.14, r * 0.17, '', 'Application Security Groups', null, null, this.getTagsForStencil(gn, 'application security groups', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Defender.svg;',
					r * 0.14, r * 0.17, '', 'Azure Defender', null, null, this.getTagsForStencil(gn, 'defender', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Sentinel.svg;',
					r * 0.14, r * 0.17, '', 'Azure Sentinel', null, null, this.getTagsForStencil(gn, 'sentinel', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Conditional_Access.svg;',
					r * 0.14, r * 0.17, '', 'Conditional Access', null, null, this.getTagsForStencil(gn, 'conditional access', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Detonation.svg;',
					r * 0.165, r * 0.17, '', 'Detonation', null, null, this.getTagsForStencil(gn, 'detonation', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'ExtendedSecurityUpdates.svg;',
					r * 0.16, r * 0.175, '', 'Extended Security Updates', null, null, this.getTagsForStencil(gn, 'extended security updates', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Key_Vaults.svg;',
					r * 0.17, r * 0.17, '', 'Key Vaults', null, null, this.getTagsForStencil(gn, 'key vaults', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Keys.svg;',
					r * 0.18, r * 0.19, '', 'Keys', null, null, this.getTagsForStencil(gn, 'keys', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Security_Center.svg;',
					r * 0.14, r * 0.17, '', 'Security Center', null, null, this.getTagsForStencil(gn, 'security center', dt).join(' '))
		];
			
		this.addPalette('azure2Security', 'Azure / Security', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};