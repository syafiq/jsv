function(){var e=document.createElement("div");e.style.display="inline-block";document.createElement("button").className="geBigButton";"1"==urlParams.noSaveBtn?"0"!=urlParams.saveAndExit&&e.appendChild(this.createEmbedButton("1"==urlParams.publishClose?mxResources.get("publish"):mxResources.get("saveAndExit"),this.actions.get("saveAndExit").funct,null,!0)):(e.appendChild(this.createEmbedButton(mxResources.get("save"),mxUtils.bind(this,function(){this.actions.get("save").funct(!1)}),Editor.ctrlKey+
"+S",!0)),"1"==urlParams.saveAndExit&&e.appendChild(this.createEmbedButton(mxResources.get("saveAndExit"),this.actions.get("saveAndExit").funct)));"1"!=urlParams.noExitBtn&&e.appendChild(this.createEmbedButton("1"==urlParams.publishClose?mxResources.get("close"):mxResources.get("exit"),this.actions.get("exit").funct));"simple"==Editor.currentTheme||"sketch"==Editor.currentTheme||"min"==Editor.currentTheme?null!=this.buttonContainer&&(e.style.position="relative","simple"!=Editor.currentTheme&&(e.style.marginRight=
"4px","1"!=urlParams.sketch?(e.style.marginTop="6px",this.buttonContainer.style.top="6px"):this.buttonContainer.style.top="0px"),this.buttonContainer.appendChild(e),this.editor.fireEvent(new mxEventObject("statusChanged"))):null!=this.menubar&&(e.style.position="absolute",e.style.padding="2px",e.style.right="62px",this.toolbar.container.appendChild(e),this.toolbar.staticElements.push(e))};EditorUi.prototype.showImportCsvDialog=function(){null==this.importCsvDialog&&(this.importCsvDialog=new TextareaDialog(this,