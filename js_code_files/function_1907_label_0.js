urlParams.embed&&"0"!=urlParams.gapi||"1"==urlParams.embed&&"1"==urlParams.gapi)&&isSvgBrowser&&isLocalStorage&&(null==document.documentMode||10<=document.documentMode)?mxscript("https://apis.google.com/js/api.js?onload=DrawGapiClientCallback",null,null,null,mxClient.IS_SVG):"undefined"===typeof window.gapi&&(window.DriveClient=null)}"0"!=urlParams.math&&Editor.initMath();if("1"==urlParams.configure){var y=window.opener||window.parent,C=function(z){if(z.source==y)try{var A=JSON.parse(z.data);null!=
A&&"configure"==A.action&&(mxEvent.removeListener(window,"message",C),Editor.configure(A.config),mxSettings.load(),A.colorSchemeMeta&&mxmeta("color-scheme","dark light"),c())}catch(J){null!=window.console&&console.log("Error in configure message: "+J,z.data)}};mxEvent.addListener(window,"message",C);y.postMessage(JSON.stringify({event:"configure"}),"*")}else{if(null==Editor.config){if(null!=window.DRAWIO_CONFIG)try{EditorUi.debug("Using global configuration",window.DRAWIO_CONFIG),Editor.configure(window.DRAWIO_CONFIG),