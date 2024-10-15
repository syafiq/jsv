            onNodeDrop : this.onNodeDrop.bind(this)
        });


        var eConfig = {};

        eConfig.toolbarGroups = [
            {name: 'basicstyles', groups: ['undo', 'find', 'basicstyles', 'list']},
            '/',
            {name: 'paragraph', groups: ['align', 'indent']},
            {name: 'blocks'},
            {name: 'links'},
            {name: 'insert'},
            '/',
            {name: 'styles'},
            {name: 'tools', groups: ['colors', 'tools', 'cleanup', 'mode', 'others']}
        ];

        //prevent override important settings!
        eConfig.resize_enabled = false;
        eConfig.enterMode = CKEDITOR.ENTER_BR;
        eConfig.entities = false;
        eConfig.entities_greek = false;
        eConfig.entities_latin = false;
        eConfig.extraAllowedContent = "*[pimcore_type,pimcore_id]";
        eConfig.baseFloatZIndex = 40000;   // prevent that the editor gets displayed behind the grid cell editor window

        if (eConfig.hasOwnProperty('removePlugins')) {
            eConfig.removePlugins += ",tableresize";
        }
        else {
            eConfig.removePlugins = "tableresize";
        }


        try {
            this.ckeditor = CKEDITOR.inline(this.editableDivId, eConfig);
            this.ckeditor.setData(this.field.getValue());

            // disable URL field in image dialog
            this.ckeditor.on("dialogShow", function (e) {
                var urlField = e.data.getElement().findOne("input");
                if (urlField && urlField.getValue()) {
                    if (urlField.getValue().indexOf("/image-thumbnails/") > 1) {
                        urlField.getParent().getParent().getParent().hide();
                    }
                } else if (urlField) {
                    urlField.getParent().getParent().getParent().show();
                }
            });
        } catch (e) {
            console.log(e);
        }
    },