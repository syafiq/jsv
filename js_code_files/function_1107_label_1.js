EditorUi.isElectronApp?c.alert(c.editor.appName+" "+EditorUi.VERSION):c.openLink("https://www.diagrams.net/")}));c.actions.addAction("support...",function(){EditorUi.isElectronApp?c.openLink("https://github.com/jgraph/drawio-desktop/wiki/Getting-Support"):c.openLink("https://github.com/jgraph/drawio/wiki/Getting-Support")});c.actions.addAction("exportOptionsDisabled...",function(){c.handleError({message:mxResources.get("exportOptionsDisabledDetails")},mxResources.get("exportOptionsDisabled"))});c.actions.addAction("keyboardShortcuts...",