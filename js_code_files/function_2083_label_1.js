(mxClient.IS_IOS?"html input[type=checkbox], html input[type=radio] { height:12px; }":"")+("1"==urlParams.sketch?"a.geStatus > div { overflow: hidden; text-overflow: ellipsis; max-width: 100%; }":"")};EditorUi.prototype.isAutoDarkMode=function(){return"auto"==urlParams.dark||this.isSettingsEnabled()&&"auto"==mxSettings.settings.darkMode};EditorUi.prototype.setAndPersistDarkMode=function(e){var g=e;"auto"==e&&(g=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);this.setDarkMode(g);
mxSettings.settings.darkMode=e;mxSettings.save();g=mxSettings.getUi();"auto"!=e&&"atlas"!=g&&"min"!=g&&"sketch"!=g&&"simple"!=g&&this.setCurrentTheme(Editor.isDarkMode()?"dark":"kennedy",!0)};EditorUi.prototype.setAndPersistLanguage=function(e){mxSettings.setLanguage(e);mxSettings.save();mxClient.language=e;mxResources.loadDefaultBundle=!1;mxResources.add(RESOURCE_BASE)};EditorUi.prototype.setDarkMode=function(e){this.doSetDarkMode(e);this.fireEvent(new mxEventObject("darkModeChanged"))};var B=document.createElement("link");