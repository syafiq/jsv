				graph.getGlobalVariable = function(name)
				{
					if (name == 'page')
					{
						return page.getName();
					}
					else if (name == 'pagenumber')
					{
						return 1;
					}
					
					return graphGetGlobalVariable.apply(this, arguments);
				};