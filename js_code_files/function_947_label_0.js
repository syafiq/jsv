	Sidebar.prototype.addAzure2AnalyticsPalette = function(gn, r, sb, s)
	{
		var dt = 'azure analytics ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'Analysis_Services.svg;',
					r * 0.1575, r * 0.12, '', 'Analysis Services', null, null, this.getTagsForStencil(gn, 'analysis services', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Databricks.svg;',
					r * 0.157, r * 0.17, '', 'Azure Databricks', null, null, this.getTagsForStencil(gn, 'azure databricks', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Synapse_Analytics.svg;',
					r * 0.15, r * 0.1725, '', 'Azure Synapse Analytics', null, null, this.getTagsForStencil(gn, 'synapse analytics', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Workbooks.svg;',
					r * 0.17, r * 0.17, '', 'Azure Workbooks', null, null, this.getTagsForStencil(gn, 'workbooks', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Data_Lake_Analytics.svg;',
					r * 0.17, r * 0.17, '', 'Data Lake Analytics', null, null, this.getTagsForStencil(gn, 'data lake analytics', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Data_Lake_Store_Gen1.svg;',
					r * 0.16, r * 0.13, '', 'Data Lake Store Gen1', null, null, this.getTagsForStencil(gn, 'data lake store gen1', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Endpoint_Analytics.svg;',
					r * 0.17, r * 0.17, '', 'Endpoint Analytics', null, null, this.getTagsForStencil(gn, 'endpoint analytics', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Event_Hub_Clusters.svg;',
					r * 0.16, r * 0.13, '', 'Event Hub Clusters', null, null, this.getTagsForStencil(gn, 'event hub clusters', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Event_Hubs.svg;',
					r * 0.1675, r * 0.15, '', 'Event Hubs', null, null, this.getTagsForStencil(gn, 'event hubs', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'HD_Insight_Clusters.svg;',
					r * 0.1575, r * 0.155, '', 'HD Insight Clusters', null, null, this.getTagsForStencil(gn, 'hd insight clusters', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Log_Analytics_Workspaces.svg;',
					r * 0.16, r * 0.16, '', 'Log Analytics Workspaces', null, null, this.getTagsForStencil(gn, 'log analytics workspaces', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Stream_Analytics_Jobs.svg;',
					r * 0.17, r * 0.145, '', 'Stream Analytics Jobs', null, null, this.getTagsForStencil(gn, 'Stream_Analytics_Jobs', dt).join(' '))
		];
			
		this.addPalette('azure2Analytics', 'Azure / Analytics', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};