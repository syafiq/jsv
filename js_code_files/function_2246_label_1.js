	Sidebar.prototype.addAzure2ComputePalette = function(gn, r, sb, s)
	{
		var dt = 'azure compute ';
		
		var fns =
		[
			this.createVertexTemplateEntry(s + 'App_Services.svg;',
					r * 0.16, r * 0.16, '', 'App Services', null, null, this.getTagsForStencil(gn, 'app services', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Availability_Sets.svg;',
					r * 0.17, r * 0.17, '', 'Availability Sets', null, null, this.getTagsForStencil(gn, 'availability sets', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Batch_Accounts.svg;',
					r * 0.17, r * 0.16, '', 'Batch Accounts', null, null, this.getTagsForStencil(gn, 'batch accounts', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Cloud_Services_Classic.svg;',
					r * 0.18, r * 0.13, '', 'Cloud Services (Classic)', null, null, this.getTagsForStencil(gn, 'cloud services classic', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Container_Instances.svg;',
					r * 0.16, r * 0.17, '', 'Container Instances', null, null, this.getTagsForStencil(gn, 'container instances', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Container_Services_Deprecated.svg;',
					r * 0.17, r * 0.15, '', 'Container Services Deprecated', null, null, this.getTagsForStencil(gn, 'container services deprecated', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Disk_Encryption_Sets.svg;',
					r * 0.17, r * 0.17, '', 'Disk Encryption Sets', null, null, this.getTagsForStencil(gn, 'disk encryption sets', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Disks.svg;',
					r * 0.1425, r * 0.14, '', 'Disks', null, null, this.getTagsForStencil(gn, 'disks', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Disks_Classic.svg;',
					r * 0.1425, r * 0.14, '', 'Disks (Classic)', null, null, this.getTagsForStencil(gn, 'disks classic', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Disks_Snapshots.svg;',
					r * 0.17, r * 0.1775, '', 'Disks Snapshots', null, null, this.getTagsForStencil(gn, 'disks snapshots', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Function_Apps.svg;',
					r * 0.17, r * 0.15, '', 'Function Apps', null, null, this.getTagsForStencil(gn, 'function apps', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Image_Definitions.svg;',
					r * 0.165, r * 0.16, '', 'Image Definitions', null, null, this.getTagsForStencil(gn, 'image definitions', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Image_Versions.svg;',
					r * 0.1675, r * 0.16, '', 'Image Versions', null, null, this.getTagsForStencil(gn, 'image versions', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Images.svg;',
					r * 0.1725, r * 0.16, '', 'Images', null, null, this.getTagsForStencil(gn, 'images', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Kubernetes_Services.svg;',
					r * 0.17, r * 0.15, '', 'Kubernetes Services', null, null, this.getTagsForStencil(gn, 'kubernetes services', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Mesh_Applications.svg;',
					r * 0.17, r * 0.17, '', 'Mesh Applications', null, null, this.getTagsForStencil(gn, 'mesh applications', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'OS_Images_Classic.svg;',
					r * 0.1725, r * 0.16, '', 'OS Images (Classic)', null, null, this.getTagsForStencil(gn, 'os images classic', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Service_Fabric_Clusters.svg;',
					r * 0.1675, r * 0.16, '', 'Service Fabric Clusters', null, null, this.getTagsForStencil(gn, 'service fabric clusters', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Shared_Image_Galleries.svg;',
					r * 0.16, r * 0.16, '', 'Shared Image Galleries', null, null, this.getTagsForStencil(gn, 'shared image galleries', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Azure_Spring_Cloud.svg;',
					r * 0.17, r * 0.16, '', 'Spring Cloud', null, null, this.getTagsForStencil(gn, 'azure spring cloud', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Virtual_Machine.svg;',
					r * 0.1725, r * 0.16, '', 'Virtual Machine', null, null, this.getTagsForStencil(gn, 'virtual machine', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Virtual_Machines_Classic.svg;',
					r * 0.1725, r * 0.16, '', 'Virtual Machines (Classic)', null, null, this.getTagsForStencil(gn, 'virtual machines classic', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'VM_Images_Classic.svg;',
					r * 0.1725, r * 0.16, '', 'VM Images (Classic)', null, null, this.getTagsForStencil(gn, 'vm images classic', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'VM_Scale_Sets.svg;',
					r * 0.17, r * 0.17, '', 'VM Scale Sets', null, null, this.getTagsForStencil(gn, 'vm scale sets', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'Workspaces.svg;',
					r * 0.1625, r * 0.14, '', 'Workspaces', null, null, this.getTagsForStencil(gn, 'workspaces', dt).join(' '))
		];
			
		this.addPalette('azure2Compute', 'Azure / Compute', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};