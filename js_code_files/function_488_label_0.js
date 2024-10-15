this.addListener("inlineFullscreenChanged",g);d.appendChild(this.createMenuItem("exit",Editor.closeImage))}this.sketchWrapperElt.appendChild(this.sketchFooterMenuElt)}};EditorUi.prototype.createPickerMenuForTheme=function(d){if(("simple"==d||"sketch"==d)&&null==this.sketchPickerMenuElt){var f=this.editor.graph;this.sketchPickerMenuElt=document.createElement("div");this.sketchPickerMenuElt.className="geToolbarContainer";this.sketchPickerMenuElt.style.cssText="position:absolute;left:10px;border-radius:4px;padding:0px 4px 4px;white-space:nowrap;max-height:100%;width:48px;z-index:1;box-sizing:border-box;transform:translate(0, -50%);top:50%;user-select:none;";
var g=this.sketchPickerMenuElt;mxUtils.setPrefixedStyle(g.style,"transition","transform .3s ease-out");var u=document.createElement("a");u.style.padding="0px";u.style.boxShadow="none";u.className="geMenuItem geAdaptiveAsset";u.style.display="block";u.style.width="100%";u.style.height="14px";u.style.margin="4px 0 2px 0";u.style.backgroundImage="url("+Editor.expandMoreImage+")";u.style.backgroundPosition="center center";u.style.backgroundRepeat="no-repeat";u.style.backgroundSize="22px";mxUtils.setOpacity(u,
40);u.setAttribute("title",mxResources.get("collapseExpand"));var x=u.style.margin,A=this.createMenuItem("insertFreehand",Editor.freehandImage,!0);A.style.paddingLeft="12px";A.style.backgroundSize="";A.style.width="26px";A.style.height="30px";A.style.opacity="0.7";var H=this.createMenu("insert",Editor.addBoxImage);H.style.backgroundSize="";H.style.display="block";H.style.width="30px";H.style.height="30px";H.style.padding="4px 4px 0px 4px";H.style.opacity="0.7";var P=H.cloneNode(!0);P.style.backgroundImage=
"url("+Editor.shapesImage+")";P.style.backgroundSize="24px";mxEvent.addListener(P,"click",mxUtils.bind(this,function(ia){var ja=mxUtils.getOffset(H);this.showShapePicker(this.diagramContainer.scrollLeft+ja.x+H.offsetWidth+8,this.diagramContainer.scrollTop+ja.y+10,null,null,null,null,mxUtils.bind(this,function(ha){return f.getCenterInsertPoint(f.getBoundingBoxFromGeometry(ha,!0))}));mxEvent.consume(ia)}));H.style.backgroundSize="24px";H.style.marginBottom="4px";var M=!1,G=mxUtils.bind(this,function(){g.innerText=
"";if(!M){var ia=function(ha,ba,oa,sa,J,V){null!=ba&&ha.setAttribute("title",ba);ha.style.cursor="pointer";ha.style.margin="8px 0px 8px 2px";ha.style.display="block";g.appendChild(ha);null!=sa&&(ba=J,ba=null!=ba?ba:30,V=null!=V?V:26,ha.style.position="relative",ha.style.overflow="visible",oa=document.createElement("div"),oa.style.position="absolute",oa.style.fontSize="8px",oa.style.left=ba+"px",oa.style.top=V+"px",mxUtils.write(oa,sa),ha.appendChild(oa));return ha};ia(this.sidebar.createVertexTemplate("text;strokeColor=none;fillColor=none;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
60,30,"Text",mxResources.get("text")+" (A)",!0,!1,null,!0,null,38,38),mxResources.get("text")+" (A)",null,"A",32).style.margin="0 0 0 -2px";ia(this.sidebar.createVertexTemplate("shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;fontColor=#000000;darkOpacity=0.05;fillColor=#FFF9B2;strokeColor=none;fillStyle=solid;direction=west;gradientDirection=north;gradientColor=#FFF2A1;shadow=1;size=20;pointerEvents=1;",140,160,"",mxResources.get("note")+" (S)",!0,!1,null,!0,null,28,28),mxResources.get("note")+
" (S)",null,"S").style.margin="4px 0px 6px 2px";ia(this.sidebar.createVertexTemplate("rounded=0;whiteSpace=wrap;html=1;",160,80,"",mxResources.get("rectangle")+" (D)",!0,!1,null,!0,null,28,28),mxResources.get("rectangle")+" (D)",null,"D").style.margin="4px 0px 6px 2px";ia(this.sidebar.createVertexTemplate("ellipse;whiteSpace=wrap;html=1;",160,100,"",mxResources.get("ellipse")+" (F)",!0,!1,null,!0,null,28,28),mxResources.get("ellipse")+" (F)",null,"F").style.margin="4px 0px 6px 2px";var ja=new mxCell("",
new mxGeometry(0,0,this.editor.graph.defaultEdgeLength+20,0),"edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;");ja.geometry.setTerminalPoint(new mxPoint(0,0),!0);ja.geometry.setTerminalPoint(new mxPoint(ja.geometry.width,0),!1);ja.geometry.points=[];ja.geometry.relative=!0;ja.edge=!0;ia(this.sidebar.createEdgeTemplateFromCells([ja],ja.geometry.width,ja.geometry.height,mxResources.get("line")+" (C)",!0,null,!0,!1,28,28),mxResources.get("line")+" (C)",null,"C").style.margin="1px 0px 1px 2px";
ja=ja.clone();ja.style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;shape=flexArrow;rounded=1;startSize=8;endSize=8;";ja.geometry.width=this.editor.graph.defaultEdgeLength+20;ja.geometry.setTerminalPoint(new mxPoint(0,20),!0);ja.geometry.setTerminalPoint(new mxPoint(ja.geometry.width,20),!1);ia(this.sidebar.createEdgeTemplateFromCells([ja],ja.geometry.width,40,mxResources.get("arrow"),!0,null,!0,!1,28,28),mxResources.get("arrow")).style.margin="1px 0px 1px 2px";ia(A,mxResources.get("freehand")+
" (X)",null,"X");this.sketchPickerMenuElt.appendChild(P);this.sketchPickerMenuElt.appendChild(H)}"1"!=urlParams.embedInline&&g.appendChild(u)});mxEvent.addListener(u,"click",mxUtils.bind(this,function(){M?(mxUtils.setPrefixedStyle(g.style,"transform","translate(0, -50%)"),g.style.padding="0px 4px 4px",g.style.width="48px",g.style.top="50%",g.style.bottom="",g.style.height="",u.style.backgroundImage="url("+Editor.expandMoreImage+")",u.style.width="100%",u.style.height="14px",u.style.margin=x,M=!1,
G()):(g.innerText="",g.appendChild(u),mxUtils.setPrefixedStyle(g.style,"transform","translate(0, 0)"),g.style.width="auto",g.style.bottom="12px",g.style.padding="0px",g.style.top="",u.style.backgroundImage="url("+Editor.expandLessImage+")",u.style.width="24px",u.style.height="24px",u.style.margin="0px",M=!0)}));this.addListener("darkModeChanged",G);this.addListener("sketchModeChanged",G);G();this.sketchWrapperElt.appendChild(this.sketchPickerMenuElt)}};EditorUi.prototype.createMenubarForTheme=function(d){"simple"==