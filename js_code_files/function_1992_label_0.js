J,y)):f(new OneDriveFile(this.ui,J,y))}}catch(n){if(null!=c)c(n);else throw n;}}),mxUtils.bind(this,function(J){window.clearTimeout(A);z&&c(this.parseRequestText(J))}),C||null!=y.file&&null!=y.file.mimeType&&("image/"==y.file.mimeType.substring(0,6)&&"image/svg"!=y.file.mimeType.substring(0,9)||"application/pdf"==y.file.mimeType))}}else this.isExtAuth?c({message:mxResources.get("fileNotFoundOrDenied"),ownerEmail:null!=window.urlParams?urlParams.ownerEml:null}):c(this.parseRequestText(t))}),c)};OneDriveClient.prototype.renameFile=