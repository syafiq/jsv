			function getNodesInRange(range)
			{
				var start = range.startContainer;
				var end = range.endContainer;
				var commonAncestor = range.commonAncestorContainer;
				var nodes = [];
				var node;
			
				// walk parent nodes from start to common ancestor
				for (node = start.parentNode; node; node = node.parentNode)
				{
					nodes.push(node);
					if (node == commonAncestor)
						break;
				}
				nodes.reverse();
			
				// walk children and siblings from start until end is found
				for (node = start; node; node = getNextNode(node))
				{
					nodes.push(node);
					if (node == end)
						break;
				}
			
				return nodes;
			};