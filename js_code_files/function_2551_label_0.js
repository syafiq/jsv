null!=p?p:DRAW_MATH_URL+"/startup.js";Editor.mathJaxQueue=[];Editor.doMathJaxRender=function(S){try{MathJax.typesetClear([S]),MathJax.typeset([S]),Editor.onMathJaxDone()}catch(R){MathJax.typesetClear([S]),null!=R.retry?R.retry.then(function(){MathJax.typesetPromise([S]).then(Editor.onMathJaxDone)}):null!=window.console&&console.log("Error in MathJax: "+R.toString())}};window.MathJax=null!=B?B:{options:{skipHtmlTags:{"[+]":["text"]}},loader:{load:["html"==urlParams["math-output"]?"output/chtml":"output/svg",