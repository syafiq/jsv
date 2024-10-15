		graph.updateCellStyles({'sketch': (checked) ? '1' : null},
			graph.getVerticesAndEdges());
		ui.setSketchMode(!Editor.sketchMode);
	}, null, function(div)