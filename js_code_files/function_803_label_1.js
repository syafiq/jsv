        getNodeLabel: function (configAttributes) {
            var nodeLabel = configAttributes.label ? configAttributes.label : this.getDefaultText();
            if (configAttributes.attribute) {
                var attr = configAttributes.attribute;
                if (configAttributes.param1) {
                    attr += " " + configAttributes.param1;
                }
                nodeLabel += '<span class="pimcore_gridnode_hint"> (' + attr + ')</span>';
            }

            return nodeLabel;
        }