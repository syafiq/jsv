window.console&&console.log("Error:",L)}}function l(O){if(b.shareCursorPosition&&!A.isMouseDown){var V=mxUtils.getOffset(A.container),p=A.view.translate,B=A.view.scale,L=null!=b.currentPage?b.currentPage.getId():null;c("cursor",{pageId:L,x:Math.round((O.getX()-V.x+A.container.scrollLeft)/B-p.x),y:Math.round((O.getY()-V.y+A.container.scrollTop)/B-p.y)})}}function m(O,V){var p=null!=b.currentPage?b.currentPage.getId():null;if(null!=O&&null!=O.cursor&&null!=O.lastCursor)if(null!=O.lastCursor.hide||!b.isShowRemoteCursors()||