	Sidebar.prototype.addAzure2ManagementGovernancePalette = function(gn, r, sb, s)
	{
		var dt = 'azure management governance ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'Activity_Log.svg;',
					r * 0.14, r * 0.1675, '', 'Activity Log', null, null, this.getTagsForStencil(gn, 'activity log', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Advisor.svg;',
					r * 0.165, r * 0.16, '', 'Advisor', null, null, this.getTagsForStencil(gn, 'advisor', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Alerts.svg;',
					r * 0.1675, r * 0.14, '', 'Alerts', null, null, this.getTagsForStencil(gn, 'alerts', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Application_Insights.svg;',
					r * 0.11, r * 0.1575, '', 'Application Insights', null, null, this.getTagsForStencil(gn, 'application insights', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Automation_Accounts.svg;',
					r * 0.17, r * 0.17, '', 'Automation Accounts', null, null, this.getTagsForStencil(gn, 'automation accounts', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Arc.svg;',
					r * 0.1725, r * 0.13, '', 'Azure Arc', null, null, this.getTagsForStencil(gn, 'arc', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Lighthouse.svg;',
					r * 0.1475, r * 0.17, '', 'Azure Lighthouse', null, null, this.getTagsForStencil(gn, 'lighthouse', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Blueprints.svg;',
					r * 0.1625, r * 0.16, '', 'Blueprints', null, null, this.getTagsForStencil(gn, 'blueprints', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Compliance.svg;',
					r * 0.13, r * 0.16, '', 'Compliance', null, null, this.getTagsForStencil(gn, 'compliance', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Cost_Management_and_Billing.svg;',
					r * 0.17, r * 0.17, '', 'Cost Management and Billing', null, null, this.getTagsForStencil(gn, 'cost management billing', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Customer_Lockbox_for_MS_Azure.svg;',
					r * 0.17, r * 0.166, '', 'Customer Lockbox for MS Azure', null, null, this.getTagsForStencil(gn, 'customer lockbox for ms azure', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Diagnostics_Settings.svg;',
					r * 0.14, r * 0.1675, '', 'Diagnostics Settings', null, null, this.getTagsForStencil(gn, 'diagnostics settings', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Education.svg;',
					r * 0.1675, r * 0.13, '', 'Education', null, null, this.getTagsForStencil(gn, 'education', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Log_Analytics_Workspaces.svg;',
					r * 0.16, r * 0.16, '', 'Log Analytics Workspaces', null, null, this.getTagsForStencil(gn, 'log analytics workspaces', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'MachinesAzureArc.svg;',
					r * 0.11, r * 0.17, '', 'MachinesAzureArc', null, null, this.getTagsForStencil(gn, 'machines arc', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Managed_Applications_Center.svg;',
					r * 0.17, r * 0.135, '', 'Managed Applications Center', null, null, this.getTagsForStencil(gn, 'managed applications center', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Managed_Desktop.svg;',
					r * 0.17, r * 0.158, '', 'Managed Desktop', null, null, this.getTagsForStencil(gn, 'managed desktop', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Metrics.svg;',
					r * 0.15, r * 0.1625, '', 'Metrics', null, null, this.getTagsForStencil(gn, 'metrics', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Monitor.svg;',
					r * 0.16, r * 0.16, '', 'Monitor', null, null, this.getTagsForStencil(gn, 'monitor', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'My_Customers.svg;',
					r * 0.1725, r * 0.14, '', 'My Customers', null, null, this.getTagsForStencil(gn, 'my customers', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Operation_Log_Classic.svg;',
					r * 0.14, r * 0.1675, '', 'Operation Log (Classic)', null, null, this.getTagsForStencil(gn, 'operation log classic', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Policy.svg;',
					r * 0.15, r * 0.16, '', 'Policy', null, null, this.getTagsForStencil(gn, 'policy', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Recovery_Services_Vaults.svg;',
					r * 0.1725, r * 0.15, '', 'Recovery Services Vaults', null, null, this.getTagsForStencil(gn, 'recovery services vaults', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Resource_Graph_Explorer.svg;',
					r * 0.1675, r * 0.16, '', 'Resource Graph Explorer', null, null, this.getTagsForStencil(gn, 'resource graph explorer', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Scheduler_Job_Collections.svg;',
					r * 0.17, r * 0.16, '', 'Scheduler Job Collections', null, null, this.getTagsForStencil(gn, 'scheduler job collections', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Service_Catalog_MAD.svg;',
					r * 0.14, r * 0.17, '', 'Service Catalog MAD', null, null, this.getTagsForStencil(gn, 'service catalog mad', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Service_Providers.svg;',
					r * 0.165, r * 0.17, '', 'Service Providers', null, null, this.getTagsForStencil(gn, 'service providers', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'solutions.svg;',
					r * 0.16, r * 0.16, '', 'Solutions', null, null, this.getTagsForStencil(gn, 'solutions', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Universal_Print.svg;',
					r * 0.17, r * 0.145, '', 'Universal Print', null, null, this.getTagsForStencil(gn, 'universal print', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'User_Privacy.svg;',
					r * 0.16, r * 0.17, '', 'User Privacy', null, null, this.getTagsForStencil(gn, 'user privacy', dt).join(' '))
		];
			
		this.addPalette('azure2Management Governance', 'Azure / Management Governance', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};