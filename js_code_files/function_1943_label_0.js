this.resetEdgesOnConnect=!1;this.constrainRelativeChildren=!0;this.graphHandler.scrollOnMove=!1;this.graphHandler.scaleGrid=!0;this.connectionHandler.setCreateTarget(!1);this.connectionHandler.insertBeforeSource=!0;this.connectionHandler.isValidSource=function(J,V){return!1};this.alternateEdgeStyle="vertical";null==l&&this.loadStylesheet();var R=this.graphHandler.getGuideStates;this.graphHandler.getGuideStates=function(){var J=R.apply(this,arguments);if(this.graph.pageVisible){var V=[],T=this.graph.pageFormat,