E,S,ba,U,ca,da,pa,ra,ua,oa){A.apply(this,arguments);Graph.processFontAttributes(oa)};var J=mxText.prototype.redraw;mxText.prototype.redraw=function(){J.apply(this,arguments);null!=this.node&&"DIV"==this.node.nodeName&&Graph.processFontAttributes(this.node)};Graph.prototype.createTagsDialog=function(q,E,S){function ba(){for(var wa=da.getSelectionCells(),Ca=[],La=0;La<wa.length;La++)da.isCellVisible(wa[La])&&Ca.push(wa[La]);da.setSelectionCells(Ca)}function U(wa){da.setHiddenTags(wa?[]:pa.slice());
ba();da.refresh()}function ca(wa,Ca){ua.innerText="";if(0<wa.length){var La=document.createElement("table");La.setAttribute("cellpadding","2");La.style.boxSizing="border-box";La.style.tableLayout="fixed";La.style.width="100%";var Ma=document.createElement("tbody");if(null!=wa&&0<wa.length)for(var Ka=0;Ka<wa.length;Ka++)(function(Ba){var ab=0>mxUtils.indexOf(da.hiddenTags,Ba),Ya=document.createElement("tr"),y=document.createElement("td");y.style.align="center";y.style.width="16px";var N=document.createElement("img");
N.setAttribute("src",ab?Editor.visibleImage:Editor.hiddenImage);N.setAttribute("title",mxResources.get(ab?"hideIt":"show",[Ba]));mxUtils.setOpacity(N,ab?75:25);N.style.verticalAlign="middle";N.style.cursor="pointer";N.style.width="16px";if(E||Editor.isDarkMode())N.style.filter="invert(100%)";y.appendChild(N);mxEvent.addListener(N,"click",function(W){mxEvent.isShiftDown(W)?U(0<=mxUtils.indexOf(da.hiddenTags,Ba)):(da.toggleHiddenTag(Ba),ba(),da.refresh());mxEvent.consume(W)});Ya.appendChild(y);y=document.createElement("td");
y.style.overflow="hidden";y.style.whiteSpace="nowrap";y.style.textOverflow="ellipsis";y.style.verticalAlign="middle";y.style.cursor="pointer";y.setAttribute("title",Ba);a=document.createElement("a");mxUtils.write(a,Ba);a.style.textOverflow="ellipsis";a.style.position="relative";mxUtils.setOpacity(a,ab?100:40);y.appendChild(a);mxEvent.addListener(y,"click",function(W){if(mxEvent.isShiftDown(W)){U(!0);var Y=da.getCellsForTags([Ba],null,null,!0);da.isEnabled()?da.setSelectionCells(Y):da.highlightCells(Y)}else if(ab&&
0<da.hiddenTags.length)U(!0);else{Y=pa.slice();var ha=mxUtils.indexOf(Y,Ba);Y.splice(ha,1);da.setHiddenTags(Y);ba();da.refresh()}mxEvent.consume(W)});Ya.appendChild(y);if(da.isEnabled()){y=document.createElement("td");y.style.verticalAlign="middle";y.style.textAlign="center";y.style.width="18px";if(null==Ca){y.style.align="center";y.style.width="16px";N=document.createElement("img");N.setAttribute("src",Editor.crossImage);N.setAttribute("title",mxResources.get("removeIt",[Ba]));mxUtils.setOpacity(N,
ab?75:25);N.style.verticalAlign="middle";N.style.cursor="pointer";N.style.width="16px";if(E||Editor.isDarkMode())N.style.filter="invert(100%)";mxEvent.addListener(N,"click",function(W){var Y=mxUtils.indexOf(pa,Ba);0<=Y&&pa.splice(Y,1);da.removeTagsForCells(da.model.getDescendants(da.model.getRoot()),[Ba]);da.refresh();mxEvent.consume(W)});y.appendChild(N)}else{var P=document.createElement("input");P.setAttribute("type","checkbox");P.style.margin="0px";P.defaultChecked=null!=Ca&&0<=mxUtils.indexOf(Ca,
Ba);P.checked=P.defaultChecked;P.style.background="transparent";P.setAttribute("title",mxResources.get(P.defaultChecked?"removeIt":"add",[Ba]));mxEvent.addListener(P,"change",function(W){P.checked?da.addTagsForCells(da.getSelectionCells(),[Ba]):da.removeTagsForCells(da.getSelectionCells(),[Ba]);mxEvent.consume(W)});y.appendChild(P)}Ya.appendChild(y)}Ma.appendChild(Ya)})(wa[Ka]);La.appendChild(Ma);ua.appendChild(La)}}var da=this,pa=da.hiddenTags.slice(),ra=document.createElement("div");ra.style.userSelect=
"none";ra.style.overflow="hidden";ra.style.padding="10px";ra.style.height="100%";var ua=document.createElement("div");ua.style.boxSizing="border-box";ua.style.borderRadius="4px";ua.style.userSelect="none";ua.style.overflow="auto";ua.style.position="absolute";ua.style.left="10px";ua.style.right="10px";ua.style.top="10px";ua.style.border=da.isEnabled()?"1px solid #808080":"none";ua.style.bottom=da.isEnabled()?"48px":"10px";ra.appendChild(ua);var oa=mxUtils.button(mxResources.get("reset"),function(wa){da.setHiddenTags([]);
mxEvent.isShiftDown(wa)||(pa=da.hiddenTags.slice());ba();da.refresh()});oa.setAttribute("title",mxResources.get("reset"));oa.className="geBtn";oa.style.margin="0 4px 0 0";var Aa=mxUtils.button(mxResources.get("add"),function(){null!=S&&S(pa,function(wa){pa=wa;na()})});Aa.setAttribute("title",mxResources.get("add"));Aa.className="geBtn";Aa.style.margin="0";da.addListener(mxEvent.ROOT,function(){pa=da.hiddenTags.slice()});var na=mxUtils.bind(this,function(wa,Ca){if(q()){wa=da.getAllTags();for(Ca=0;Ca<
wa.length;Ca++)0>mxUtils.indexOf(pa,wa[Ca])&&pa.push(wa[Ca]);pa.sort();da.isSelectionEmpty()?ca(pa):ca(pa,da.getCommonTagsForCells(da.getSelectionCells()))}});da.selectionModel.addListener(mxEvent.CHANGE,na);da.model.addListener(mxEvent.CHANGE,na);da.addListener(mxEvent.REFRESH,na);var ya=document.createElement("div");ya.style.boxSizing="border-box";ya.style.whiteSpace="nowrap";ya.style.position="absolute";ya.style.overflow="hidden";ya.style.bottom="0px";ya.style.height="42px";ya.style.right="10px";
ya.style.left="10px";da.isEnabled()&&(ya.appendChild(oa),ya.appendChild(Aa),ra.appendChild(ya));return{div:ra,refresh:na}};Graph.prototype.getCustomFonts=function(){var q=this.extFonts;q=null!=q?q.slice():[];for(var E in Graph.customFontElements){var S=Graph.customFontElements[E];q.push({name:S.name,url:S.url})}return q};Graph.prototype.setFont=function(q,E){Graph.addFont(q,E);document.execCommand("fontname",!1,q);if(null!=E){var S=this.cellEditor.textarea.getElementsByTagName("font");E=Graph.getFontUrl(q,