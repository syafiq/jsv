null!=E&&(E=/.* \/Info (\d+) (\d+) R/g.exec(E.join("\n")),null!=E&&0<E.length&&(E=q[E[1]],null!=E&&(E=/.* \/Subject (\d+) (\d+) R/g.exec(E.join("\n")),null!=E&&0<E.length&&(q=q[E[1]],null!=q&&(q=q.join("\n"),S=q.substring(1,q.length-1))))));return S};Editor.extractParserError=function(q,E){var S=null;q=null!=q?q.getElementsByTagName("parsererror"):null;null!=q&&0<q.length&&(S=E||mxResources.get("invalidChars"),E=q[0].getElementsByTagName("div"),0<E.length&&(S=mxUtils.getTextContent(E[0])));return null!=
S?mxUtils.trim(S):S};Editor.addRetryToError=function(q,E){null!=q&&(q=null!=q.error?q.error:q,null==q.retry&&(q.retry=E))};Editor.configure=function(q){if(null!=q){Editor.config=q;Editor.configVersion=q.version;Menus.prototype.defaultFonts=q.defaultFonts||Menus.prototype.defaultFonts;ColorDialog.prototype.presetColors=q.presetColors||ColorDialog.prototype.presetColors;ColorDialog.prototype.defaultColors=q.defaultColors||ColorDialog.prototype.defaultColors;ColorDialog.prototype.colorNames=q.colorNames||