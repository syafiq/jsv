	Sidebar.prototype.addAzure2BlockchainPalette = function(gn, r, sb, s)
	{
		var dt = 'azure blockchain ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'ABS_Member.svg;',
					r * 0.14, r * 0.1625, '', 'ABS Member', null, null, this.getTagsForStencil(gn, 'abs member', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Blockchain_Service.svg;',
					r * 0.17, r * 0.17, '', 'Azure Blockchain Service', null, null, this.getTagsForStencil(gn, 'blockchain service', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Token_Service.svg;',
					r * 0.1475, r * 0.17, '', 'Azure Token Service', null, null, this.getTagsForStencil(gn, 'token service', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Blockchain_Applications.svg;',
					r * 0.121, r * 0.17, '', 'Blockchain Applications', null, null, this.getTagsForStencil(gn, 'blockchain applications', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Consortium.svg;',
					r * 0.17, r * 0.17, '', 'Consortium', null, null, this.getTagsForStencil(gn, 'consortium', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Outbound_Connection.svg;',
					r * 0.1775, r * 0.16, '', 'Outbound Connection', null, null, this.getTagsForStencil(gn, 'outbound connection', dt).join(' '))
		];
			
		this.addPalette('azure2Blockchain', 'Azure / Blockchain', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};