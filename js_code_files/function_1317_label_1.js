EditorUi.prototype.getLinkForPage=function(b,d,f){if(null!=b&&!mxClient.IS_CHROMEAPP&&!EditorUi.isElectronApp){var c=this.getCurrentFile();if(null!=c&&c.constructor!=LocalFile&&"draw.io"==this.getServiceName()){var l=this.getSearch("create title mode url drive splash state clibs ui viewbox hide-pages sketch".split(" "));l+=(0==l.length?"?":"&")+"page-id="+b.getId();null!=d&&(l+="&"+d.join("&"));return(f&&"1"!=urlParams.dev?EditorUi.lightboxHost:mxClient.IS_CHROMEAPP||EditorUi.isElectronApp||!/.*\.draw\.io$/.test(window.location.hostname)?
EditorUi.drawHost:"https://"+window.location.host)+"/"+l+"#"+c.getHash()}}return null};