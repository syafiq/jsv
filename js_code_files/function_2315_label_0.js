!this.editor.editable&&(n.getHash=function(){return"G"+k},window.location.hash="#"+n.getHash());null!=c&&c()}));return!0}return!1});!g()&&this.spinner.spin(document.body,mxResources.get("loading"))&&this.addListener("clientLoaded",g);return!0});this.loadTemplate(A,mxUtils.bind(this,function(g){this.spinner.stop();if(null!=g&&0<g.length){var k=this.defaultFilename;if(null==urlParams.title&&"1"!=urlParams.notitle){var n=A,x=A.lastIndexOf("."),u=n.lastIndexOf("/");x>u&&0<u&&(n=n.substring(u+1,x),x=A.substring(x),