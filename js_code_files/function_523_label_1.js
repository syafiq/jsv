Xa=mxRectangle.fromRectangle(Xa);Xa.width=Math.ceil(Xa.width*ua);Xa.height=Math.ceil(Xa.height*ua);ab*=ua;!Za&&Fa.pageVisible?(Sa=Fa.getPageLayout(),Wa-=Sa.x*Xa.width,$a-=Sa.y*Xa.height):Za=!0;if(null==Ha){Ha=PrintDialog.createPrintPreview(Fa,ab,Xa,0,Wa,$a,Za);Ha.pageSelector=!1;Ha.mathEnabled=!1;ea.checked&&(Ha.isCellVisible=function(Ya){return Fa.isCellSelected(Ya)});Wa=m.getCurrentFile();null!=Wa&&(Ha.title=Wa.getTitle());var hb=Ha.writeHead;Ha.writeHead=function(Ya){hb.apply(this,arguments);mxClient.IS_GC&&
(Ya.writeln('<style type="text/css">'),Ya.writeln("@media print {"),Ya.writeln(".MathJax svg { shape-rendering: crispEdges; }"),Ya.writeln("}"),Ya.writeln("</style>"));null!=m.editor.fontCss&&(Ya.writeln('<style type="text/css">'),Ya.writeln(m.editor.fontCss),Ya.writeln("</style>"));for(var cb=Fa.getCustomFonts(),bb=0;bb<cb.length;bb++){var eb=cb[bb].name,db=cb[bb].url;Graph.isCssFontUrl(db)?Ya.writeln('<link rel="stylesheet" href="'+mxUtils.htmlEntities(db)+'" charset="UTF-8" type="text/css">'):
(Ya.writeln('<style type="text/css">'),Ya.writeln('@font-face {\nfont-family: "'+mxUtils.htmlEntities(eb)+'";\nsrc: url("'+mxUtils.htmlEntities(db)+'");\n}'),Ya.writeln("</style>"))}};if("undefined"!==typeof MathJax){var ib=Ha.renderPage;Ha.renderPage=function(Ya,cb,bb,eb,db,kb){var jb=mxClient.NO_FO,fb=ib.apply(this,arguments);mxClient.NO_FO=jb;this.graph.mathEnabled?this.mathEnabled=this.mathEnabled||!0:fb.className="geDisableMathJax";return fb}}Wa=null;$a=O.shapeForegroundColor;Za=O.shapeBackgroundColor;