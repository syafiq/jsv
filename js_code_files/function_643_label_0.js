			function getNextNode(node)
			{
				if (node.firstChild)
					return node.firstChild;
				while (node)
				{
					if (node.nextSibling)
						return node.nextSibling;
					node = node.parentNode;
				}
			};