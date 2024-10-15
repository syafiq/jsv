	Sidebar.prototype.addAzure2IntunePalette = function(gn, r, sb, s)
	{
		var dt = 'azure intune ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'Azure_AD_Roles_and_Administrators.svg;',
					r * 0.16, r * 0.16, '', 'Azure AD Roles and Administrators', null, null, this.getTagsForStencil(gn, 'ad roles administrators', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Client_Apps.svg;',
					r * 0.17, r * 0.17, '', 'Client Apps', null, null, this.getTagsForStencil(gn, 'client apps', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Device_Compliance.svg;',
					r * 0.155, r * 0.17, '', 'Device Compliance', null, null, this.getTagsForStencil(gn, 'device compliance', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Device_Configuration.svg;',
					r * 0.155, r * 0.17, '', 'Device Configuration', null, null, this.getTagsForStencil(gn, 'device configuration', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Device_Enrollment.svg;',
					r * 0.17, r * 0.151, '', 'Device Enrollment', null, null, this.getTagsForStencil(gn, 'device enrollment', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Device_Security_Apple.svg;',
					r * 0.17, r * 0.1725, '', 'Device Security Apple', null, null, this.getTagsForStencil(gn, 'device security apple', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Device_Security_Google.svg;',
					r * 0.17, r * 0.1725, '', 'Device Security Google', null, null, this.getTagsForStencil(gn, 'device security google', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Device_Security_Windows.svg;',
					r * 0.17, r * 0.17, '', 'Device Security Windows', null, null, this.getTagsForStencil(gn, 'device security windows', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Devices.svg;',
					r * 0.17, r * 0.15, '', 'Devices', null, null, this.getTagsForStencil(gn, 'devices', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'eBooks.svg;',
					r * 0.17, r * 0.15, '', 'eBooks', null, null, this.getTagsForStencil(gn, 'ebooks', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Exchange_Access.svg;',
					r * 0.14, r * 0.17, '', 'Exchange Access', null, null, this.getTagsForStencil(gn, 'exchange access', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Intune.svg;',
					r * 0.17, r * 0.155, '', 'Intune', null, null, this.getTagsForStencil(gn, 'intune', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Intune_For_Education.svg;',
					r * 0.17, r * 0.155, '', 'Intune for Education', null, null, this.getTagsForStencil(gn, 'intune for education', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Mindaro.svg;',
					r * 0.168, r * 0.17, '', 'Mindaro', null, null, this.getTagsForStencil(gn, 'mindaro', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Security_Baselines.svg;',
					r * 0.17, r * 0.17, '', 'Security Baselines', null, null, this.getTagsForStencil(gn, 'security baselines', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Software_Updates.svg;',
					r * 0.17, r * 0.15, '', 'Software Updates', null, null, this.getTagsForStencil(gn, 'software updates', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Tenant_Status.svg;',
					r * 0.16, r * 0.17, '', 'Tenant Status', null, null, this.getTagsForStencil(gn, 'tenant status', dt).join(' '))
		];
			
		this.addPalette('azure2Intune', 'Azure / Intune', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};