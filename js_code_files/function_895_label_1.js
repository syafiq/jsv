EditorUi.prototype.getUrl=function(d){d=null!=d?d:window.location.pathname;var f=0<d.indexOf("?")?1:0;if("1"==urlParams.offline)d+=window.location.search;else{var g="tmp libs clibs state fileId code share notitle data url embed client create title splash".split(" "),v;for(v in urlParams)0>mxUtils.indexOf(g,v)&&(d=0==f?d+"?":d+"&",null!=urlParams[v]&&(d+=v+"="+urlParams[v],f++))}return d};EditorUi.prototype.showLinkDialog=function(d,f,g,v,x){d=new LinkDialog(this,d,f,g,!0,v,x);this.showDialog(d.container,
560,130,!0,!0);d.init()};EditorUi.prototype.getServiceCount=function(d){var f=1;null==this.drive&&"function"!==typeof window.DriveClient||f++;null==this.dropbox&&"function"!==typeof window.DropboxClient||f++;null==this.oneDrive&&"function"!==typeof window.OneDriveClient||f++;null!=this.gitHub&&f++;null!=this.gitLab&&f++;d&&isLocalStorage&&"1"==urlParams.browser&&f++;return f};EditorUi.prototype.updateUi=function(){this.updateButtonContainer();this.updateActionStates();var d=this.getCurrentFile(),