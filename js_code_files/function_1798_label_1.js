	Sidebar.prototype.addAzure2StoragePalette = function(gn, r, sb, s)
	{
		var dt = 'azure storage ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'Azure_HCP_Cache.svg;',
					r * 0.17, r * 0.1575, '', 'Azure HCP Cache', null, null, this.getTagsForStencil(gn, 'hcp cache', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_NetApp_Files.svg;',
					r * 0.1625, r * 0.13, '', 'Azure NetApp Files', null, null, this.getTagsForStencil(gn, 'netapp files', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Stack_Edge.svg;',
					r * 0.17, r * 0.12, '', 'Azure Stack Edge', null, null, this.getTagsForStencil(gn, 'stack edge', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Data_Box.svg;',
					r * 0.1775, r * 0.17, '', 'Data Box', null, null, this.getTagsForStencil(gn, 'data box', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Data_Box_Edge.svg;',
					r * 0.1675, r * 0.12, '', 'Data Box Edge', null, null, this.getTagsForStencil(gn, 'data box edge', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Data_Lake_Storage_Gen1.svg;',
					r * 0.16, r * 0.13, '', 'Data Lake Storage Gen1', null, null, this.getTagsForStencil(gn, 'data lake storage gen1', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Data_Share_Invitations.svg;',
					r * 0.16, r * 0.1075, '', 'Data Share Invitations', null, null, this.getTagsForStencil(gn, 'data share invitations', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Data_Shares.svg;',
					r * 0.16, r * 0.1375, '', 'Data Shares', null, null, this.getTagsForStencil(gn, 'data shares', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Import_Export_Jobs.svg;',
					r * 0.16, r * 0.1675, '', 'Import Export Jobs', null, null, this.getTagsForStencil(gn, 'import export jobs', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Recovery_Services_Vaults.svg;',
					r * 0.1725, r * 0.15, '', 'Recovery Services Vaults', null, null, this.getTagsForStencil(gn, 'recovery services vaults', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Storage_Accounts.svg;',
					r * 0.1625, r * 0.13, '', 'Storage Accounts', null, null, this.getTagsForStencil(gn, 'storage accounts', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Storage_Accounts_Classic.svg;',
					r * 0.1625, r * 0.13, '', 'Storage Accounts (Classic)', null, null, this.getTagsForStencil(gn, 'storage accounts classic', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Storage_Sync_Services.svg;',
					r * 0.18, r * 0.15, '', 'Storage Sync Services', null, null, this.getTagsForStencil(gn, 'storage sync services', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'StorSimple_Data_Managers.svg;',
					r * 0.12, r * 0.16, '', 'StorSimple Data Managers', null, null, this.getTagsForStencil(gn, 'storsimple data managers', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'StorSimple_Device_Managers.svg;',
					r * 0.175, r * 0.16, '', 'StorSimple Device Managers', null, null, this.getTagsForStencil(gn, 'storsimple device managers', dt).join(' '))
		];
			
		this.addPalette('azure2Storage', 'Azure / Storage', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};