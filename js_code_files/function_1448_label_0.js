z.scrollHeight-z.offsetHeight&&q()},mxEvent.addListener(z,"scroll",x))}}),k)});J.okButton.setAttribute("disabled","disabled");this.ui.spinner.spin(z,mxResources.get("loading"));var F=mxUtils.bind(this,function(I){var G=this.ui.spinner,U=0;this.ui.spinner.stop();var q=function(){G.spin(z,mxResources.get("loading"));U+=1},v=function(){--U;0===U&&G.stop()};null==I&&(z.innerText="",I=1);null!=x&&(mxEvent.removeListener(z,"scroll",x),x=null);null!=n&&null!=n.parentNode&&n.parentNode.removeChild(n);n=document.createElement("a");