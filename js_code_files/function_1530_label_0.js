"input/tex","input/asciimath","ui/safe"]},startup:{pageReady:function(){for(var S=0;S<Editor.mathJaxQueue.length;S++)Editor.doMathJaxRender(Editor.mathJaxQueue[S])}}};Editor.MathJaxRender=function(S){"undefined"!==typeof MathJax&&"function"===typeof MathJax.typeset?Editor.doMathJaxRender(S):Editor.mathJaxQueue.push(S)};Editor.MathJaxClear=function(){Editor.mathJaxQueue=[]};Editor.onMathJaxDone=function(){};var L=Editor.prototype.init;Editor.prototype.init=function(){L.apply(this,arguments);var S=
mxUtils.bind(this,function(R,T){null!=this.graph.container&&this.graph.mathEnabled&&!this.graph.blockMathRender&&Editor.MathJaxRender(this.graph.container)});this.graph.model.addListener(mxEvent.CHANGE,S);this.graph.addListener(mxEvent.REFRESH,S)};B=document.getElementsByTagName("script");if(null!=B&&0<B.length){var Q=document.createElement("script");Q.setAttribute("type","text/javascript");Q.setAttribute("src",p);B[0].parentNode.appendChild(Q)}}};Editor.prototype.csvToArray=function(p){if(0<p.length){var B=