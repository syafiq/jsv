(this.sketchStyleElt.parentNode.removeChild(this.sketchStyleElt),this.sketchStyleElt=null)};EditorUi.prototype.createWrapperForTheme=function(e){"simple"==e||"sketch"==e?(null==this.sketchWrapperElt&&(this.sketchWrapperElt=document.createElement("div"),this.sketchWrapperElt.style.cssText="position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:hidden;"),this.diagramContainer.parentNode.appendChild(this.sketchWrapperElt),this.sketchWrapperElt.appendChild(this.diagramContainer)):null!=this.sketchWrapperElt&&
null!=this.sketchWrapperElt.parentNode&&(this.tabContainer.parentNode.insertBefore(this.diagramContainer,this.tabContainer),this.sketchWrapperElt.parentNode.removeChild(this.sketchWrapperElt))};EditorUi.prototype.createMainMenuForTheme=function(e){"simple"!=e&&"sketch"!=e||null!=this.sketchMainMenuElt||(this.sketchMainMenuElt=document.createElement("div"),this.sketchMainMenuElt.className="geToolbarContainer",this.sketchMainMenuElt.style.cssText="position:absolute;left:10px;top:10px;height:44px;border-radius:4px;padding:9px 12px;overflow:hidden;z-index:1;white-space:nowrap;text-align:right;user-select:none;box-sizing:border-box;border-bottom:1px solid lightgray;",