function(e,g,k){var n=window.open("about:blank");null==n||null==n.document?mxUtils.popup(e,!0):("image/svg+xml"!=g||mxClient.IS_SVG?"image/svg+xml"!=g||k?(e=k?e:btoa(unescape(encodeURIComponent(e))),n.document.write('<html><img style="max-width:100%;" src="data:'+g+";base64,"+e+'"/></html>')):n.document.write("<html>"+e+"</html>"):n.document.write("<html><pre>"+mxUtils.htmlEntities(e,!1)+"</pre></html>"),n.document.close())};var c=EditorUi.prototype.addChromelessToolbarItems;EditorUi.prototype.isChromelessImageExportEnabled=