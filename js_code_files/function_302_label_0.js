u(F)}));else if(Graph.fileSupport&&(new XMLHttpRequest).upload&&this.isRemoteFileFormat(d,g))this.isOffline()?(this.spinner.stop(),this.showError(mxResources.get("error"),mxResources.get("notInOffline"))):this.parseFile(k,mxUtils.bind(this,function(F){4==F.readyState&&(this.spinner.stop(),200<=F.status&&299>=F.status?u(F.responseText):this.handleError({message:mxResources.get(413==F.status?"drawingTooLarge":"invalidOrMissingFile")},mxResources.get("errorLoadingFile")))}));else if(this.isLucidChartData(d))/(\.json)$/i.test(g)&&