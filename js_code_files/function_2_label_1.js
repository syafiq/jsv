Ba);aa.editorUi.fireEvent(new mxEventObject("styleChanged","keys",ia,"values",wa,"cells",ca.getSelectionCells()))}finally{ca.getModel().endUpdate()}}function O(oa,Ba,Aa){var La=mxUtils.getOffset(q,!0),ia=mxUtils.getOffset(oa,!0);Ba.style.position="absolute";Ba.style.left=ia.x-La.x+"px";Ba.style.top=ia.y-La.y+"px";Ba.style.width=oa.offsetWidth+"px";Ba.style.height=oa.offsetHeight-(Aa?4:0)+"px";Ba.style.zIndex=5}function S(oa,Ba,Aa){var La=document.createElement("div");La.style.width="32px";La.style.height=