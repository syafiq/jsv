                    url: Routing.generate('pimcore_ecommerceframework_pricing_delete'),
                    method: 'DELETE',
                    params: {
                        id: record.id
                    },
                    success: function () {
                        this.refresh(this.tree.getRootNode());
                    }.bind(this)
                });
        }.bind(this));

    },