"\n":"")+Graph.svgDoctype+"\n"+mxUtils.getXml(V))});this.editor.graph.mathEnabled&&this.editor.addMathCss(F);var U=mxUtils.bind(this,function(V){q?(null==this.thumbImageCache&&(this.thumbImageCache={}),this.editor.convertImages(V,P,this.thumbImageCache)):P(V)});u?this.embedFonts(F,U):(this.editor.addFontCss(F),U(F))}catch(V){this.handleError(V)}};EditorUi.prototype.addRadiobox=function(c,e,f,n,p,q,y){return this.addCheckbox(c,f,n,p,q,y,!0,e)};EditorUi.prototype.addCheckbox=function(c,e,f,n,p,q,y,