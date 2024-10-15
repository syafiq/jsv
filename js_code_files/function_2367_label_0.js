	Sidebar.prototype.addAzure2IOTPalette = function(gn, r, sb, s)
	{
		var dt = 'azure iot internet of things ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'Azure_Maps_Accounts.svg;',
					r * 0.17, r * 0.17, '', 'Azure Maps Accounts', null, null, this.getTagsForStencil(gn, 'maps accounts', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Device_Provisioning_Services.svg;',
					r * 0.16, r * 0.165, '', 'Device Provisioning Services', null, null, this.getTagsForStencil(gn, 'device provisioning services', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Digital_Twins.svg;',
					r * 0.17, r * 0.17, '', 'Digital Twins', null, null, this.getTagsForStencil(gn, 'digital twins', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Event_Hubs.svg;',
					r * 0.1675, r * 0.15, '', 'Event Hubs', null, null, this.getTagsForStencil(gn, 'event hubs', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Function_Apps.svg;',
					r * 0.17, r * 0.15, '', 'Function Apps', null, null, this.getTagsForStencil(gn, 'function apps', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Industrial_IoT.svg;',
					r * 0.157, r * 0.17, '', 'Industrial IoT', null, null, this.getTagsForStencil(gn, 'industrial', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'IoT_Central_Applications.svg;',
					r * 0.15, r * 0.1725, '', 'IoT Central Applications', null, null, this.getTagsForStencil(gn, 'central applications', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'IoT_Edge.svg;',
					r * 0.17, r * 0.17, '', 'IoT Edge', null, null, this.getTagsForStencil(gn, 'edge', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'IoT_Hub.svg;',
					r * 0.16, r * 0.16, '', 'IoT Hub', null, null, this.getTagsForStencil(gn, 'roles', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Logic_Apps.svg;',
					r * 0.1675, r * 0.13, '', 'Logic Apps', null, null, this.getTagsForStencil(gn, 'logic apps', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Notification_Hubs.svg;',
					r * 0.1675, r * 0.14, '', 'Notification Hubs', null, null, this.getTagsForStencil(gn, 'notification hubs', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Stream_Analytics_Jobs.svg;',
					r * 0.17, r * 0.145, '', 'Stream Analytics Jobs', null, null, this.getTagsForStencil(gn, 'stream analytics jobs', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Time_Series_Data_Sets.svg;',
					r * 0.128, r * 0.17, '', 'Time Series Data Sets', null, null, this.getTagsForStencil(gn, 'time series data sets', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Time_Series_Insights_Environments.svg;',
					r * 0.1675, r * 0.17, '', 'Time Series Insights Environments', null, null, this.getTagsForStencil(gn, 'time series insights environments', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Time_Series_Insights_Event_Sources.svg;',
					r * 0.1675, r * 0.17, '', 'Time Series Insights Event Sources', null, null, this.getTagsForStencil(gn, 'time series insights event sources', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Windows10_Core_Services.svg;',
					r * 0.17, r * 0.17, '', 'Windows10 Core Services', null, null, this.getTagsForStencil(gn, 'windows10 core services', dt).join(' '))
		];
			
		this.addPalette('azure2IoT', 'Azure / IoT', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};