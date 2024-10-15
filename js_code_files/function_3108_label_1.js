	Sidebar.prototype.addBPMN2TasksPalette = function(gn, r, sb)
	{
		var dt = 'bpmn business process model notation task ';
		var pts = 'points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];';
		var s1 = pts + 'shape=mxgraph.bpmn.task;whiteSpace=wrap;rectStyle=rounded;size=10;taskMarker=abstract;';
		var s2 = pts + 'shape=mxgraph.bpmn.task;whiteSpace=wrap;rectStyle=rounded;size=10;taskMarker=';
		var s3 = pts + 'shape=mxgraph.bpmn.task;whiteSpace=wrap;rectStyle=rounded;size=10;taskMarker=abstract;bpmnShapeType=subprocess;isLoopSub=1;outline=';
		var s4 = pts + 'shape=mxgraph.bpmn.task;whiteSpace=wrap;rectStyle=rounded;size=10;bpmnShapeType=call;';
		var w = 50;
		var h = 50;
		
		var fns =
		[
			this.createVertexTemplateEntry(s1 + '', 120, 80, '', 'Generic Task', null, null, dt + 'generic'),
			this.createVertexTemplateEntry(s1 + 'isLoopStandard=1;', 120, 80, '', 'Standard Loop', null, null, dt + 'standard loop'),
			this.createVertexTemplateEntry(s1 + 'isLoopStandard=1;isLoopSub=1;', 120, 80, '', 'Standard Loop', null, null, dt + 'standard loop'),
			this.createVertexTemplateEntry(s1 + 'isLoopMultiParallel=1;', 120, 80, '', 'Multi-Instance, Parallel', null, null, dt + 'multi instance parallel'),
			this.createVertexTemplateEntry(s1 + 'isLoopSub=1;isLoopMultiParallel=1;', 120, 80, '', 'Multi-Instance, Parallel', null, null, dt + 'multi instance parallel'),
			this.createVertexTemplateEntry(s1 + 'isLoopMultiSeq=1;', 120, 80, '', 'Multi-Instance, Sequential', null, null, dt + 'multi instance sequential'),
			this.createVertexTemplateEntry(s1 + 'isLoopSub=1;isLoopMultiSeq=1;', 120, 80, '', 'Multi-Instance, Sequential', null, null, dt + 'multi instance sequential'),
			this.createVertexTemplateEntry(s1 + 'isLoopComp=1;', 120, 80, '', 'Compensation', null, null, dt + 'compensation'),
			this.createVertexTemplateEntry(s1 + 'isLoopSub=1;isLoopComp=1;', 120, 80, '', 'Compensation', null, null, dt + 'compensation'),
			this.createVertexTemplateEntry(s1 + 'isLoopComp=1;isLoopStandard=1;', 120, 80, '', 'Loop and Compensation', null, null, dt + 'loop compensation'),
			this.createVertexTemplateEntry(s1 + 'isLoopComp=1;isLoopStandard=1;isLoopSub=1;', 120, 80, '', 'Loop and Compensation', null, null, dt + 'loop compensation'),
			this.createVertexTemplateEntry(s1 + 'isAdHoc=1;isLoopSub=1;', 120, 80, '', 'Ad Hoc, Collapsed', null, null, dt + 'ad hoc collapsed'),
			this.createVertexTemplateEntry(s1 + 'isAdHoc=1;', 120, 80, '', 'Ad Hoc, Expanded', null, null, dt + 'ad hoc expanded'),
			
			this.createVertexTemplateEntry(s2 + 'service;', 120, 80, '', 'Service', null, null, dt + 'service'),
			this.createVertexTemplateEntry(s2 + 'send;', 120, 80, '', 'Send', null, null, dt + 'send'),
			this.createVertexTemplateEntry(s2 + 'receive;', 120, 80, '', 'Receive', null, null, dt + 'receive'),
			this.createVertexTemplateEntry(s2 + 'user;', 120, 80, '', 'User', null, null, dt + 'user'),
			this.createVertexTemplateEntry(s2 + 'manual;', 120, 80, '', 'Manual', null, null, dt + 'manual'),
			this.createVertexTemplateEntry(s2 + 'businessRule;', 120, 80, '', 'Business Rule', null, null, dt + 'business rule'),
			this.createVertexTemplateEntry(s2 + 'script;', 120, 80, '', 'Script', null, null, dt + 'script'),
			this.createVertexTemplateEntry(s1 + 'isLoopSub=1;', 120, 80, '', 'Sub-Process, Collapsed', null, null, dt + 'sub process subprocess collapsed'),
						
			this.createVertexTemplateEntry(s2 + 'abstract;bpmnShapeType=transaction;isLoopSub=1;', 120, 80, '', 'Transaction, Collapsed', null, null, dt + 'transaction collapsed'),
			this.createVertexTemplateEntry(s2 + 'abstract;bpmnShapeType=transaction;', 120, 80, '', 'Transaction, Expanded', null, null, dt + 'transaction expanded'),
			
			this.createVertexTemplateEntry(s3 + 'eventNonint;symbol=message;', 120, 80, '', 'Message-Event Sub-Process, Non-interrupting, Collapsed', null, null, dt + 'non interrupting message event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=message;', 120, 80, '', 'Message-Event Sub-Process, Interrupting, Collapsed', null, null, dt + 'interrupting message event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventNonint;symbol=timer;', 120, 80, '', 'Timer-Event Sub-Process, Non-interrupting, Collapsed', null, null, dt + 'non interrupting timer event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=timer;', 120, 80, '', 'Timer-Event Sub-Process, Interrupting, Collapsed', null, null, dt + 'interrupting timer event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventNonint;symbol=conditional;', 120, 80, '', 'Conditional-Event Sub-Process, Non-interrupting, Collapsed', null, null, dt + 'non interrupting conditional event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=conditional;', 120, 80, '', 'Conditional-Event Sub-Process, Interrupting, Collapsed', null, null, dt + 'interrupting conditional event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventNonint;symbol=signal;', 120, 80, '', 'Signal-Event Sub-Process, Non-interrupting, Collapsed', null, null, dt + 'non interrupting signal event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=signal;', 120, 80, '', 'Signal-Event Sub-Process, Interrupting, Collapsed', null, null, dt + 'interrupting signal event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventNonint;symbol=multiple;', 120, 80, '', 'Multiple-Event Sub-Process, Non-interrupting, Collapsed', null, null, dt + 'non interrupting multiple event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=multiple;', 120, 80, '', 'Multiple-Event Sub-Process, Interrupting, Collapsed', null, null, dt + 'interrupting multiple event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventNonint;symbol=parallelMultiple;', 120, 80, '', 'Parallel Multiple Event Sub-Process, Non-interrupting, Collapsed', null, null, dt + 'non interrupting parallel multiple event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=parallelMultiple;', 120, 80, '', 'Parallel Multiple Event Sub-Process, Interrupting , Collapsed', null, null, dt + 'interrupting parallel multiple event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventNonint;symbol=escalation;', 120, 80, '', 'Escalation-Event Sub-Process, Non-interrupting, Collapsed', null, null, dt + 'non interrupting escalation event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=escalation;', 120, 80, '', 'Escalation-Event Sub-Process, Interrupting, Collapsed', null, null, dt + 'interrupting escalation event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=error;', 120, 80, '', 'Error-Event Sub-Process, Interrupting, Collapsed', null, null, dt + 'interrupting error event sub process collapsed'),
			this.createVertexTemplateEntry(s3 + 'eventInt;symbol=compensation;', 120, 80, '', 'Compensation-Event Sub-Process, Interrupting, Collapsed', null, null, dt + 'interrupting compensation event sub process collapsed'),
			this.createVertexTemplateEntry('points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];shape=mxgraph.bpmn.task;arcSize=10;taskMarker=abstract;outline=none;symbol=general;bpmnShapeType=subprocess;isLoopSub=0;verticalAlign=top;align=left;spacingLeft=5;', 180, 100, '', 'Event Sub-Process, Expanded', null, null, dt + 'event sub process expanded'),

			this.createVertexTemplateEntry(s4, 120, 80, '', 'Call Activity', null, null, dt + 'call activity'),
			this.createVertexTemplateEntry(s4 + 'taskMarker=user;', 120, 80, '', 'User Call Activity', null, null, dt + 'user call activity'),
			this.createVertexTemplateEntry(s4 + 'taskMarker=manual;', 120, 80, '', 'Manual Call Activity', null, null, dt + 'manual call activity'),
			this.createVertexTemplateEntry(s4 + 'taskMarker=businessRule;', 120, 80, '', 'Business Rule Call Activity', null, null, dt + 'business rule call activity'),
			this.createVertexTemplateEntry(s4 + 'taskMarker=script;', 120, 80, '', 'Script Call Activity', null, null, dt + 'script call activity'),
			this.createVertexTemplateEntry(s4 + 'isLoopSub=1;', 120, 80, '', 'Call Activity, Collapsed', null, null, dt + 'call activity collapsed'),
			this.createVertexTemplateEntry(s4 + 'verticalAlign=top;align=left;spacingLeft=5;', 180, 100, '', 'Call Activity, Expanded', null, null, dt + 'call activity expanded')
		];
			
		this.addPalette('bpmn2Tasks', 'BPMN 2.0 \ Tasks', false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};