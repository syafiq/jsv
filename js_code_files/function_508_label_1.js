18*F.childNodes.length+"px"}};EditorUi.prototype.addLibraryEntries=function(d,f){for(var g=0;g<d.length;g++){var v=d[g],x=v.data;if(null!=x){x=this.convertDataUri(x);var A="shape=image;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=0;";"fixed"==v.aspect&&(A+="aspect=fixed;");f.appendChild(this.sidebar.createVertexTemplate(A+"image="+x,v.w,v.h,"",v.title||"",!1,null,!0))}else null!=v.xml&&(x=this.stringToCells(Graph.decompress(v.xml)),0<x.length&&f.appendChild(this.sidebar.createVertexTemplateFromCells(x,
v.w,v.h,v.title||"",!0,null,!0)))}};EditorUi.prototype.getResource=function(d){return null!=d?d[mxLanguage]||d.main:null};EditorUi.prototype.footerHeight=0;"1"==urlParams.savesidebar&&(Sidebar.prototype.thumbWidth=64,Sidebar.prototype.thumbHeight=64);EditorUi.initTheme=function(){"atlas"==Editor.currentTheme&&(mxClient.link("stylesheet",STYLE_PATH+"/atlas.css"),"undefined"!==typeof Toolbar&&(Toolbar.prototype.unselectedBackground="linear-gradient(rgb(255, 255, 255) 0px, rgb(242, 242, 242) 100%)",