!1,mxSettings.save()),null!=mxSettings.settings.scratchpadSeen&&delete mxSettings.settings.scratchpadSeen)},clear:function(){isLocalStorage&&localStorage.removeItem(mxSettings.key)}};("undefined"==typeof mxLoadSettings||mxLoadSettings)&&mxSettings.load();DrawioFilePuller=function(b,f){this.file=b;this.sync=f};