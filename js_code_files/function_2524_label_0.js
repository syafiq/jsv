"",k.appendChild(n),mxUtils.setPrefixedStyle(k.style,"transform","translate(0, 0)"),k.style.width="auto",k.style.bottom="12px",k.style.padding="0px",k.style.top="",n.style.backgroundImage="url("+Editor.expandLessImage+")",n.style.width="24px",n.style.height="24px",n.style.margin="0px",I=!0)}));this.addListener("darkModeChanged",G);this.addListener("sketchModeChanged",G);G();this.sketchWrapperElt.appendChild(this.sketchPickerMenuElt)}};EditorUi.prototype.createMenubarForTheme=function(d){"simple"==
d||"sketch"==d?(null==this.sketchMenubarElt&&(this.sketchMenubarElt=document.createElement("div"),this.sketchMenubarElt.className="geToolbarContainer",this.sketchMenubarElt.style.cssText="display:flex;position:absolute;right:12px;top:10px;height:44px;border-radius:4px;padding:7px 12px;overflow:hidden;z-index:1;flex-wrap:nowrap;user-select:none;box-sizing:border-box;border-bottom:1px solid lightgray;max-width:calc(100% - 170px);justify-content:flex-end;align-items:center;gap:6px;",this.sketchWrapperElt.appendChild(this.sketchMenubarElt),
"1"!=urlParams.embedInline&&(d=mxUtils.bind(this,function(){var g=58>this.sketchPickerMenuElt.offsetTop-this.sketchPickerMenuElt.offsetHeight/2;this.sketchMainMenuElt.style.left=g?"70px":"10px";this.sketchMenubarElt.style.maxWidth=g?"calc(100% - 230px)":"calc(100% - 170px)"}),d(),mxEvent.addListener(window,"resize",d)),"1"!=urlParams.embed&&"atlassian"!=this.getServiceName()&&this.installStatusMinimizer(this.sketchMenubarElt)),null!=this.statusContainer&&(this.statusContainer.style.flexShrink="1",
this.statusContainer.style.height="30px",this.statusContainer.style.marginTop="0px",this.sketchMenubarElt.appendChild(this.statusContainer)),null!=this.userElement&&(this.userElement.style.flexShrink="0",this.userElement.style.top="",this.sketchMenubarElt.appendChild(this.userElement)),d=this.menubar.langIcon,null!=d&&(d.style.position="",d.style.height="21px",d.style.width="21px",d.style.flexShrink="0",this.sketchMenubarElt.appendChild(d)),null!=this.buttonContainer&&(this.buttonContainer.style.flexShrink=
"0",this.buttonContainer.style.padding="0px",this.buttonContainer.style.position="",this.sketchMenubarElt.appendChild(this.buttonContainer))):(null!=this.statusContainer&&(this.statusContainer.style.flexShrink="",this.statusContainer.style.height="",this.statusContainer.style.marginTop="",this.menubar.container.appendChild(this.statusContainer)),null!=this.userElement&&(this.userElement.style.flexShrink="",this.userElement.style.top="3px",this.menubarContainer.appendChild(this.userElement)),d=this.menubar.langIcon,
null!=d&&(d.style.position="absolute",d.style.height="18px",d.style.width="18px",d.style.flexShrink="",this.menubarContainer.parentNode.insertBefore(d,this.menubarContainer)),null!=this.buttonContainer&&(this.buttonContainer.style.display="inline-block",this.buttonContainer.style.position="absolute",this.buttonContainer.style.flexShrink="",this.buttonContainer.style.padding="",this.buttonContainer.style.paddingRight="32px",this.buttonContainer.style.right="0px",this.menubar.container.appendChild(this.buttonContainer)))};