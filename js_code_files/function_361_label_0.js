                    title: escapeHtml(label),
                    group: group
                };
                dataHandler.mapping_value_to_nodeID.set(label, node.id);
            } else {
                group =  'attribute';
                label = escapeHtml(node.type) + ': ' + node.label;
                label += ' ' + escapeHtml(node.comment)
                var labelHtml = escapeHtml(label) + '</br><i>' + escapeHtml(node.comment) + '</i>'
                var striped_value = that.strip_text_value(label);
                node_conf = {
                    id: node.id,
                    uuid: node.uuid,
                    event_id: node.event_id,
                    label: striped_value,
                    title: labelHtml,
                    group: group,
                    mass: 5,
                };
                if (node.type == 'attachment' && isPicture(node.label)) {
                    // fetch picture via attributes/viewPicture
                    node_conf.group = 'attribute_image';
                    node_conf.size = $('#slider_display_picture_size').val();
                    node_conf.image = baseurl + '/attributes/viewPicture/' + node.id + '/1';
                }
                dataHandler.mapping_value_to_nodeID.set(label, node.id);
            }

            newNodes.push(node_conf);
            newNodeIDs.push(node.id);
        }
        // check if nodes got deleted
        var old_node_ids = that.nodes.getIds();
        for (var old_id of old_node_ids) {
            // Ignore root node
            if (old_id == "rootNode:attribute" || old_id == "rootNode:object" || old_id == "rootNode:tag" || old_id == "rootNode:keyType") {
                continue;
            }
            // This old node got removed
            if (newNodeIDs.indexOf(old_id) == -1) {
                that.nodes.remove(old_id);
            }
        }

        that.nodes.update(newNodes);

        // New relations will be automatically added
        // removed references will be deleted
        var newRelations = [];
        var newRelationIDs = [];
        for(var rel of data.relations) {
            var rel = {
                id: rel.id,
                from: rel.from,
                to: rel.to,
                label: rel.type,
                title: rel.comment,
                color: {
                    opacity: 1.0,
                }
            };
            newRelations.push(rel);
            newRelationIDs.push(rel.id);
            if (!dataHandler.mapping_node_to_from_edges[rel.from]) {
                dataHandler.mapping_node_to_from_edges[rel.from] = [];
            }
            if (!dataHandler.mapping_node_to_to_edges[rel.to]) {
                dataHandler.mapping_node_to_to_edges[rel.to] = [];
            }
            dataHandler.mapping_node_to_from_edges[rel.from].push(rel.to);
            dataHandler.mapping_node_to_to_edges[rel.to].push(rel.from);
        }
        // check if nodes got deleted
        var old_rel_ids = that.edges.getIds();
        for (var old_id of old_rel_ids) {
            // This old node got removed
            if (newRelationIDs.indexOf(old_id) == -1) {
                that.edges.remove(old_id);
            }
        }

        that.edges.update(newRelations);

        that.remove_root_nodes();
        // do not clusterize if the network is filtered
        if (!that.is_filtered) {
            if (that.scope_name == 'Reference') {
                that.add_unreferenced_root_node();
                // links unreferenced attributes and object to root nodes
                if (that.first_draw) {
                    that.link_not_referenced_nodes();
                    that.first_draw = !that.first_draw
                }
            } else if (that.scope_name == 'Tag') {
                that.add_tag_root_node();
                // links untagged attributes and object to root nodes
                if (that.first_draw) {
                    that.link_not_referenced_nodes();
                    that.first_draw = !that.first_draw
                }
            } else if (that.scope_name == 'Distribution') {
            } else if (that.scope_name == 'Correlation') {
            } else {
                that.add_keyType_root_node();
                if (that.first_draw) {
                    that.link_not_referenced_nodes();
                    that.first_draw = !that.first_draw
                }
            }
        }

        eventGraph.canDrawHull = true;
        that.network_loading(false, "");
    }